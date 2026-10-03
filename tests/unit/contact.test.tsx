import { fireEvent, render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { describe, expect, it, vi } from 'vitest';

import { ContactForm } from '@/components/sections/contact-form';

import { contactMessage, whatsappUrl } from '@/lib/contact';

describe('Formulario de contacto', () => {
  it('genera correctamente el mensaje para WhatsApp', () => {
    expect(contactMessage('Ana', 'Quiero conversar sobre un proyecto.')).toBe(
      'Hola Benjamin, soy Ana.\n\nQuiero conversar sobre un proyecto.',
    );
  });

  it('rechaza mensajes demasiado cortos', () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText('Mensaje'), {
      target: {
        value: '   ',
      },
    });

    fireEvent.submit(
      screen
        .getByRole('button', {
          name: 'Enviar mensaje',
        })
        .closest('form')!,
    );

    expect(open).not.toHaveBeenCalled();
  });

  it('abre WhatsApp al enviar un mensaje válido', async () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);

    const user = userEvent.setup();

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/Nombre/), 'Ana');

    await user.type(
      screen.getByLabelText('Mensaje'),
      'Quiero conversar sobre un proyecto.',
    );

    await user.click(
      screen.getByRole('button', {
        name: 'Enviar mensaje',
      }),
    );

    expect(open).toHaveBeenCalledWith(
      whatsappUrl('Ana', 'Quiero conversar sobre un proyecto.'),
      '_blank',
      'noopener,noreferrer',
    );
  });
});
