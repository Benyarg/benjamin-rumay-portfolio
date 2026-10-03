import { NextResponse, type NextRequest } from 'next/server';
import { getProject } from '@/data/projects';

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.slice('/proyectos/'.length);
  if (!getProject(slug)) {
    // Resolver antes de entrar a la ruta dinámica evita el fallback vacío sin JS.
    return NextResponse.rewrite(new URL('/_not-found', request.url), { status: 404 });
  }
  return NextResponse.next();
}

export const config = { matcher: '/proyectos/:path*' };
