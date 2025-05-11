import Container from '@/components/shared/container';

export default function DoublePic() {
  return (
    <Container className='mt-36'>
      <div className='flex row gap-8 items-end'>
        <div className='w-full'>
          <h2 className='text-5xl font-bold max-w-sm'>
            From Finding to Finalizing
          </h2>
        </div>
        <div className='w-full'>
          <p className='text-muted-foreground max-w-2xl'>
            We guide you through every step of the home buying journey with
            expert support and personalized service.
          </p>
        </div>
      </div>
      <div className='flex flex-row gap-6 mt-14'>
        <div className='relative w-full rounded-xl overflow-hidden aspect-video'>
          <img src='/images/home/double-pic-1.webp' alt='' />
          <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
          <div className='absolute inset-0 z-10 w-full flex flex-col items-start justify-end p-6 text-background'>
            <h3 className='text-2xl font-bold'>Find Your Dream Home</h3>
            <p className='mt-2 text-sm text-balance'>
              Browse our curated listings and schedule personalized tours to
              discover the perfect property that matches your lifestyle and
              needs.
            </p>
          </div>
        </div>
        <div className='relative w-full rounded-xl overflow-hidden aspect-video'>
          <img src='/images/home/double-pic-2.webp' alt='' />
          <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
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
