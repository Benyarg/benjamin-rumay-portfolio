import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { isSafeExternalUrl } from '@/lib/site';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function ExternalLink({ href, children, ...props }: Props) {
  // Si la URL no es externa segura, no renderizar nada
  if (!isSafeExternalUrl(href)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[ExternalLink] URL no permitida: ${href}`);
    }
    return null;
  }

  return (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="sr-only"> (abre en otra pestaña)</span>
    </a>
  );
}