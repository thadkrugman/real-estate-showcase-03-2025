import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
export default function CTA() {
  return (
    <Container>
      <div className='relative rounded-3xl mt-24 bg-[url("/images/home/cta.webp")] bg-cover bg-top'>
        <div className='absolute inset-0 bg-foreground/40 rounded-3xl' />
        <div className='relative px-6 py-18 sm:px-6 sm:py-28 lg:px-8 z-10'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
              Ready to Find Your Perfect Property?
            </h2>
            <Button
              variant='outline'
              size='lg'
              className='mt-8 text-background bg-transparent font-semibold'
              asChild
            >
              <Link to='/listings'>Start Searching</Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
