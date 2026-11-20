import Image from 'next/image';
import { Code2 } from 'lucide-react';
import { technologyIcons } from '@/data/technology-icons';

export function TechnologyIcon({ name }: { name: string }) {
  let icon = technologyIcons[name];
  
  if (!icon) {
    const exactKey = Object.keys(technologyIcons).find(
      (key) => key.toLowerCase() === name.toLowerCase()
    );
    if (exactKey) {
      icon = technologyIcons[exactKey];
    }
  }

  if (!icon) return <Code2 size={24} aria-hidden="true" />;

  return (
    <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
      <Image
        src={'/icons/technologies/' + icon.file}
        fill
        sizes="24px"
        alt=""
        className={`object-contain ${icon.monochrome ? 'monochrome-icon' : ''}`}
      />
    </div>
  );
}