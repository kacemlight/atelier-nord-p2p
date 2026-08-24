import { Hero } from '@/components/Hero/Hero';
import { FeaturedProjects } from '@/components/FeaturedProjects/FeaturedProjects';
import { PhilosophyStrip } from '@/components/PhilosophyStrip/PhilosophyStrip';
import { ServicesTeaser } from '@/components/ServicesTeaser/ServicesTeaser';
import { PressStrip } from '@/components/PressStrip/PressStrip';
import { CtaBanner } from '@/components/CtaBanner/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <PhilosophyStrip />
      <ServicesTeaser />
      <PressStrip />
      <CtaBanner />
    </>
  );
}
