import Container from '@/components/shared/container';

export default function DoublePic() {
  return (
    <Container className='mt-24 md:mt-36'>
      <div className='flex flex-col md:flex-row md:gap-8 md:items-end max-md:space-y-4'>
        <h2 className='heading-2 max-w-sm w-full'>
          From Finding to Finalizing
        </h2>
        <p className='text-muted-foreground max-w-2xl'>
          We guide you through every step of the home buying journey with expert
          support and personalized service.
        </p>
      </div>
      <div className='flex flex-col md:flex-row gap-6 mt-14'>
        <div className='relative w-full rounded-xl overflow-hidden aspect-[16/11] sm:aspect-video'>
          <img src='/images/home/double-pic-1.webp' alt='' />
          <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent via-60% to-transparent'></div>
          <div className='absolute inset-0 z-10 w-full flex flex-col items-start justify-end p-6 text-background'>
            <h3 className='text-2xl font-bold'>Find Your Dream Home</h3>
            <p className='mt-2 text-sm text-balance'>
              Browse our curated listings and schedule personalized tours to
              discover the perfect property that matches your lifestyle and
              needs.
            </p>
          </div>
        </div>
        <div className='relative w-full rounded-xl overflow-hidden aspect-[16/11] sm:aspect-video'>
          <img src='/images/home/double-pic-2.webp' alt='' />
          <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent via-60% to-transparent'></div>
          <div className='absolute inset-0 z-10 w-full flex flex-col items-start justify-end p-6 text-background'>
            <h3 className='text-2xl font-bold'>Become a Homeowner</h3>
            <p className='mt-2 text-sm text-balance'>
              We handle the paperwork, negotiations, and closing details so you
              can focus on the excitement of receiving your new keys.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
