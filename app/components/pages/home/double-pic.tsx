import Container from '@/components/shared/container';

export default function DoublePic() {
  const cardData = [
    {
      image: '/images/home/double-pic-1.webp',
      title: 'Find Your Dream Home',
      description:
        'Browse our curated listings and schedule personalized tours to discover the perfect property that matches your lifestyle and needs.',
    },
    {
      image: '/images/home/double-pic-2.webp',
      title: 'Become a Homeowner',
      description:
        'We handle the paperwork, negotiations, and closing details so you can focus on the excitement of receiving your new keys.',
    },
  ];

  return (
    <Container tag='section' className='mt-24 md:mt-36'>
      <div className='flex flex-col lg:flex-row lg:gap-8 lg:items-end max-lg:space-y-6 justify-between max-w-2xl lg:max-w-none mx-auto lg:mx-0'>
        <div className='w-full'>
          <h2 className='heading-2 max-w-sm w-full text-pretty'>
            From Finding to Finalizing
          </h2>
        </div>
        <div className='w-full'>
          <p className='text-muted-foreground max-w-2xl flex-1 text-lg/8 text-pretty'>
            We guide you through every step of the home buying journey with
            expert support and personalized service. From initial consultation
            to closing day, our experienced team ensures a smooth and
            stress-free experience tailored to your unique needs and timeline.
          </p>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-6 mt-14 justify-between max-w-2xl lg:max-w-none mx-auto lg:mx-0'>
        {cardData.map((card, index) => (
          <div
            key={index}
            className='relative w-full rounded-xl overflow-hidden aspect-[16/11] sm:aspect-video'
          >
            <img src={card.image} alt='' />
            <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/85 via-transparent via-70% to-transparent'></div>
            <div className='absolute inset-0 z-10 w-full flex flex-col items-start justify-end p-6 text-background'>
              <h3 className='text-2xl sm:text-3xl font-bold'>{card.title}</h3>
              <p className='mt-2 text-pretty text-sm/6 sm:text-base/7 pr-10'>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
