import { Home, TrendingUp, Building } from 'lucide-react';
import Container from '@/components/shared/container';

const features = [
  {
    name: 'For Buyers',
    description:
      'Navigate the market with confidence through our curated property listings, neighborhood insights, and expert negotiation support to secure your dream home.',
    icon: Home,
  },
  {
    name: 'For Sellers',
    description:
      'Maximize your property value with strategic pricing, professional marketing campaigns, and our proven track record of faster sales.',
    icon: TrendingUp,
  },
  {
    name: 'For Landlords',
    description:
      'Streamline your rental business with tenant screening, lease management, and ongoing property oversight to protect your investment.',
    icon: Building,
  },
];

export default function Features2() {
  return (
    <div className='overflow-hidden mt-24 sm:mt-36'>
      <Container className='mx-auto overflow-hidden'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:ml-auto lg:pl-4'>
            <div className='lg:max-w-lg'>
              <h2 className='heading-2 text-foreground text-pretty'>
                Comprehensive Real Estate Services
              </h2>
              <p className='mt-6 text-lg/8 text-muted-foreground'>
                Whether you're buying your first home, selling for top dollar,
                or managing rental properties, we deliver specialized expertise
                for every real estate need.
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base/7 text-muted-foreground lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-bold text-foreground'>
                      <feature.icon
                        aria-hidden='true'
                        className='absolute left-1 top-1 size-5 text-primary'
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className='flex items-start justify-end lg:order-first'>
            <img
              alt='Product screenshot'
              src='https://images.pexels.com/photos/3939978/pexels-photo-3939978.jpeg?auto=compress&cs=tinysrgb&w=1500&dpr=2'
              width={2432}
              height={1442}
              className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] aspect-[16/10]'
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
