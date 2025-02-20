# Playwright BDD
Esta guía esta diseñada para configurar y realizar un proyecto playwright BDD desde cero

##  Una vez estamos dentro de nuestro proycto procedemos a instalar los siguientes recursos:
* npm i playwright
* npm init playwright@latest (pasos dentro de la instalación: javascript,git rue, end to end test—> test)
* npm i -D playwright-bdd
* npm i -D @cucumber/cucumber@latest

### Ejecutamos una prueba para validar si la instalación de los paquetes ha sido exitosa
* npx playwright test


### En el archivo playwright.config.js
El archivo playwright.config.ts, debería quedar de la siguiente manera
```
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
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
```
### ejecutamos el comando
* npx bddgen

para así generar los metodos para los steps

Copiamos lo que nos arroja el generador y lo poegamos en nuestro archivo de steps
* ruta= test/steps/xyzsteps.js

ejecutamos el comando
* npx bddgen
* npx bddgen; npx playwright test
* npx bddgen && npx playwright test
* npx bddgen; npx playwright test --reporter=html,list --headed // --headed -> para levantar el navegador

Una vez ya tenemos configurado "Script" en nuestro archivo package.json de la siguiente manera:
```
"scripts": {    
    "test": "npx bddgen && npx playwright test --reporter=html,list --headed"
  },
```
Ejecutamos el comando para lanzar las pruebas:
* npm run test


