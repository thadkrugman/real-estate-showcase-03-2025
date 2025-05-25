import ContactInfo from '@/components/pages/contact/contact-info';
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
        description="Have a question or ready to start your real estate journey? We're here to help you find your perfect home or answer any inquiries you may have."
      />
      <ContactInfo />
    </>
  );
}
