import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface CategorySelectorProps {
  categories: {
    name: string;
    slug: string;
  }[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}
export default function CategorySelector({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategorySelectorProps) {
  return (
    <ScrollArea className='w-full whitespace-nowrap  mt-14'>
      <div className='w-full justify-between flex flex-row space-x-4 md:space-x-6 lg:space-x-8 pb-6 px-6 sm:px-8 md:px-10 lg:px-16 2xl:px-24'>
        {categories.map((category) => (
          <Button
            key={category.slug}
            variant={selectedCategory === category.slug ? 'black' : 'outline'}
            size='lg'
            onClick={() => setSelectedCategory(category.slug)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <ScrollBar
        className='px-6 sm:px-8 md:px-10 lg:px-16 2xl:px-24'
        orientation='horizontal'
      />
    </ScrollArea>
  );
}
