import Container from '@/components/shared/container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function Info() {
  return (
    <Container
      tag='section'
      className='flex flex-col lg:flex-row gap-16 lg:gap-0 max-lg:md:max-w-2xl'
    >
      <div className='w-full'>
        <img src='/images/home/3d-house.jpg' alt='White 3D model of a house' />
      </div>
      <div className='w-full'>
        <div className='w-full lg:pl-36'>
          <Tabs defaultValue='tenants' className='w-full'>
            <TabsList className='w-full mb-4'>
              <TabsTrigger
                value='tenants'
                className='[&[aria-selected="true"]]:text-primary [&[aria-selected="true"]]:font-semibold font-medium text-muted-foreground'
              >
                For Tenants
              </TabsTrigger>
              <TabsTrigger
                value='landlords'
                className='[&[aria-selected="true"]]:text-primary [&[aria-selected="true"]]:font-semibold font-medium text-muted-foreground'
              >
                For Landlords
              </TabsTrigger>
            </TabsList>
            <TabsContent value='tenants'>
              <div className='w-full'>
                <h2 className='text-2xl font-bold text-balance'>
                  Finding the perfect place has never been easier
                </h2>
                <p className='mt-4 text-muted-foreground'>
                  Our intuitive platform connects you with thousands of quality
                  properties tailored to your needs, budget, and preferred
                  locations. With advanced filtering options, virtual tours, and
                  neighborhood insights, we make your home search efficient and
                  enjoyable. Our dedicated team is always ready to guide you
                  through every step of the process.
                </p>
              </div>
            </TabsContent>
            <TabsContent value='landlords'>
              <div className='w-full'>
                <h2 className='text-2xl font-bold text-balance'>
                  Maximize Your Property's Potential and take the stress out of
                  renting
                </h2>
                <p className='mt-4 text-muted-foreground'>
                  List your property with confidence using our comprehensive
                  management tools, verified tenant screening, and expert
                  marketing support. Our platform provides detailed analytics on
                  property performance, automated rent collection, and
                  maintenance request handling to save you time and maximize
                  returns. Join thousands of successful landlords who trust us
                  with their investment properties.
                </p>
              </div>
            </TabsContent>
          </Tabs>
          <Button className='mt-5 rounded-sm' asChild>
            <Link to='/about'>Learn More</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
