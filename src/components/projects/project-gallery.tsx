'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';

import type { ProjectImage } from '@/types/portfolio';
import { useScrollLock } from '@/hooks/use-scroll-lock';

export function ProjectGallery({
  images,
  title,
}: {
  images: ProjectImage[];
  title: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useScrollLock(selected !== null);

  if (!images.length) return null;

  const current = selected !== null ? images[selected] : undefined;

  function move(direction: number) {
    setSelected((index) =>
      index === null ? null : (index + direction + images.length) % images.length,
    );
  }

  function openImage(index: number) {
    setSelected(index);
    dialog.current?.showModal();
  }

  function closeGallery() {
    dialog.current?.close();
  }

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <figure className="gallery-item panel" key={image.src}>
            <a
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-trigger"
              aria-label={`Ampliar: ${image.caption}`}
              aria-haspopup="dialog"
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
                  return;
                }

                event.preventDefault();
                openImage(index);
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 767px) 92vw, 580px"
              />

              <span className="expand-icon" aria-hidden="true">
                <Expand size={18} />
              </span>
            </a>

            <figcaption>
              <span className="small-label">
                {image.kind === 'screenshot'
                  ? 'Captura real'
                  : image.kind === 'mockup'
                    ? 'Montaje del sitio'
                    : 'Propuesta visual'}
              </span>

              <p>{image.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialog}
        className="gallery-dialog"
        aria-labelledby="gallery-dialog-title"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeGallery();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            move(1);
          }

          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            move(-1);
          }
        }}
      >
        <div className="lightbox-header">
          <h3 id="gallery-dialog-title">{title} · Galería</h3>

          <button
            className="icon-button"
            type="button"
            aria-label="Cerrar galería"
            onClick={closeGallery}
          >
            <X aria-hidden="true" />
          </button>
        </div>

        {current && (
          <>
            <div className="lightbox-image">
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="(max-width: 1199px) 96vw, 1160px"
              />
            </div>

            <div className="lightbox-footer">
              <button
                className="icon-button"
                type="button"
                aria-label="Imagen anterior"
                onClick={() => move(-1)}
              >
                <ChevronLeft aria-hidden="true" />
              </button>

              <div aria-live="polite">
                <p>{current.caption}</p>

                <span>
                  {(selected ?? 0) + 1} / {images.length}
                </span>
              </div>

              <button
                className="icon-button"
                type="button"
                aria-label="Imagen siguiente"
                onClick={() => move(1)}
              >
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
