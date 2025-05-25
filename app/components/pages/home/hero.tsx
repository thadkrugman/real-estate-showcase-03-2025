import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Props = {};

export default function Hero({}: Props) {
  return (
    <Container className='relative bg-[url("/images/home/hero-mobile.webp")] sm:bg-[url("/images/home/hero.webp")] bg-cover bg-center lg:aspect-16/11 nav-white-section max-lg:pt-96'>
      {/* Gradient overlay */}
      <div className='absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-transparent via-25% lg:via-45% to-black/75'></div>
      {/* Main content container */}
      <div className='relative z-10 h-full flex flex-col justify-end'>
        <h1 className='heading-1 text-white max-w-sm sm:max-w-3xl text-balance'>
          Building Dreams, One Home at a Time
        </h1>
        <p className='text-white max-w-3xl mt-4 sm:mt-6 text-lg sm:text-xl/8'>
          Discover the perfect property with expert guidance and seamless search
          tools.
        </p>
        {/* Search */}
        <div className='mt-6 mb-12 bg-white flex flex-row max-w-lg h-12 items-center pr-1.5 rounded-full'>
          <Input
            placeholder='Search by location'
            className='pl-5 h-12 rounded-l-full border-0 focus-visible:ring-0'
          />
          <Button className='cursor-pointer'>Search</Button>
        </div>
        {/* Filtering */}
        <div className='flex flex-row justify-between max-w-lg w-full mb-12'>
          <div>
            <p className='text-xl font-medium text-background'>Type</p>
            <p className='text-background mt-2 text-sm'>Duplex</p>
          </div>
          <div>
            <p className='text-xl font-medium text-background'>Price</p>
            <p className='text-background mt-2 text-sm'>$261-$369K</p>
          </div>
          <div>
            <p className='text-xl font-medium text-background'>Area</p>
            <p className='text-background mt-2 text-sm'>Near Avon Ohio</p>
          </div>
          <div>
            <p className='text-xl font-medium text-background'>When</p>
            <p className='text-background mt-2 text-sm'>Select Move-in Date</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
