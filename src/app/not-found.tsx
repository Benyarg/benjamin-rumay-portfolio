import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="shell not-found">
      <p className="eyebrow">Error 404</p>
      <h1>Esta página no existe.</h1>
      <p>Puedes volver al inicio y explorar mis proyectos.</p>
      <Link href="/" className="button button-primary">
        <ArrowLeft size={18} aria-hidden="true" />
        Volver al inicio
      </Link>
    </main>
  );
}
