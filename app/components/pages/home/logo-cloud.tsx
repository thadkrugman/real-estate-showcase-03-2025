import Container from '@/components/shared/container';

const logos = [
  { src: '/images/home/logos/realtor.svg', alt: 'Realtor.com' },
  {
    src: '/images/home/logos/nar.svg',
    alt: 'National Association of Realtors',
  },
  { src: '/images/home/logos/zillow.svg', alt: 'Zillow' },
  { src: '/images/home/logos/bhg.svg', alt: 'Better Homes and Gardens' },
  { src: '/images/home/logos/mls.svg', alt: 'Multiple Listing Service' },
  { src: '/images/home/logos/redfin.svg', alt: 'Redfin' },
];

export default function LogoCloud() {
  return (
    <Container tag='section' className='mt-24 md:mt-36'>
      <div className='grid grid-cols-2 gap-5 overflow-hidden md:grid-cols-3'>
        {logos.map((logo, index) => (
          <div key={index} className='bg-muted/70 p-8 sm:p-12 rounded-xl'>
            <img
              alt={logo.alt}
              src={logo.src}
              width={158}
              height={48}
              className='max-h-7 sm:max-h-9 w-full object-contain'
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
