import Container from '@/components/shared/container';
import { Search, MapPin, Shield } from 'lucide-react';

const features = [
  {
    name: 'Advanced Property Search',
    description:
      "Discover your perfect home with our intelligent search filters. Browse by location, price range, property type, and unique features to find exactly what you're looking for.",
    href: '#',
    icon: Search,
  },
  {
    name: 'Neighborhood Insights',
    description:
      'Get detailed information about local schools, amenities, transportation, and community features to make informed decisions about your future neighborhood.',
    href: '#',
    icon: MapPin,
  },
  {
    name: 'Verified Listings',
    description:
      'Every property on our platform is thoroughly verified and regularly updated. Trust in accurate information, verified photos, and reliable contact details.',
    href: '#',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <Container className='mt-24 md:mt-36'>
      <div className='mx-auto max-w-2xl lg:text-center'>
        <h2 className='text-balance text-foreground heading-2'>
          Everything you need to find your dream home
        </h2>
        <p className='mt-6 text-lg/8 text-muted-foreground text-balance'>
          From initial search to final move-in, our comprehensive platform
          provides all the tools and insights you need for a seamless real
          estate experience. Discover properties, explore neighborhoods, and
          connect with trusted professionals.
        </p>
      </div>
      <div className='mx-auto mt-14 max-w-2xl lg:max-w-none'>
        <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
          {features.map((feature) => (
            <div key={feature.name} className='flex flex-col'>
              <dt className='flex items-center gap-x-3 text-lg/7 font-bold text-foreground'>
                <feature.icon
                  aria-hidden='true'
                  className='size-5 text-primary'
                />

                {feature.name}
              </dt>
              <dd className='mt-4 flex flex-auto flex-col text-base/7 text-muted-foreground'>
                <p className='flex-auto'>{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Container>
  );
}
