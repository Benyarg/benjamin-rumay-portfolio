import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import type { ImgHTMLAttributes } from 'react';

afterEach(cleanup);
vi.mock('next/image', () => ({
  default: ({
    preload: _preload,
    ...props
  }: ImgHTMLAttributes<HTMLImageElement> & { preload?: boolean }) => {
    void _preload;
    // Next Image se prueba con el optimizador real en Playwright.
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));
vi.mock('next/navigation', () => ({ usePathname: () => '/' }));
class ObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
vi.stubGlobal('IntersectionObserver', ObserverMock);
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })),
});
