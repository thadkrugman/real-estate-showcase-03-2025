import Container from '@/components/shared/container';

export default function ContactInfo() {
  return (
    <Container tag='section'>
      <div className='mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none'>
        <div className='grid grid-cols-1 gap-10 pb-16 lg:grid-cols-3'>
          <div>
            <h2 className='text-pretty text-4xl font-bold tracking-tight text-foreground'>
              Contact Information
            </h2>
            <p className='mt-4 text-base/7 text-muted-foreground'>
              Reach out to us through any of our channels. We're here to help
              with your inquiries and support needs.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8'>
            <div className='rounded-2xl bg-muted/45 p-10'>
              <h3 className='text-base/7 font-semibold text-foreground'>
                Collaborate
              </h3>
              <dl className='mt-3 space-y-1 text-sm/6 text-muted-foreground'>
                <div>
                  <dt className='sr-only'>Email</dt>
                  <dd>
                    <a
                      href='mailto:collaborate@example.com'
                      className='font-semibold text-primary'
                    >
                      collaborate@example.com
                    </a>
                  </dd>
                </div>
                <div className='mt-1'>
                  <dt className='sr-only'>Phone number</dt>
                  <dd>+1 (555) 905-2345</dd>
                </div>
              </dl>
            </div>
            <div className='rounded-2xl bg-muted/45 p-10'>
              <h3 className='text-base/7 font-semibold text-foreground'>
                Press
              </h3>
              <dl className='mt-3 space-y-1 text-sm/6 text-muted-foreground'>
                <div>
                  <dt className='sr-only'>Email</dt>
                  <dd>
                    <a
                      href='mailto:press@example.com'
                      className='font-semibold text-primary'
                    >
                      press@example.com
                    </a>
                  </dd>
                </div>
                <div className='mt-1'>
                  <dt className='sr-only'>Phone number</dt>
                  <dd>+1 (555) 905-3456</dd>
                </div>
              </dl>
            </div>
            <div className='rounded-2xl bg-muted/45 p-10'>
              <h3 className='text-base/7 font-semibold text-foreground'>
                Join our team
              </h3>
              <dl className='mt-3 space-y-1 text-sm/6 text-muted-foreground'>
                <div>
                  <dt className='sr-only'>Email</dt>
                  <dd>
                    <a
                      href='mailto:careers@example.com'
                      className='font-semibold text-primary'
                    >
                      careers@example.com
                    </a>
                  </dd>
                </div>
                <div className='mt-1'>
                  <dt className='sr-only'>Phone number</dt>
                  <dd>+1 (555) 905-4567</dd>
                </div>
              </dl>
            </div>
            <div className='rounded-2xl bg-muted/45 p-10'>
              <h3 className='text-base/7 font-semibold text-foreground'>
                Say hello
              </h3>
              <dl className='mt-3 space-y-1 text-sm/6 text-muted-foreground'>
                <div>
                  <dt className='sr-only'>Email</dt>
                  <dd>
                    <a
                      href='mailto:hello@example.com'
                      className='font-semibold text-primary'
                    >
                      hello@example.com
                    </a>
                  </dd>
                </div>
                <div className='mt-1'>
                  <dt className='sr-only'>Phone number</dt>
                  <dd>+1 (555) 905-5678</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-10 pt-16 lg:grid-cols-3'>
          <div>
            <h2 className='text-pretty text-4xl font-bold tracking-tight text-foreground'>
              Locations
            </h2>
            <p className='mt-4 text-base/7 text-muted-foreground'>
              Visit our offices in the following locations. We're always here to
              help you with your inquiries and support needs.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8'>
            <div className='rounded-2xl bg-muted/45 p-10'>
              <h3 className='text-base/7 font-semibold text-foreground'>
                Los Angeles
              </h3>
              <address className='mt-3 space-y-1 text-sm/6 not-italic text-muted-foreground'>
                <p>4556 Brendan Ferry</p>
                <p>Los Angeles, CA 90210</p>
              </address>
            </div>
            <div className='rounded-2xl bg-muted/45 p-10'>
              <h3 className='text-base/7 font-semibold text-foreground'>
                New York
              </h3>
              <address className='mt-3 space-y-1 text-sm/6 not-italic text-muted-foreground'>
                <p>886 Walter Street</p>
                <p>New York, NY 12345</p>
              </address>
            </div>
            <div className='rounded-2xl bg-muted/45 p-10'>
              <h3 className='text-base/7 font-semibold text-foreground'>
                Toronto
              </h3>
              <address className='mt-3 space-y-1 text-sm/6 not-italic text-muted-foreground'>
                <p>7363 Cynthia Pass</p>
                <p>Toronto, ON N3Y 4H8</p>
              </address>
            </div>
            <div className='rounded-2xl bg-muted/45 p-10'>
              <h3 className='text-base/7 font-semibold text-foreground'>
                Chicago
              </h3>
              <address className='mt-3 space-y-1 text-sm/6 not-italic text-muted-foreground'>
                <p>726 Mavis Island</p>
                <p>Chicago, IL 60601</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
