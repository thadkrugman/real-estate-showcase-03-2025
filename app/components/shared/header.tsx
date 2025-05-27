import Container from '@/components/shared/container';

interface HeaderProps {
  title: string;
  description: string;
}

export default function Header({ title, description }: HeaderProps) {
  return (
    <Container tag='header' navSpacer={true} className='pt-24 sm:pt-36 pb-20'>
      <div className='mx-auto max-w-2xl lg:mx-0'>
        <h2 className='heading-1 text-pretty'>{title}</h2>
        <p className='mt-4 sm:mt-6 text-pretty font-medium text-muted-foreground text-lg/8'>
          {description}
        </p>
      </div>
    </Container>
  );
}
