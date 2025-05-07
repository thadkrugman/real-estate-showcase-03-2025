import { createFileRoute } from '@tanstack/react-router';
import Hero from '@/components/pages/home/hero';
import Popular from '@/components/pages/home/popular/popular';
import { useState } from 'react';

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
    name: 'Modern Penthouse',
    price: '$2,095',
    location: '2699 Green Valley, Highland Lake, FL',
    slug: 'modern-penthouse',
    categories: ['luxury', 'apartments'],
  },
  {
    name: 'Modern Apartment',
    price: '$1,595',
    location: '2699 Green Valley, Highland Lake, FL',
    slug: 'modern-apartment',
    categories: ['luxury', 'apartments'],
  },
  {
    name: 'Cozy Cottage',
    price: '$1,295',
    location: '2699 Green Valley, Highland Lake, FL',
    slug: 'cozy-cottage',
    categories: ['luxury', 'rental', 'family', 'vacation'],
  },
  {
    name: '4 Bedroom Ranch',
    price: '$1,095',
    location: '2699 Green Valley, Highland Lake, FL',
    slug: '4-bedroom-ranch',
    categories: ['family'],
  },
  {
    name: '3 Bedroom Bungalow',
    price: '$995',
    location: '2699 Green Valley, Highland Lake, FL',
    slug: '3-bedroom-bungalow',
    categories: ['family'],
  },
  {
    name: '2 Bedroom Apartment',
    price: '$895',
    location: '2699 Green Valley, Highland Lake, FL',
    slug: '2-bedroom-apartment',
    categories: ['luxury', 'apartments'],
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0].slug,
  );

  return (
    <>
      <Hero />
      <Popular
        categories={categories}
        properties={properties}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </>
  );
}
