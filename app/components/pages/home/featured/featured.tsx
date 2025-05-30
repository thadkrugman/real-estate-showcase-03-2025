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
      className='mt-24 md:mt-36 mb-18 md:mb-30 px-0 sm:px-0 md:px-0 lg:px-0 2xl:px-0'
    >
      <div className='flex flex-col lg:flex-row justify-between lg:items-end px-6 sm:px-8 md:px-10 lg:px-16 2xl:px-24 max-lg:space-y-6 lg:space-x-8'>
        <div className='w-full'>
          <h2 className='heading-2 max-w-sm w-full text-pretty'>
            Find Your Perfect Home Today
          </h2>
        </div>
        <div className='w-full'>
          <p className='max-w-2xl text-muted-foreground text-lg/8 text-pretty'>
            Discover handpicked properties that match your lifestyle and budget.
            From cozy apartments to spacious family homes, we have the perfect
            place for you.
          </p>
        </div>
      </div>
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ScrollArea className='w-full whitespace-nowrap mt-8'>
        <div className='flex w-max space-x-6 pb-6 px-6 sm:px-8 md:px-10 lg:px-16 2xl:px-24'>
          {properties
            .filter((property) =>
              property.categories.includes(selectedCategory),
            )
            .map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
        </div>
        <ScrollBar
          className='px-6 sm:px-8 md:px-10 lg:px-16 2xl:px-24'
          orientation='horizontal'
        />
      </ScrollArea>
    </Container>
  );
}
