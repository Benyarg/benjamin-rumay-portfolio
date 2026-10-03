import Image from 'next/image';
import { Code2 } from 'lucide-react';
import { technologyIcons } from '@/data/technology-icons';

export function TechnologyIcon({ name }: { name: string }) {
  const icon = technologyIcons[name];
  if (!icon) return <Code2 size={24} aria-hidden="true" />;
  return (
    <Image
      src={'/icons/technologies/' + icon.file}
      width={32}
      height={32}
      sizes="32px"
      alt=""
      className={icon.monochrome ? 'monochrome-icon' : undefined}
    />
  );
}
