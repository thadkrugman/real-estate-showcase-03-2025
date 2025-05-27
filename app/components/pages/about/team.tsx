import Container from '@/components/shared/container';

const people = [
  {
    name: 'Benjamin Russel',
    role: 'Founding Broker',
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80',
  },
  {
    name: 'Dries Vincent',
    role: 'Senior Real Estate Agent',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80',
  },
  {
    name: 'Lindsay Walton',
    role: 'Listing Specialist',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80',
  },
  {
    name: 'Courtney Henry',
    role: 'Marketing Specialist',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80',
  },
  {
    name: 'Tom Cook',
    role: 'Operations Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80',
  },
  {
    name: 'Whitney Francis',
    role: 'Property Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80',
  },
  {
    name: 'Leonard Krasner',
    role: 'Commercial Real Estate Agent',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80',
  },
  {
    name: 'Floyd Miles',
    role: 'Mortgage Specialist',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80',
  },
  {
    name: 'Emily Selman',
    role: 'Client Relations Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80',
  },
  {
    name: 'Kristin Watson',
    role: "Buyer's Agent",
    imageUrl:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80',
  },
  {
    name: 'Dorian Dorsey',
    role: 'Real Estate Technology Specialist',
    imageUrl:
      'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80',
  },
  {
    name: 'Alicia Bell',
    role: 'Real Estate Agent',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80',
  },
  {
    name: 'Jenny Wilson',
    role: 'Interior Design Consultant',
    imageUrl:
      'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80',
  },
  {
    name: 'Anna Roberts',
    role: 'Luxury Properties Specialist',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80',
  },
  {
    name: 'Michael Foster',
    role: 'Property Development Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80',
  },
];

export default function Team() {
  return (
    <Container className='mt-24 md:mt-36'>
      <div className='mx-auto max-w-2xl lg:mx-0'>
        <h2 className='text-pretty heading-2 text-foreground'>
          Meet our expert team
        </h2>
        <p className='mt-6 text-lg/8 text-muted-foreground'>
          Our experienced real estate professionals are dedicated to helping you
          buy, sell, or invest in properties. With deep local market knowledge
          and a commitment to exceptional service, we're here to guide you
          through every step of your real estate journey.
        </p>
      </div>
      <ul
        role='list'
        className='mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6'
      >
        {people.map((person) => (
          <li key={person.name}>
            <img
              alt=''
              src={person.imageUrl}
              className='mx-auto size-24 rounded-lg'
            />
            <h3 className='mt-6 text-base/7 font-semibold tracking-tight text-foreground'>
              {person.name}
            </h3>
            <p className='text-sm/6 text-muted-foreground'>{person.role}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
