import Container from '@/components/shared/container';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Container navSpacer={true}>Hello "/about"!</Container>
    </>
  );
}
