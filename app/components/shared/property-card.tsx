import { BedDouble, Bath, Heart, CarFront, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface PropertyCardProps {
  property: {
    image: string;
    name: string;
    price: string;
    location: string;
    slug: string;
    categories: string[];
    featured: boolean;
  };
}
export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className={cn('relative', property.featured && 'ml-1.5')}>
      <div className='aspect-square bg-gray-100 rounded-3xl h-96'>
        <img
          src={property.image}
          alt={property.name}
          className='w-full h-full object-cover rounded-3xl'
        />
      </div>
      <div className='flex flex-row justify-between mt-6'>
        <div>
          <span className='text-2xl font-bold text-primary'>
            {property.price}
          </span>
          <span className='text-muted-foreground text-sm'>/month</span>
          <h3 className='font-bold text-2xl mt-1'>{property.name}</h3>
          <p className='text-muted-foreground text-sm mt-2'>
            {property.location}
          </p>
          <Separator className='my-4' />
          <div className='flex flex-row justify-between w-full'>
            <div className='flex flex-row items-center gap-2'>
              <BedDouble className='text-primary size-4' />
              <span className='text-muted-foreground text-sm'>3 Beds</span>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <Bath className='text-primary size-4' />
              <span className='text-muted-foreground text-sm'>2 Baths</span>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <CarFront className='text-primary size-4' />
              <span className='text-muted-foreground text-sm'>2 Cars</span>
            </div>
          </div>
        </div>
        <Button variant='outline' size='icon'>
          <Heart className='text-primary' />
        </Button>
      </div>
      {property.featured && (
        <>
          <div className='absolute top-0 -left-1.5 bg-primary px-3 py-1.5 rounded-sm flex flex-row items-center gap-2'>
            <Sparkles className='text-white size-3.5' />
            <span className='text-white text-xs font-semibold'>FEATURED</span>
          </div>
          <div className='absolute top-4 -left-1 size-4 bg-primary rotate-55 rounded-sm -z-10'></div>
        </>
      )}
    </div>
  );
}
