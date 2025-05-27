import Container from '@/components/shared/container';

const stats = [
  { id: 1, name: 'Properties sold monthly', value: '12,500+' },
  { id: 2, name: 'Total property value', value: '$2.8 billion' },
  { id: 3, name: 'Active listings', value: '85,000+' },
  { id: 4, name: 'Satisfied clients', value: '50,000+' },
];

export default function Stats() {
  return (
    <Container className='pt-24 md:pt-36'>
      <dl className='grid grid-cols-1 gap-5 text-center md:grid-cols-2 xl:flex flex-row justify-between'>
        {stats.map((stat) => (
          <div
            key={stat.id}
            className='max-xl:mx-auto flex flex-col gap-y-4 bg-muted p-8 rounded-xl w-full'
          >
            <dt className='text-base/7 text-muted-foreground'>{stat.name}</dt>
            <dd className='order-first text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}
