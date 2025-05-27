import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function Intro() {
  return (
    <Container className='overflow-hidden mt-24 md:mt-36'>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start'>
        <div className='lg:max-w-lg'>
          <h2 className='text-pretty heading-2 text-foreground'>
            Your real estate journey starts here
          </h2>
          <p className='mt-6 text-lg/8 text-muted-foreground'>
            Whether you're buying your first home, renting the perfect
            apartment, or listing your property for sale, we make real estate
            simple and stress-free. Our platform connects you with the best
            properties and experienced agents in your area.
          </p>
          <div className='mt-8'>
            <Button className='rounded-sm' asChild>
              <Link to='/listings'>Explore Properties</Link>
            </Button>
          </div>
          <figure className='mt-16 border-l pl-8 text-muted-foreground'>
            <blockquote className='text-base/7'>
              <p>
                "The team helped us find our dream home in just two weeks. Their
                platform made it easy to filter properties, schedule viewings,
                and connect with our agent. The entire buying process was
                seamless and transparent."
              </p>
            </blockquote>
            <figcaption className='mt-6 flex gap-x-4 text-sm/6'>
              <img
                alt=''
                src='https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                className='size-6 flex-none rounded-full'
              />
              <div>
                <span className='font-semibold text-foreground'>
                  Sarah Johnson
                </span>{' '}
                – Recent Homebuyer
              </div>
            </figcaption>
          </figure>
        </div>
        <img
          alt='Product screenshot'
          src='https://images.unsplash.com/photo-1559329145-afaf18e3f349?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          width={2432}
          height={1442}
          className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0 aspect-video object-cover object-center'
        />
      </div>
    </Container>
  );
}
