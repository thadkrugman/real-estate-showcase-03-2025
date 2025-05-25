import { createFileRoute } from '@tanstack/react-router';
import Header from '@/components/shared/header';

export const Route = createFileRoute('/listings/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header
        title='Listings'
        description='Browse our listings and find your dream home.'
      />
    </>
  );
}
