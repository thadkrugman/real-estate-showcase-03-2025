import Container from '@/components/shared/container';

export default function LogoCloud() {
  return (
    <Container className='mt-36'>
      <div className='grid grid-cols-2 gap-5 overflow-hidden md:grid-cols-3'>
        <div className='bg-muted p-6 sm:p-10 rounded-xl'>
          <img
            alt='Transistor'
            src='https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg'
            width={158}
            height={48}
            className='max-h-12 w-full object-contain'
          />
        </div>
        <div className='bg-muted p-6 sm:p-10 rounded-xl'>
          <img
            alt='Reform'
            src='https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg'
            width={158}
            height={48}
            className='max-h-12 w-full object-contain'
          />
        </div>
        <div className='bg-muted p-6 sm:p-10 rounded-xl'>
          <img
            alt='Tuple'
            src='https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg'
            width={158}
            height={48}
            className='max-h-12 w-full object-contain'
          />
        </div>
        <div className='bg-muted p-6 sm:p-10 rounded-xl'>
          <img
            alt='Laravel'
            src='https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-gray-900.svg'
            width={158}
            height={48}
            className='max-h-12 w-full object-contain'
          />
        </div>
        <div className='bg-muted p-6 sm:p-10 rounded-xl'>
          <img
            alt='SavvyCal'
            src='https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg'
            width={158}
            height={48}
            className='max-h-12 w-full object-contain'
          />
        </div>
        <div className='bg-muted p-6 sm:p-10 rounded-xl'>
          <img
            alt='Statamic'
            src='https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg'
            width={158}
            height={48}
            className='max-h-12 w-full object-contain'
          />
        </div>
      </div>
    </Container>
  );
}
