import { test, expect, type Page } from '@playwright/test';

import AxeBuilder from '@axe-core/playwright';

async function noOverflow(page: Page) {
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth + 1,
    ),
  ).toBe(true);
}

for (const width of [360, 390, 430, 768, 1024, 1280, 1366, 1440, 1920]) {
  test(`landing y case study adaptables a ${width}px`, async ({ page }) => {
    await page.setViewportSize({
      width,
      height: 900,
    });

    await page.goto('/');

    await expect(
      page.getByRole('heading', {
        level: 1,
      }),
    ).toContainText('Benjamin');

    expect(
      await page.locator('.hero-title').evaluate((element) => {
        const range = document.createRange();

        range.selectNodeContents(element);

        return range.getClientRects().length;
      }),
    ).toBe(1);

    await expect(
      page.getByAltText('Benjamin Rumay trabajando con una laptop'),
    ).toBeVisible();

    await noOverflow(page);

    const boxes = await page
      .locator('header.site-header a, header.site-header button')
      .evaluateAll((elements) =>
        elements
          .filter((el) => el.getBoundingClientRect().width > 0)
          .map((el) => {
            const r = el.getBoundingClientRect();

            return {
              left: r.left,

              right: r.right,

              top: r.top,

              bottom: r.bottom,
            };
          }),
      );

    for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        expect(
          boxes[i].right <= boxes[j].left ||
            boxes[j].right <= boxes[i].left ||
            boxes[i].bottom <= boxes[j].top ||
            boxes[j].bottom <= boxes[i].top,
        ).toBe(true);
      }
    }

    await page.locator('#contact').scrollIntoViewIfNeeded();

    await noOverflow(page);

    await page.goto('/proyectos/ia-cognitiva');

    await expect(
      page.getByRole('heading', {
        level: 1,
        name: 'IA Cognitiva',
      }),
    ).toBeVisible();

    await expect(page.locator('.gallery-item')).toHaveCount(8);

    await page.locator('.gallery-item').last().scrollIntoViewIfNeeded();

    await noOverflow(page);
  });
}

test('menú móvil, foco, Escape y navegación entre secciones', async ({ page }) => {
  await page.setViewportSize({
    width: 390,
    height: 844,
  });

  await page.goto('/');

  const button = page.getByRole('button', {
    name: 'Abrir menú',
  });

  await button.click();

  await expect(button).toHaveAttribute('aria-expanded', 'true');

  const menu = page.getByRole('dialog', {
    name: 'Menú de navegación',
  });

  await expect(menu).toBeVisible();

  await expect(
    page.getByRole('button', {
      name: 'Cerrar menú',
    }),
  ).toBeFocused();

  const accessibility = await new AxeBuilder({
    page,
  }).analyze();

  expect(accessibility.violations).toEqual([]);

  await page.keyboard.press('Escape');

  await expect(menu).not.toBeVisible();

  await expect(button).toBeFocused();

  await button.click();

  await menu
    .getByRole('link', {
      name: 'Proyectos',
      exact: true,
    })
    .click();

  await expect(page).toHaveURL(/#projects$/);

  await expect(menu).not.toBeVisible();

  await expect(page.locator('#projects')).toBeInViewport();
});

test('skip link lleva el foco al contenido principal', async ({ page }) => {
  await page.goto('/');

  await page.keyboard.press('Tab');

  await expect(
    page.getByRole('link', {
      name: 'Saltar al contenido',
    }),
  ).toBeFocused();

  await page.keyboard.press('Enter');

  await expect(page.getByRole('main')).toBeFocused();
});

test('case studies reales, metadata y enlaces externos seguros', async ({ page }) => {
  for (const [slug, title] of [
    ['ia-cognitiva', 'IA Cognitiva'],
    ['detalles-belis', 'Detalles Belis'],
    ['planoria', 'PlanorIA'],
    ['kaphiy', 'Kaphiy — Sistema de Gestión para Cafetería'],
    ['atrium', 'Atrium Academy'],
  ]) {
    const response = await page.goto(`/proyectos/${slug}`);

    expect(response?.status()).toBe(200);

    await expect(
      page.getByRole('heading', {
        level: 1,
        name: title,
        exact: true,
      }),
    ).toBeVisible();

    await expect(page).toHaveTitle(`${title} | Benjamin Rumay`);

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://benjaminrumay-portafolio.vercel.app/proyectos/${slug}`,
    );

    expect(
      await page
        .locator('a[target="_blank"]')
        .evaluateAll((links) =>
          links.every(
            (link) =>
              link.getAttribute('rel')?.includes('noopener') &&
              link.getAttribute('rel')?.includes('noreferrer'),
          ),
        ),
    ).toBe(true);

    await noOverflow(page);
  }

  await page.goto('/');

  await page
    .getByRole('link', {
      name: 'Ver proyecto IA Cognitiva',
      exact: true,
    })
    .click();

  await expect(page).toHaveURL(/\/proyectos\/ia-cognitiva$/);

  await expect(
    page.getByRole('link', {
      name: /Ver demo/,
    }),
  ).toHaveAttribute(
    'href',
    'https://plataformaia-f6gxc2bhc3g3e4cv.eastus2-01.azurewebsites.net',
  );
});

test('galería con ocho capturas, flechas, foco y cierre', async ({ page }) => {
  await page.setViewportSize({
    width: 390,
    height: 844,
  });

  await page.goto('/proyectos/ia-cognitiva');

  const trigger = page.getByRole('link', {
    name: 'Ampliar: Consentimiento e inicio de la evaluación',
  });

  await trigger.click();

  const gallery = page.getByRole('dialog', {
    name: 'IA Cognitiva · Galería',
  });

  await expect(gallery).toBeVisible();

  await expect(gallery.getByText('1 / 8')).toBeVisible();

  await page.keyboard.press('ArrowLeft');

  await expect(gallery.getByText('8 / 8')).toBeVisible();

  await page.keyboard.press('ArrowRight');

  await expect(gallery.getByText('1 / 8')).toBeVisible();

  await gallery
    .getByRole('button', {
      name: 'Imagen siguiente',
    })
    .click();

  await expect(gallery.getByText('2 / 8')).toBeVisible();

  expect(
    (
      await new AxeBuilder({
        page,
      }).analyze()
    ).violations,
  ).toEqual([]);

  await page.keyboard.press('Escape');

  await expect(gallery).not.toBeVisible();

  await expect(trigger).toBeFocused();

  await noOverflow(page);
});

test('contacto valida y prepara WhatsApp sin enviar ni borrar el mensaje', async ({
  page,
}) => {
  await page.addInitScript(() => {
    window.open = (url) => {
      (
        window as unknown as {
          preparedContact: string;
        }
      ).preparedContact = String(url);

      return null;
    };
  });

  await page.goto('/#contact');

  const message = page.getByLabel('Mensaje', {
    exact: true,
  });

  await message.fill('          ');

  await page
    .getByRole('button', {
      name: 'Enviar mensaje',
      exact: true,
    })
    .click();

  await expect(page.locator('#contact-error')).toBeVisible();

  await message.fill('Quiero conversar sobre un proyecto con C# y .NET.');

  await page.getByLabel('Nombre (opcional)').fill('Ana & José');

  await page
    .getByRole('button', {
      name: 'Enviar mensaje',
      exact: true,
    })
    .click();

  const prepared = await page.evaluate(
    () =>
      (
        window as unknown as {
          preparedContact: string;
        }
      ).preparedContact,
  );

  expect(new URL(prepared).searchParams.get('text')).toContain('Ana & José');

  expect(new URL(prepared).searchParams.get('text')).toContain('C# y .NET');

  await expect(message).not.toHaveValue('');
});

test('contenido indexable sin JavaScript y 404 real', async ({ browser, baseURL }) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL,
  });

  const page = await context.newPage();

  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      name: 'IA Cognitiva',
      level: 3,
    }),
  ).toBeVisible();

  await expect(
    page.getByRole('heading', {
      name: 'Certificaciones',
      level: 3,
    }),
  ).toBeVisible();

  await expect(page.getByText('Bachiller en proceso')).toBeVisible();

  const response = await page.goto('/proyectos/no-existe');

  expect(response?.status()).toBe(404);

  await expect(
    page.getByRole('heading', {
      name: 'Esta página no existe.',
    }),
  ).toBeVisible();

  await page
    .getByRole('link', {
      name: 'Volver al inicio',
      exact: true,
    })
    .click();

  await expect(page).toHaveURL(`${baseURL}/`);

  await context.close();
});

test('accesibilidad automatizada, ausencia de errores y movimiento reducido', async ({
  page,
}) => {
  const errors: string[] = [];

  page.on('pageerror', (error) => errors.push(error.message));

  for (const route of [
    '/',
    '/proyectos/ia-cognitiva',
    '/proyectos/atrium',
    '/no-existe',
  ]) {
    await page.goto(route);

    expect(
      (
        await new AxeBuilder({
          page,
        })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
          .options({
            rules: {
              'label-content-name-mismatch': {
                enabled: true,
              },
            },
          })
          .analyze()
      ).violations,
    ).toEqual([]);
  }

  expect(errors).toEqual([]);

  expect(
    await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior),
  ).toBe('auto');

  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
});

test('headers, sitemap, robots y CV disponibles', async ({ request }) => {
  const response = await request.get('/');

  const headers = response.headers();

  expect(headers['x-content-type-options']).toBe('nosniff');

  expect(headers['x-frame-options']).toBe('DENY');

  expect(headers['content-security-policy']).toContain("frame-ancestors 'none'");

  expect(headers['content-security-policy']).not.toContain('unsafe-eval');

  expect(headers['x-powered-by']).toBeUndefined();

  const sitemap = await request.get('/sitemap.xml');

  expect(sitemap.status()).toBe(200);

  expect((await sitemap.text()).match(/<loc>/g)).toHaveLength(6);

  expect(await (await request.get('/robots.txt')).text()).toContain(
    'Sitemap: https://benjaminrumay-portafolio.vercel.app/sitemap.xml',
  );

  const cv = await request.get('/docs/benjamin-rumay-cv.pdf');

  expect(cv.status()).toBe(200);

  expect(cv.headers()['content-type']).toContain('application/pdf');
});
