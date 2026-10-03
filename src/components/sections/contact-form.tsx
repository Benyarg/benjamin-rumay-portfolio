'use client';

import { useState, type FormEvent } from 'react';
import { MessageCircle } from 'lucide-react';

import { whatsappUrl } from '@/lib/contact';

export function ContactForm() {
  const [error, setError] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (name.length > 80) {
      setError('El nombre puede tener como máximo 80 caracteres.');

      form.querySelector<HTMLInputElement>('#contact-name')?.focus();

      return;
    }

    if (message.length < 10 || message.length > 2000) {
      setError('Escribe un mensaje de entre 10 y 2000 caracteres.');

      form.querySelector<HTMLTextAreaElement>('#contact-message')?.focus();

      return;
    }

    setError('');

    window.open(whatsappUrl(name, message), '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="contact-form panel reveal-right" onSubmit={submit} noValidate>
      <p className="small-label">Envíame un mensaje</p>

      <h3>Cuéntame qué tienes en mente</h3>

      <p className="form-intro">
        Completa el formulario y continuarás la conversación directamente por WhatsApp.
      </p>

      <div className="form-field">
        <label htmlFor="contact-name">
          Nombre <span>(opcional)</span>
        </label>

        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={80}
          placeholder="Cómo te llamas"
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">Mensaje</label>

        <textarea
          id="contact-message"
          name="message"
          rows={5}
          minLength={10}
          maxLength={2000}
          required
          placeholder="Cuéntame sobre tu proyecto o propuesta"
          aria-describedby={`contact-help${error ? ' contact-error' : ''}`}
          aria-invalid={error ? true : undefined}
          onInput={() => {
            if (error) {
              setError('');
            }
          }}
        />
      </div>

      <p id="contact-help" className="form-help">
        Entre 10 y 2000 caracteres. Este sitio no almacena tu mensaje; se abrirá WhatsApp
        para que puedas revisarlo y enviarlo.
      </p>

      {error && (
        <p id="contact-error" className="form-error" role="alert">
          {error}
        </p>
      )}

      <div className="form-buttons">
        <button className="button button-primary contact-submit btn-ripple" type="submit">
          <MessageCircle size={18} aria-hidden="true" />
          Enviar mensaje
        </button>
      </div>
      <noscript>
        <p>Activa JavaScript para preparar el mensaje de WhatsApp.</p>
      </noscript>
    </form>
  );
}
