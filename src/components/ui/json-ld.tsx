import { serializeJsonLd } from '@/lib/site';

export function JsonLd({ data }: { data: unknown }) {
  // Datos internos serializados; escapar '<' evita cerrar la etiqueta script.
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
