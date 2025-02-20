import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  paths: ['tests/features/*.feature'],
  require: ['tests/steps/*.js'],
  use: {
    trace: 'on-first-retry',
    headless: false, // <-- Agrega esto
  },
  autoDescribe: false,  // 🔴 Evita `test.describe()`
  generateDescribeBlock: false, // 🔴 Evita bloques `describe()`
  generateTitle: false   // Opcional: Mantiene los títulos de los tests
});

export default defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',    
    video: 'retain-on-failure',  // 🔹 Solo guarda el video si la prueba falla
    //video: 'on', // 🔹 Guarda el video siempre
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
