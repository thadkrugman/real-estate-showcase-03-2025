import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';

interface CTAProps {
  title: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

export default function CTA({
  title,
  imageUrl,
  buttonText,
  buttonLink,
  className,
}: CTAProps) {
  return (
    <Container tag='section'>
      <div
        className={cn(
          'relative rounded-3xl mt-24 md:mt-36 bg-cover bg-top',
          `bg-[url("${imageUrl}")]`,
          className,
        )}
      >
        <div className='absolute inset-0 bg-foreground/40 rounded-3xl' />
        <div className='relative px-6 py-16 sm:px-6 sm:py-28 lg:px-8 z-10'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
              {title}
            </h2>
            <Button
              variant='outline'
              size='lg'
              className='mt-8 text-background bg-transparent font-semibold'
              asChild
            >
              <Link to={buttonLink}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
