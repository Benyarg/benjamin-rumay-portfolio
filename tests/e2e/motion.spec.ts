import { test, expect } from '@playwright/test';

test.use({
  reducedMotion: 'no-preference',

  viewport: {
    width: 1440,
    height: 900,
  },
});

test('efectos activos, pausa y preferencia de movimiento reducido', async ({ page }) => {
  const errors: string[] = [];

  page.on('pageerror', (error) => errors.push(error.message));

  await page.goto('/');

  await expect(page.locator('html')).toHaveAttribute('data-motion', 'running');

  const activeNames = await page.evaluate(() =>
    document
      .getAnimations()
      .map((animation) => (animation as CSSAnimation).animationName),
  );

  expect(activeNames).toEqual(
    expect.arrayContaining(['float', 'blink', 'shine', 'glow-pulse']),
  );

  const typing = page.locator('.typing-text');

  await expect(typing).toHaveText('Software Developer');

  await expect(typing).not.toHaveText('Software Developer', {
    timeout: 7000,
  });

  const particles = page.locator('canvas[data-particles]');

  const firstFrame = await particles.evaluate((canvas) =>
    (canvas as HTMLCanvasElement).toDataURL(),
  );

  await expect
    .poll(() => particles.evaluate((canvas) => (canvas as HTMLCanvasElement).toDataURL()))
    .not.toBe(firstFrame);

  const card = page.locator('.project-card').first();

  await card.scrollIntoViewIfNeeded();

  await expect(card).toHaveClass(/active/);

  await page
    .getByRole('button', {
      name: 'Pausar animaciones',
    })
    .click();

  await expect(page.locator('html')).toHaveAttribute('data-motion', 'paused');

  await expect(typing).toHaveText('Software Developer');

  await expect.poll(() => page.evaluate(() => document.getAnimations().length)).toBe(0);

  await page
    .getByRole('button', {
      name: 'Activar animaciones',
    })
    .click();

  await expect(page.locator('html')).toHaveAttribute('data-motion', 'running');

  await page.emulateMedia({
    reducedMotion: 'reduce',
  });

  await expect(page.locator('html')).toHaveAttribute('data-motion', 'reduced');

  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);

  await expect(typing).toHaveText('Software Developer');

  await expect(
    page.getByRole('button', {
      name: 'Pausar animaciones',
    }),
  ).not.toBeVisible();

  await page.setViewportSize({
    width: 390,
    height: 844,
  });

  await page.emulateMedia({
    reducedMotion: 'no-preference',
  });

  await expect(page.locator('html')).toHaveAttribute('data-motion', 'running');

  const mobileFrame = await particles.evaluate((canvas) =>
    (canvas as HTMLCanvasElement).toDataURL(),
  );

  await expect
    .poll(() => particles.evaluate((canvas) => (canvas as HTMLCanvasElement).toDataURL()))
    .not.toBe(mobileFrame);

  expect(errors).toEqual([]);
});

test('los efectos se reinician al navegar sin duplicar partículas ni controladores', async ({
  page,
}) => {
  const errors: string[] = [];

  page.on('pageerror', (error) => errors.push(error.message));

  await page.goto('/');

  for (let visit = 0; visit < 2; visit++) {
    await page
      .getByRole('link', {
        name: 'Ver proyecto Atrium Academy',
        exact: true,
      })
      .click();

    await expect(page).toHaveURL(/\/proyectos\/atrium$/);

    await expect(page.getByAltText('Logo de Atrium Academy')).toBeVisible();

    await expect(page.locator('canvas[data-particles]')).toHaveCount(1);

    await page
      .getByRole('link', {
        name: 'Volver a proyectos',
      })
      .click();

    await expect(page).toHaveURL(/#projects$/);

    await expect(page.locator('html')).toHaveAttribute('data-motion', 'running');

    await expect(page.locator('canvas[data-particles]')).toHaveCount(1);

    await expect(
      page.getByRole('button', {
        name: 'Pausar animaciones',
      }),
    ).toHaveCount(1);
  }

  expect(errors).toEqual([]);
});
