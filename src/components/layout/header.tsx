import Image from 'next/image';
import Link from 'next/link';

import { navigation } from '@/data/profile';
import { Navigation } from './navigation';

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>

      <header className="site-header" id="mainNav">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-3 px-5 py-4 sm:px-8 lg:px-12 min-h-[72px]">
          <Link
            href="/"
            className="brand header-brand"
            aria-label="Benjamin Rumay, inicio"
          >
            <Image
              src="/images/br-logo.png"
              width={61}
              height={80}
              sizes="(max-width: 639px) 44px, (max-width: 1199px) 50px, 58px"
              alt=""
              priority
            />
          </Link>

          <Navigation />
        </div>
      </header>

      <noscript>
        <nav
          className="mx-auto flex w-full max-w-[1440px] flex-wrap gap-3 px-5 py-3 sm:px-8 lg:px-12"
          aria-label="Navegación sin JavaScript"
        >
          {navigation.map(({ id, label }) => (
            <a key={id} href={`/#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </noscript>
    </>
  );
}