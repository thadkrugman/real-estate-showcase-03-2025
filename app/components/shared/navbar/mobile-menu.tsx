import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerClose,
} from '@/components/ui/drawer';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Menu } from 'lucide-react';
import { navItems } from '@/lib/constants/nav-links';

interface MobileMenuProps {
  isNavWhite: boolean;
}

export default function MobileMenu({ isNavWhite }: MobileMenuProps) {
  return (
    <div className='lg:hidden'>
      <Drawer>
        <DrawerTrigger className='py-0.5 pl-2 focus:outline-none'>
          <Menu
            className={`${
              isNavWhite ? 'text-background' : 'text-foreground'
            } size-7`}
          />
        </DrawerTrigger>
        <DrawerContent className='lg:hidden'>
          <DrawerHeader className='px-6'>
            <DrawerClose asChild>
              <Link to='/' className='flex items-center justify-start'>
                <div className='flex items-center justify-center gap-3'>
                  <div
                    className={`size-9 rounded-full bg-foreground
               flex items-center justify-center`}
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
                          fill={'white'}
                        />
                      </svg>
                    </div>
                  </div>
                  <span
                    className={`text-2xl font-bold text-foreground
                }`}
                  >
                    UrcKe
                  </span>
                </div>
              </Link>
            </DrawerClose>
          </DrawerHeader>
          <div className='px-6'>
            <div className='flex flex-col gap-2'>
              {navItems.map((item) => (
                <DrawerClose asChild>
                  <Link
                    key={item.href}
                    to={item.href}
                    className='w-full text-muted-foreground font-semibold py-1.5 rounded-md pr-4'
                  >
                    {item.name}
                  </Link>
                </DrawerClose>
              ))}
            </div>
            <Separator className='mt-5' />
          </div>
          <DrawerFooter className='px-6 py-7.5'>
            <Button>Get Started</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
