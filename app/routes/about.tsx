import { createFileRoute } from '@tanstack/react-router';
import Hero from '@/components/pages/about/hero';
import Intro from '@/components/pages/about/intro';
import Stats from '@/components/pages/about/stats';
import Features from '@/components/pages/about/features';
import Features2 from '@/components/pages/about/features-2';
import Team from '@/components/pages/about/team';
import Testimonials from '@/components/pages/about/testimonials';
import CTA from '@/components/shared/cta';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Hero />
      <Intro />
      <Stats />
      <Features />
      <Features2 />
      <Team />
      <Testimonials />
      <CTA
        title='Ready to Find Your Perfect Property?'
        imageUrl='/images/home/cta.webp'
        buttonText='Explore Properties'
        buttonLink='/listings'
      />
    </>
  );
}
