import Container from '@/components/shared/container';
import { Separator } from '@/components/ui/separator';

const contactMethods = [
  {
    title: 'Collaborate',
    email: 'collaborate@example.com',
    phone: '+1 (555) 905-2345',
  },
  {
    title: 'Press',
    email: 'press@example.com',
    phone: '+1 (555) 905-3456',
  },
  {
    title: 'Join our team',
    email: 'careers@example.com',
    phone: '+1 (555) 905-4567',
  },
  {
    title: 'Say hello',
    email: 'hello@example.com',
    phone: '+1 (555) 905-5678',
  },
];

const locations = [
  {
    city: 'Los Angeles',
    street: '4556 Brendan Ferry',
    cityState: 'Los Angeles, CA 90210',
  },
  {
    city: 'New York',
    street: '886 Walter Street',
    cityState: 'New York, NY 12345',
  },
  {
    city: 'Toronto',
    street: '7363 Cynthia Pass',
    cityState: 'Toronto, ON N3Y 4H8',
  },
  {
    city: 'Chicago',
    street: '726 Mavis Island',
    cityState: 'Chicago, IL 60601',
  },
];

export default function ContactInfo() {
  return (
    <Container tag='section' className='mt-4 sm:mt-16'>
      <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
        <div className='grid grid-cols-1 gap-10 pb-16 lg:grid-cols-3'>
          <div>
            <h2 className='text-pretty text-4xl font-bold tracking-tight text-foreground'>
              Contact Information
            </h2>
            <p className='mt-4 text-base/8 text-muted-foreground'>
              Reach out to us through any of our channels. We're here to help
              with your inquiries and support needs.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8'>
            {contactMethods.map((contact) => (
              <div key={contact.title} className='rounded-2xl bg-muted p-10'>
                <h3 className='text-base/7 font-semibold text-foreground'>
                  {contact.title}
                </h3>
                <dl className='mt-3 space-y-1 text-sm/6 text-muted-foreground'>
                  <div>
                    <dt className='sr-only'>Email</dt>
                    <dd>
                      <a
                        href={`mailto:${contact.email}`}
                        className='font-semibold text-primary'
                      >
                        {contact.email}
                      </a>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd>{contact.phone}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div className='grid grid-cols-1 gap-10 pt-16 lg:grid-cols-3'>
          <div>
            <h2 className='text-pretty text-4xl font-bold tracking-tight text-foreground'>
              Locations
            </h2>
            <p className='mt-4 text-base/8 text-muted-foreground'>
              Visit our offices in the following locations. We're always here to
              help you with your inquiries and support needs.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8'>
            {locations.map((location) => (
              <div key={location.city} className='rounded-2xl bg-muted p-10'>
                <h3 className='text-base/7 font-semibold text-foreground'>
                  {location.city}
                </h3>
                <address className='mt-3 space-y-1 text-sm/6 not-italic text-muted-foreground'>
                  <p>{location.street}</p>
                  <p>{location.cityState}</p>
                </address>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
