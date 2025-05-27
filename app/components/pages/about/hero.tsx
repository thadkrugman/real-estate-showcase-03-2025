import Container from '@/components/shared/container';

type Props = {};

export default function Hero({}: Props) {
  return (
    <Container
      navSpacerForImage={true}
      className='relative bg-[url("https://images.unsplash.com/photo-1592839656073-833413ae8874?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] lg:sm:bg-[url("https://images.unsplash.com/photo-1592839656073-833413ae8874?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center nav-white-section'
    >
      <div className='z-10 h-full flex flex-col justify-end pt-40 sm:pt-72 pb-8 lg:pb-16 2xl:pb-24'>
        <h1 className='heading-1 text-white max-w-sm sm:max-w-3xl text-balance'>
          Your Complete Real Estate Solution
        </h1>
        <p className='text-white max-w-3xl mt-4 sm:mt-6 text-lg/8 font-medium text-pretty'>
          Whether you're looking to buy your dream home, rent the perfect space,
          or list your property for sale, we provide a comprehensive platform
          with expert guidance to make every real estate transaction seamless
          and successful.
        </p>
      </div>
      <div className='absolute inset-0 pointer-events-none bg-linear-to-b from-transparent from-0% to-black/80'></div>
    </Container>
  );
}
