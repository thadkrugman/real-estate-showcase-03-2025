import { Link } from '@tanstack/react-router';
import { Button } from '../ui/button';
import { House, Menu, Search } from 'lucide-react';
import Container from './container';
import { useEffect, useState, useRef } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

type Props = {};

export default function Navbar({}: Props) {
  const [isNavWhite, setIsNavWhite] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a sentinel element that will be placed at the top of the page
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '0';
    sentinel.style.left = '0';
    sentinel.style.width = '100%';
    sentinel.style.height = '1px';
    sentinel.style.zIndex = '-1';
    document.body.appendChild(sentinel);

    // Set up intersection observer for white sections
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        // Check if any white section is intersecting with the navbar
        const isIntersecting = entries.some((entry) => entry.isIntersecting);
        setIsNavWhite(isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when at least 10% is visible
        rootMargin: '0px 0px -90% 0px', // Only consider the top portion of the viewport
      },
    );

    // Observe all white sections
    document.querySelectorAll('.nav-white-section').forEach((section) => {
      sectionObserver.observe(section);
    });

    // Update when new sections are added
    const mutationObserver = new MutationObserver(() => {
      // First disconnect from all previously observed sections
      sectionObserver.disconnect();
      // Then observe all current sections
      document.querySelectorAll('.nav-white-section').forEach((section) => {
        sectionObserver.observe(section);
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Clean up
    return () => {
      sectionObserver.disconnect();
      mutationObserver.disconnect();
      if (sentinel.parentNode) {
        sentinel.parentNode.removeChild(sentinel);
      }
    };
  }, []);

  const navItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Listings',
      href: '/listings',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <div ref={navRef} className='w-full mx-auto'>
      <Container
        className={`flex-row items-center justify-center h-auto lg:h-11 mt-6 sm:mt-8 md:mt-9 top-0 fixed z-50 left-1/2 -translate-x-1/2`}
      >
        <div className='flex-3/12 h-full flex items-center justify-start'>
          <Link to='/' className='flex items-center justify-center'>
            <div className='flex items-center justify-center gap-3'>
              <div
                className={`size-9 rounded-full ${isNavWhite ? 'bg-background' : 'bg-foreground'} flex items-center justify-center`}
              >
                <House
                  className={`size-5 ${isNavWhite ? 'text-foreground  ' : 'text-background'}`}
                />
              </div>
              <span
                className={`text-2xl font-bold ${isNavWhite ? 'text-background' : 'text-foreground'}`}
              >
                UrcKe
              </span>
            </div>
          </Link>
        </div>
        <nav className='flex-6/12 h-full hidden lg:flex items-center justify-center'>
          <ul
            className={`bg-background h-full rounded-full flex flex-row items-center justify-center w-fit gap-9 px-6 font-semibold text-sm text-muted-foreground ${isNavWhite ? '' : 'shadow-md'}`}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`flex items-center justify-center transition-colors hover:text-foreground/80`}
                  activeOptions={{ exact: true }}
                  activeProps={{
                    className: 'text-foreground',
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex-3/12 h-full hidden lg:flex items-center justify-end gap-4'>
          <Button
            variant={'outline'}
            size={'icon'}
            className={`${isNavWhite ? 'bg-transparent border-background hover:bg-background group' : 'bg-transparent border-foreground hover:bg-foreground group'} cursor-pointer`}
          >
            <Search
              className={`${isNavWhite ? 'text-background group-hover:text-foreground' : 'text-foreground group-hover:text-background'} transition-all`}
            />
          </Button>
          <Button className='cursor-pointer'>Get Started</Button>
        </div>
        <div className='lg:hidden'>
          <Drawer>
            <DrawerTrigger>
              <Menu
                className={`${isNavWhite ? 'text-background' : 'text-foreground'} size-7`}
              />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant='outline'>Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </Container>
    </div>
  );
}
