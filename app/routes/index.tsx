import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import Hero from '@/components/pages/home/hero';
import Featured from '@/components/pages/home/featured/featured';
import Info from '@/components/pages/home/info';
import FAQ from '@/components/pages/home/faq';
import CTA from '@/components/pages/home/cta';
import LogoCloud from '@/components/pages/home/logo-cloud';
import DoublePic from '@/components/pages/home/double-pic';
export const Route = createFileRoute('/')({
  component: App,
});

const categories = [
  {
    name: 'Luxury',
    slug: 'luxury',
  },
  {
    name: 'Commercial',
    slug: 'commercial',
  },
  {
    name: 'Rental',
    slug: 'rental',
  },
  {
    name: 'Family',
    slug: 'family',
  },
  {
    name: 'Apartments',
    slug: 'apartments',
  },
  {
    name: 'Vacation',
    slug: 'vacation',
  },
  {
    name: 'Land',
    slug: 'land',
  },
  {
    name: 'Foreclosure',
    slug: 'foreclosure',
  },
];

const properties = [
  {
    image:
      'https://68asssuqxy.ufs.sh/f/QiPjvHABwH6V4iP0cUz3ykFqX1efSQvMxLgcH592p6zUTKGa',
    name: 'Modern Penthouse',
    price: '$2,095',
    location: '2699 Green Valley, Highland Lake, FL',
    slug: 'modern-penthouse',
    categories: ['luxury', 'apartments'],
    featured: true,
  },
  {
    image:
      'https://68asssuqxy.ufs.sh/f/QiPjvHABwH6V4iP0cUz3ykFqX1efSQvMxLgcH592p6zUTKGa',
    name: 'Modern Apartment',
    price: '$1,595',
    location: '2699 Green Valley, Highland Lake, FL',
    slug: 'modern-apartment',
    categories: ['luxury', 'apartments'],
    featured: true,
  },
  {
    image:
      'https://68asssuqxy.ufs.sh/f/QiPjvHABwH6V4iP0cUz3ykFqX1efSQvMxLgcH592p6zUTKGa',
    name: 'Cozy Cottage',
    price: '$1,295',
    location: '2699 Green Valley, Highland Lake, FL',
    slug: 'cozy-cottage',
    categories: ['luxury', 'rental', 'family', 'vacation'],
    featured: true,
  },
  {
    image:
      'https://68asssuqxy.ufs.sh/f/QiPjvHABwH6V4iP0cUz3ykFqX1efSQvMxLgcH592p6zUTKGa',
    name: '4 Bedroom Ranch',
    price: '$1,095',
    location: '2699 Green Valley, Highland Lake, FL',
    slug: '4-bedroom-ranch',
    categories: ['family'],
    featured: true,
  },
  {
    image:
      'https://68asssuqxy.ufs.sh/f/QiPjvHABwH6V4iP0cUz3ykFqX1efSQvMxLgcH592p6zUTKGa',
    name: '3 Bedroom Bungalow',
    price: '$995',
    location: '2699 Green Valley, Highland Lake, FL',
    slug: '3-bedroom-bungalow',
    categories: ['family'],
    featured: true,
  },
  {
    image:
      'https://68asssuqxy.ufs.sh/f/QiPjvHABwH6V4iP0cUz3ykFqX1efSQvMxLgcH592p6zUTKGa',
    name: '2 Bedroom Apartment',
    price: '$895',
    location: '2699 Green Valley, Highland Lake, FL',
    slug: '2-bedroom-apartment',
    categories: ['luxury', 'apartments'],
    featured: true,
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0].slug,
  );

  return (
    <>
      <Hero />
      <Featured
        categories={categories}
        properties={properties}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Info />
      <LogoCloud />
      <DoublePic />
      <FAQ />
      <CTA />
    </>
  );
}
