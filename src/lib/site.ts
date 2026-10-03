const configured = process.env.SITE_URL || 'https://benjaminrumay-portafolio.vercel.app';
const url = new URL(configured);
if (url.protocol !== 'https:' || url.username || url.password) {
  throw new Error('SITE_URL debe ser una URL HTTPS pública, sin credenciales.');
}
export const siteUrl = url.origin;
export function absoluteUrl(path = '/') {
  return new URL(path, `${siteUrl}/`).toString();
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export function isSafeExternalUrl(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:' && !parsed.username && !parsed.password;
  } catch {
    return false;
  }
}
