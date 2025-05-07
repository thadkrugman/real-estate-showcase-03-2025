import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyCardProps {
  property: {
    name: string;
    price: string;
    location: string;
    slug: string;
    categories: string[];
  };
}
export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div>
      <div className='aspect-square bg-gray-100 rounded-3xl h-96'></div>
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
          <hr className='my-4 border-t' />
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Button variant='outline' size='icon'>
          <Heart className='text-primary' />
        </Button>
      </div>
    </div>
  );
}
