import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { Technologies } from '@/components/sections/technologies';
import { Education } from '@/components/sections/education';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Technologies />
      <Education />
      <Contact />
    </main>
  );
}