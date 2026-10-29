import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // En CI es mejor tener 2 reintentos por si la red de GitHub falla
  retries: process.env.CI ? 2 : 0,
  // En CI usar 1 solo worker evita que se caiga el servidor local de pruebas
  workers: process.env.CI ? 1 : 2,
  timeout: 60_000,
  expect: { timeout: 15_000 },
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://127.0.0.1:3100',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    // ⚠️ QUITADO reducedMotion: 'reduce' de aquí para no romper las pruebas de animación
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
      ? {
          executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
          args: [
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--no-zygote',
          ],
        }
      : undefined,
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    // Si estamos en GitHub Actions, NO compilamos de nuevo (ya se hizo antes)
    // Si estamos en local, sí compilamos.
    command: process.env.CI
      ? 'npm run start -- --hostname 127.0.0.1 --port 3100'
      : 'npm run build && npm run start -- --hostname 127.0.0.1 --port 3100',
    url: 'http://127.0.0.1:3100',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
