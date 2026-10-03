import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { Services } from '@/components/sections/services';
import { Technologies } from '@/components/sections/technologies';
import { Education } from '@/components/sections/education';
import { Contact } from '@/components/sections/contact';
import { JsonLd } from '@/components/ui/json-ld';
import { profile } from '@/data/profile';
import { absoluteUrl } from '@/lib/site';

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: profile.name,
          jobTitle: profile.role,
          description:
            'Egresado de Ingeniería de Sistemas Computacionales. Bachiller en proceso.',
          url: absoluteUrl(),
          image: absoluteUrl('/images/benjamin-rumay.webp'),
          email: profile.email,
          sameAs: [profile.github, profile.linkedin],
          alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'Universidad Privada del Norte',
          },
        }}
      />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Services />
      <Technologies />
      <Education />
      <Contact />
    </main>
  );
}
