import Header from '@/components/shared/header';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header
        title='About Us'
        description='Learn more about our company and our mission.'
      />
    </>
  );
}
