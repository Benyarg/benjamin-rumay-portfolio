import type { AnchorHTMLAttributes } from 'react';
import { isSafeExternalUrl } from '@/lib/site';

export function ExternalLink({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  if (!isSafeExternalUrl(href)) return null;
  return (
    <a {...props} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (abre en otra pestaña)</span>
    </a>
  );
}
