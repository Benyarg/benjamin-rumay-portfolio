import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { VisualEffects } from '@/components/layout/visual-effects';
import { siteUrl } from '@/lib/site';
import './globals.css';

// ============================================================
// FUENTE
// ============================================================
const inter = localFont({
  src: '../fonts/inter-latin-variable.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '100 900',
  preload: true,
  fallback: ['system-ui', 'arial', 'sans-serif'],
});

// ============================================================
// CONSTANTES REUTILIZABLES
// ============================================================
const description =
  'Portafolio de Benjamin Rumay, Software Developer y egresado de Ingeniería de Sistemas Computacionales. Proyectos con .NET, React y Next.js.';

const ogImage = {
  url: '/images/og-portfolio.png',
  width: 1200,
  height: 630,
  alt: 'Benjamin Rumay, Software Developer',
};

// ============================================================
// METADATA
// ============================================================
export const metadata: Metadata = {
  // ----------------------------------------------------------
  // BÁSICO
  // ----------------------------------------------------------
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Benjamin Rumay | Software Developer & Soluciones Digitales',
    template: '%s | Benjamin Rumay',
  },
  description,
  applicationName: 'Portafolio de Benjamin Rumay',
  authors: [{ name: 'Benjamin Rumay', url: siteUrl }],
  creator: 'Benjamin Rumay',
  publisher: 'Benjamin Rumay',

  // ----------------------------------------------------------
  // KEYWORDS (opcional, pero ayuda)
  // ----------------------------------------------------------
  keywords: [
    'Benjamin Rumay',
    'Software Developer',
    'Ingeniero de Sistemas',
    'Desarrollador Full Stack',
    '.NET Developer',
    'React Developer',
    'Next.js',
    'C#',
    'TypeScript',
    'SQL',
    'Cloud',
    'Azure',
    'AWS',
    'Portafolio',
    'Soluciones Digitales',
    'Cajamarca',
    'Perú',
  ],

  // ----------------------------------------------------------
  // CANONICAL Y ALTERNATES
  // ----------------------------------------------------------
  alternates: {
    canonical: '/',
  },

  // ----------------------------------------------------------
  // ROBOTS
  // ----------------------------------------------------------
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ----------------------------------------------------------
  // ICONS
  // ----------------------------------------------------------
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },

  // ----------------------------------------------------------
  // OPEN GRAPH
  // ----------------------------------------------------------
  openGraph: {
    title: 'Benjamin Rumay | Software Developer & Soluciones Digitales',
    description,
    url: '/',
    siteName: 'Benjamin Rumay',
    type: 'website',
    locale: 'es_PE',
    images: [ogImage],
  },

  // ----------------------------------------------------------
  // TWITTER / X
  // ----------------------------------------------------------
  twitter: {
    card: 'summary_large_image',
    title: 'Benjamin Rumay | Software Developer & Soluciones Digitales',
    description,
    images: [ogImage.url],
    creator: '@benjaminrumay',
  },

  // ----------------------------------------------------------
  // CATEGORÍA Y OTROS
  // ----------------------------------------------------------
  category: 'technology',

  // ----------------------------------------------------------
  // FORMAT DETECTION (opcional)
  // ----------------------------------------------------------
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// ============================================================
// VIEWPORT (separado de metadata en Next.js 14+)
// ============================================================
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#121414',
  colorScheme: 'dark',
};

// ============================================================
// JSON-LD SCHEMA
// ============================================================
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Benjamin Rumay',
  alternateName: 'Jhoel Benjamin Rumay Garcia',
  jobTitle: 'Software Developer',
  description:
    'Ingeniero de Sistemas y Software Developer especializado en desarrollo de aplicaciones web y soluciones digitales.',
  url: siteUrl,
  image: `${siteUrl}/images/image_perfil.png`,
  email: 'mailto:benjaminrumay.dev@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cajamarca',
    addressCountry: 'PE',
  },
  sameAs: [
    'https://github.com/Benyarg',
    'https://linkedin.com/in/jhoel-benjamin-rumay-garcia-48711a191',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Universidad Privada del Norte',
    url: 'https://www.upn.edu.pe',
  },
  knowsAbout: [
    'Software Development',
    'Web Development',
    'C#',
    '.NET',
    'React',
    'Next.js',
    'TypeScript',
    'SQL',
    'Cloud Computing',
    'Azure',
    'AWS',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Benjamin Rumay - Portfolio',
  url: siteUrl,
  inLanguage: 'es-PE',
  author: {
    '@type': 'Person',
    name: 'Benjamin Rumay',
  },
};

// ============================================================
// ROOT LAYOUT
// ============================================================
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* ====================================================
            PERFORMANCE HINTS
            ==================================================== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

        {/* ====================================================
            JSON-LD SCHEMAS
            ==================================================== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body>
        <VisualEffects />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
