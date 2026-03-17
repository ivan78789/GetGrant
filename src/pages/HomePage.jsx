import { HeroSection } from '../components/sections/HeroSection';
import { SubjectsCarouselSection } from '../components/sections/SubjectsCarouselSection';
import { WhyGetGrantSection } from '../components/sections/WhyGetGrantSection';
import { PopularProgramsSection } from '../components/sections/PopularProgramsSection';
import { PopularCountriesSection } from '../components/sections/PopularCountriesSection';
import { UniversityPartnersSection } from '../components/sections/UniversityPartnersSection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <SubjectsCarouselSection />
      <WhyGetGrantSection />
      <PopularProgramsSection />
      <PopularCountriesSection />
      <UniversityPartnersSection />
    </main>
  );
}
