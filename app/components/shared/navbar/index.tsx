import { Link, useRouter } from '@tanstack/react-router';
import { Button } from '../../ui/button';
import { Search } from 'lucide-react';
import Container from '../container';
import { useEffect, useState, useRef } from 'react';
import { navItems } from '@/lib/constants/nav-links';
import MobileMenu from './mobile-menu';

type Props = {};

export default function Navbar({}: Props) {
  const [isNavWhite, setIsNavWhite] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mutationObserverRef = useRef<MutationObserver | null>(null);
  const router = useRouter();
  const pathname = router.state.location.pathname;

  useEffect(() => {
    observerRef.current?.disconnect();
    mutationObserverRef.current?.disconnect();

    const setupIntersectionObserver = () => {
      const navEl = navRef.current;
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('.nav-white-section'),
      );

      if (!navEl || sections.length === 0) {
        setIsNavWhite(false);
        return false;
      }

      const navHeight = navEl.offsetHeight;
      setIsNavWhite(true);
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const inView = entries.some((entry) => {
            const { top, bottom } = entry.boundingClientRect;
            return top <= navHeight && bottom > 0;
          });
          setIsNavWhite(inView);
        },
        {
          threshold: Array.from({ length: 11 }, (_, i) => i / 10),
          rootMargin: `-${navHeight}px 0px 0px 0px`,
        },
      );

      sections.forEach((section) => observerRef.current?.observe(section));
      return true;
    };

    if (!setupIntersectionObserver()) {
      mutationObserverRef.current = new MutationObserver((_mutations) => {
        if (document.querySelector('.nav-white-section')) {
          setupIntersectionObserver();
        }
      });

      mutationObserverRef.current.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observerRef.current?.disconnect();
      mutationObserverRef.current?.disconnect();
    };
  }, [pathname, navRef]);

  return (
    <div ref={navRef} className='w-full mx-auto'>
      <Container className='flex-row items-center justify-center h-auto lg:h-11 mt-6 sm:mt-8 md:mt-9 top-0 fixed z-50 left-1/2 -translate-x-1/2'>
        <div className='flex-3/12 h-full flex items-center justify-start'>
          <Link to='/' className='flex items-center justify-center'>
            <div className='flex items-center justify-center gap-3'>
              <div
                className={`size-9 rounded-full ${
                  isNavWhite ? 'bg-background' : 'bg-foreground'
                } flex items-center justify-center`}
              >
                <div className='size-5.5 flex items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='100%'
                    height='100%'
                    viewBox='0 0 264.6 181.3'
                  >
                    <path
                      d='M257.7,0l-.9.3-64.3,23.9h-.2S55.7,2.4,55.7,2.4l-1.6,10.2-1.2,7.5c0,.7-.1,1.4-.2,2.1,0,.2,0,.4,0,.6.4.6,12.1,1.8,14,2.2.6.2,1.7.3,1.9,1v44.4L0,95.8l.7,2,3.7,10,2.5,6.8,23.8-8.8v75l.6.6h191.1v-.6h13.2V29.5h.4c0-.1,28.6-10.8,28.6-10.8l-7-18.8ZM89.2,28l24.4,3.9,40.7,6.5h.3s0,0,0,0h-.4c0,0-65.1,24.2-65.1,24.2V28ZM172.9,161.3h-20.9v-46h20.9v46ZM215.6,161.3h-22.7v-47h.1v-20h-62.5v67H51.8v-63.4l163.8-60.9v124.3Z'
                      fill={isNavWhite ? 'black' : 'white'}
                    />
                  </svg>
                </div>
              </div>
              <span
                className={`text-2xl font-bold ${
                  isNavWhite ? 'text-background' : 'text-foreground'
                }`}
              >
                UrcKe
              </span>
            </div>
          </Link>
        </div>
        <nav className='flex-6/12 h-full hidden lg:flex items-center justify-center'>
          <ul
            className={`h-full rounded-full flex flex-row items-center justify-center w-fit gap-9 px-6 font-semibold text-sm transition-colors ${
              isNavWhite ?
                'bg-background text-muted-foreground'
              : 'bg-foreground text-background/75'
            }`}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`flex items-center justify-center transition-colors ${
                    isNavWhite ?
                      'hover:text-foreground'
                    : 'hover:text-background'
                  }`}
                  activeOptions={{ exact: true }}
                  activeProps={{
                    className: `${
                      isNavWhite ? 'text-foreground' : 'text-background'
                    }`,
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex-3/12 h-full hidden lg:flex items-center justify-end gap-4'>
          <Button
            variant='outline'
            size='icon'
            className={`${
              isNavWhite ?
                'bg-transparent border-background hover:bg-background group'
              : 'bg-transparent border-foreground hover:bg-foreground group'
            } cursor-pointer`}
          >
            <Search
              className={`${
                isNavWhite ?
                  'text-background group-hover:text-foreground'
                : 'text-foreground group-hover:text-background'
              } transition-all`}
            />
          </Button>
          <Button className='cursor-pointer'>Get Started</Button>
        </div>
        <MobileMenu isNavWhite={isNavWhite} />
      </Container>
    </div>
  );
}
