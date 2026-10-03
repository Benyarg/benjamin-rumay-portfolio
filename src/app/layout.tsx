import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { VisualEffects } from '@/components/layout/visual-effects';
import { siteUrl } from '@/lib/site';
import './globals.css';

const inter = localFont({
  src: '../fonts/inter-latin-variable.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '100 900',
});
const description =
  'Portafolio de Benjamin Rumay, Software Developer y egresado de Ingeniería de Sistemas Computacionales. Proyectos con .NET, React y Next.js.';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Benjamin Rumay | Software Developer',
    template: '%s | Benjamin Rumay',
  },
  description,
  applicationName: 'Portafolio de Benjamin Rumay',
  authors: [{ name: 'Benjamin Rumay' }],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Benjamin Rumay | Software Developer',
    description,
    url: '/',
    siteName: 'Benjamin Rumay',
    type: 'website',
    locale: 'es_PE',
    images: [
      {
        url: '/images/og-portfolio.png',
        width: 1200,
        height: 630,
        alt: 'Benjamin Rumay, Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benjamin Rumay | Software Developer',
    description,
    images: ['/images/og-portfolio.png'],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <VisualEffects />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
