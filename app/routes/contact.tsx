import Header from '@/components/shared/header';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header
        title='Contact Us'
        description='Get in touch with us and we will get back to you as soon as possible.'
      />
    </>
  );
}
