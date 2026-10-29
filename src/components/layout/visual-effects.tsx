'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimationManager } from '@/lib/animations.js';
import { initMain } from '@/lib/main.js';

export function VisualEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanupMain = initMain();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(min-width: 768px)');
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    let manager: AnimationManager | undefined;

    const sync = () => {
      manager?.destroy();
      manager = undefined;

      const active = !reduced.matches && !document.hidden;

      document.documentElement.classList.toggle('motion-enabled', active);
      document.documentElement.dataset.motion = active
        ? 'running'
        : reduced.matches
          ? 'reduced'
          : 'paused';

      if (active) manager = new AnimationManager();
    };

    sync();
    reduced.addEventListener('change', sync);
    desktop.addEventListener('change', sync);
    pointer.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);

    return () => {
      manager?.destroy();
      cleanupMain();
      reduced.removeEventListener('change', sync);
      desktop.removeEventListener('change', sync);
      pointer.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
      document.documentElement.classList.remove('motion-enabled');
      delete document.documentElement.dataset.motion;
    };
  }, [pathname]);

  return (
    <div className="ambient-effects" aria-hidden="true">
      <canvas data-particles />
      <div className="glow-accent glow-one" />
      <div className="glow-accent glow-two" />
      <div className="glow-accent glow-three" />
    </div>
  );
}
