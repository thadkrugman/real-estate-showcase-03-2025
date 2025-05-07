import { Link } from '@tanstack/react-router';
import { Button } from '../ui/button';
import { House, Search } from 'lucide-react';
import Container from './container';
type Props = {};

export default function Navbar({}: Props) {
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
    <Container className='flex-row items-center justify-center h-11 mt-9 top-0 fixed z-50 left-1/2 -translate-x-1/2'>
      <div className='flex-3/12 h-full flex items-center justify-start'>
        <Link to='/' className='flex items-center justify-center'>
          <div className='flex items-center justify-center gap-3'>
            <div className='size-9 rounded-full bg-background flex items-center justify-center'>
              <House className='size-5' />
            </div>
            <span className='text-2xl font-bold text-background'>UrcKe</span>
          </div>
        </Link>
      </div>
      <nav className='flex-6/12 h-full flex items-center justify-center'>
        <ul className='bg-background h-full rounded-full flex flex-row items-center justify-center w-fit gap-9 px-6 font-semibold text-sm text-muted-foreground'>
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
      <div className='flex-3/12 h-full flex items-center justify-end gap-4'>
        <Button
          variant={'outline'}
          size={'icon'}
          className='bg-transparent border-background hover:bg-background group cursor-pointer'
        >
          <Search className='text-background group-hover:text-foreground transition-all' />
        </Button>
        <Button className='cursor-pointer'>Get Started</Button>
      </div>
    </Container>
  );
}
