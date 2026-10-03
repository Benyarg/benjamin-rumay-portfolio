import type { NextConfig } from 'next';

const isDevelopment = process.env.NODE_ENV === 'development';
// Next.js emite scripts de hidratación inline en las páginas estáticas.
// Sin scripts externos, eval en producción, HTML de usuarios ni formularios remotos.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDevelopment ? ' ws: wss:' : ''}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(!isDevelopment ? ['upgrade-insecure-requests'] : []),
].join('; ');

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'], qualities: [75, 85] },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          { key: 'X-Frame-Options', value: 'DENY' },
          ...(!isDevelopment
            ? [
                {
                  key: 'Strict-Transport-Security',
                  value: 'max-age=31536000; includeSubDomains',
                },
              ]
            : []),
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      {
        source: '/proyectos/vimod-academy',
        destination: '/proyectos/atrium',
        permanent: true,
      },
      {
        source: '/proyectos/cognitive-health-ml-platform',
        destination: '/proyectos/ia-cognitiva',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
