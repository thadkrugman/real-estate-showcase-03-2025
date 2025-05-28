import Container from '@/components/shared/container';

const testimonials = [
  {
    body: 'Working with this team made buying our first home an absolute breeze. They guided us through every step, from pre-approval to closing, and helped us find the perfect property within our budget. Their expertise and patience were invaluable.',
    author: {
      name: 'Sarah Chen',
      handle: 'sarahc_home',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'I was nervous about selling my family home after 20 years, but their marketing strategy was incredible. Professional photos, virtual tours, and targeted advertising brought in multiple offers above asking price. Sold in just 10 days!',
    author: {
      name: 'Michael Rodriguez',
      handle: 'mike_sells',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'As a first-time renter in the city, I was overwhelmed by the options. Their rental platform made it so easy to filter by my needs and budget. Found my perfect apartment and the application process was seamless.',
    author: {
      name: 'Emma Thompson',
      handle: 'emma_rents',
      imageUrl:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Managing my rental properties used to be a nightmare until I started using their property management services. Tenant screening, maintenance coordination, and rent collection are all handled professionally. My stress levels have dropped significantly.',
    author: {
      name: 'David Park',
      handle: 'davidpark_landlord',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Their investment property analysis tools are game-changing. The detailed market reports and ROI calculations helped me identify undervalued properties that have already appreciated 15% in just one year. Excellent research platform.',
    author: {
      name: 'Jennifer Walsh',
      handle: 'jen_invests',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'After a difficult divorce, I needed to sell quickly and start fresh. They handled everything with such compassion and professionalism. Got me a fair price and helped me find a new place that truly feels like home.',
    author: {
      name: 'Robert Kim',
      handle: 'rob_newstart',
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Moving across the country for work was stressful enough, but their relocation services made the housing transition seamless. They coordinated everything remotely and I walked into my perfect new home on day one.',
    author: {
      name: 'Lisa Martinez',
      handle: 'lisa_relocates',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'As a young professional, I thought homeownership was years away. Their first-time buyer program connected me with down payment assistance and favorable loan terms. Now I own a beautiful condo downtown!',
    author: {
      name: 'Alex Johnson',
      handle: 'alex_firsttime',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Downsizing after retirement seemed overwhelming, but their senior-focused services made it simple. They understood our unique needs and helped us find a maintenance-free community that we absolutely love.',
    author: {
      name: 'Margaret Foster',
      handle: 'maggie_downsizes',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function Testimonials() {
  return (
    <Container className='mt-24 sm:mt-36'>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='heading-2 text-foreground text-center text-pretty'>
          Hear From Our Amazing Clients
        </h2>
      </div>
      <div className='mx-auto mt-14 flow-root max-w-2xl lg:mx-0 lg:max-w-none'>
        <div className='-mt-5 sm:-mx-1 sm:columns-2 sm:text-[0] lg:columns-3'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author.handle}
              className='pt-5 sm:inline-block sm:w-full sm:px-0.5'
            >
              <figure className='rounded-xl bg-muted/70 p-8 text-sm/6'>
                <blockquote className='text-foreground'>
                  <p>{`“${testimonial.body}”`}</p>
                </blockquote>
                <figcaption className='mt-6 flex items-center gap-x-4'>
                  <img
                    alt=''
                    src={testimonial.author.imageUrl}
                    className='size-10 rounded-full bg-gray-50'
                  />
                  <div>
                    <div className='font-semibold text-foreground'>
                      {testimonial.author.name}
                    </div>
                    <div className='text-primary'>
                      {`@${testimonial.author.handle}`}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
