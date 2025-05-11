import Container from '@/components/shared/container';
import PropertyCard from '@/components/shared/property-card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import CategorySelector from './category-selector';

interface PopularProps {
  categories: {
    name: string;
    slug: string;
  }[];
  properties: {
    image: string;
    name: string;
    price: string;
    location: string;
    slug: string;
    categories: string[];
    featured: boolean;
  }[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function Popular({
  categories,
  properties,
  selectedCategory,
  setSelectedCategory,
}: PopularProps) {
  return (
    <Container
      tag='section'
      className='mt-36 mb-30 px-0 sm:px-0 md:px-0 lg:px-0 2xl:px-0 pl-6 sm:pl-8 md:pl-10 lg:pl-16 2xl:pl-24'
    >
      <div className='flex flex-row justify-between items-end pr-6 sm:pr-8 md:pr-10 lg:pr-16 2xl:pr-24'>
        <h2 className='text-5xl font-bold max-w-sm'>
          Find Your Perfect Home Today
        </h2>
        <p className='max-w-2xl text-muted-foreground'>
          Discover handpicked properties that match your lifestyle and budget.
          From cozy apartments to spacious family homes, we have the perfect
          place for you.
        </p>
      </div>
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ScrollArea className='w-full whitespace-nowrap mt-8'>
        <div className='flex w-max space-x-6 pb-6 pr-6 sm:pr-8 md:pr-10 lg:pr-16 2xl:pr-24'>
          {properties
            .filter((property) =>
              property.categories.includes(selectedCategory),
            )
            .map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </Container>
  );
}
