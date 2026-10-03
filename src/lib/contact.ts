import { profile } from '@/data/profile';

export function contactMessage(name: string, message: string) {
  const introduction = name.trim()
    ? `Hola Benjamin, soy ${name.trim()}.`
    : 'Hola Benjamin.';
  return `${introduction}\n\n${message.trim()}`;
}
export function emailUrl(name: string, message: string) {
  return `mailto:${profile.email}?subject=${encodeURIComponent('Contacto desde tu portafolio')}&body=${encodeURIComponent(contactMessage(name, message))}`;
}
export function whatsappUrl(name: string, message: string) {
  return `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(contactMessage(name, message))}`;
}
