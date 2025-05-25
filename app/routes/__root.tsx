import {
  Outlet,
  HeadContent,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import appCss from '../styles/app.css?url';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  component: () => (
    <RootDocument>
      <Outlet />
      <TanStackRouterDevtools />
    </RootDocument>
  ),
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className='min-h-dvh flex flex-col'>
          <Navbar />
          <main className='flex-1'>{children}</main>
          <Footer />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
