'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Download, Menu, X } from 'lucide-react';

import {
  GithubIcon as Github,
  LinkedinIcon as Linkedin,
} from '@/components/ui/brand-icons';

import { navigation, profile } from '@/data/profile';
import { useScrollLock } from '@/hooks/use-scroll-lock';
import { ExternalLink } from '@/components/ui/external-link';

export function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  const dialog = useRef<HTMLDialogElement>(null);

  useScrollLock(open);

  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: '-15% 0px -65% 0px',
      },
    );

    [...navigation.map(({ id }) => id), 'hero'].forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1100px)');

    const closeOnDesktop = () => {
      if (media.matches) {
        dialog.current?.close();
      }
    };

    media.addEventListener('change', closeOnDesktop);

    return () => media.removeEventListener('change', closeOnDesktop);
  }, []);

  const links = navigation.map(({ id, label }) => (
    <li key={id}>
      <a
        href={`${isHome ? '' : '/'}#${id}`}
        aria-current={isHome && active === id ? 'location' : undefined}
        onClick={() => dialog.current?.close()}
      >
        {label}
      </a>
    </li>
  ));

  function showMenu() {
    dialog.current?.showModal();
    setOpen(true);
  }

  function closeMenu() {
    dialog.current?.close();
  }

  return (
    <>
      {/* Navegación desktop */}
      <nav aria-label="Navegación principal" className="desktop-navigation">
        <ul>{links}</ul>
      </nav>

      {/* Acciones del header */}
      <div className="header-actions">
        <ExternalLink
          href={profile.github}
          className="icon-button header-github"
          aria-label="GitHub de Benjamin Rumay"
        >
          <Github size={19} aria-hidden="true" />
        </ExternalLink>

        <ExternalLink
          href={profile.linkedin}
          className="icon-button header-linkedin"
          aria-label="LinkedIn de Benjamin Rumay"
        >
          <Linkedin size={19} aria-hidden="true" />
        </ExternalLink>

        <a
          href={profile.cv}
          download
          className="button button-small button-primary header-cv btn-ripple"
        >
          <Download size={16} aria-hidden="true" />
          Descargar CV
        </a>

        <button
          type="button"
          className="icon-button menu-toggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={showMenu}
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </div>

      {/* Menú móvil / tablet */}
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Menú de navegación"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeMenu();
          }
        }}
      >
        {/* Solo botón cerrar */}
        <div className="mobile-menu-heading">
          <button
            type="button"
            className="icon-button mobile-menu-close"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        {/* Links */}
        <nav aria-label="Menú móvil">
          <ul>{links}</ul>
        </nav>

        {/* Redes */}
        <div className="mobile-menu-socials">
          <ExternalLink href={profile.github} className="button button-outline">
            <Github size={18} aria-hidden="true" />
            GitHub
          </ExternalLink>

          <ExternalLink href={profile.linkedin} className="button button-outline">
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </ExternalLink>
        </div>

        {/* CV */}
        <a
          href={profile.cv}
          download
          className="button button-primary mobile-menu-cv btn-ripple"
        >
          <Download size={17} aria-hidden="true" />
          Descargar CV
        </a>
      </dialog>
    </>
  );
}
