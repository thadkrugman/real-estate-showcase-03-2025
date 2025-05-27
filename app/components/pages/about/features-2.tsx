import { Search, MapPin, Shield } from 'lucide-react';
import Container from '@/components/shared/container';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: Search,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: MapPin,
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: Shield,
  },
];

export default function Features2() {
  return (
    <div className='overflow-hidden mt-24 sm:mt-36'>
      <Container className='mx-auto'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:ml-auto lg:pl-4'>
            <div className='lg:max-w-lg'>
              <h2 className='heading-2 text-foreground text-pretty'>
                A better workflow
              </h2>
              <p className='mt-6 text-lg/8 text-muted-foreground'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base/7 text-muted-foreground lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-foreground'>
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
              src='https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png'
              width={2432}
              height={1442}
              className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
