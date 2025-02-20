# Playwright BDD
Esta guía esta diseñada para configurar y realizar un proyecto playwright BDD desde cero

##  Una vez estamos dentro de nuestro proycto procedemos a instalar los siguientes recursos:
* npm i playwright
* npm init playwright@latest (pasos dentro de la instalación: javascript,git rue, end to end test—> test)
* npm i -D playwright-bdd
* npm i -D @cucumber/cucumber@latest

## Estructura de carpetas de nuestro proyecto
```
playwright-cucumber-bdd/
│── tests/
│   ├── features/
|       ├── example.feature
│   ├── fixtures/
|       ├── fixture.js
│   ├── hooks/
|       ├── hooks.js
│   ├── pages/
|       ├── pageObj.js
│   ├── steps/
|       ├── namesteps.js
│── bdd.config.json
│── playwright.config.ts
│── package.json
│── tsconfig.json
```
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

### Screenshot
En el archivo playwright.config.js agregaamos las siguientes lineas en el objeto "use" del metodo definconfig() para activar las capturas de pantalla cuando fallen los escenarios
```
screenshot: 'only-on-failure',    
video: 'retain-on-failure',  // 🔹 Solo guarda el video si la prueba falla
//video: 'on', // 🔹 Guarda el video siempre
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
* npx bddgen; npx playwright test --reporter=html,list
* npx bddgen; npx playwright test --reporter=html,list --headed // --headed -> para levantar el navegador

Una vez ya tenemos configurado "Script" en nuestro archivo package.json de la siguiente manera:
```
 "scripts": {    
    "test": "npm run bddgen && npm run playwright-test",
    "bddgen": "npx bddgen",
    "playwright-test": "npx playwright test --reporter=html,list"
  },
```
Ejecutamos el comando para lanzar las pruebas:
* npm run test


# Documentación del Proyecto Playwright BDD

## Introducción
Este proyecto utiliza **Playwright** junto con **Cucumber (BDD)** para automatizar pruebas end-to-end en una aplicación web. Se estructura en archivos `.feature` para definir escenarios en lenguaje natural y archivos de pasos (`.js`) para su implementación en código.

---

## Estructura del Proyecto
```
PlaywrightBDD_Video/
│── tests/
│   ├── features/          # Archivos de características (Gherkin)
│   │   ├── ecomlogin.feature
│   ├── fixtures/          # Configuración y reutilización de objetos de página
│   │   ├── fixture.js
│   │   ├── pages.js
│   ├── hooks/             # Hooks de ejecución
│   │   ├── hooks.js
│   ├── pages/             # Objetos de página (Page Object Model)
│   │   ├── ecomLoginObj.js
│   │   ├── ecom_changeNameObj.js
│   ├── steps/             # Implementación de los pasos de prueba
│   │   ├── ecoLoginSteps.js
│── bdd.config.js          # Configuración de Playwright-BDD
│── playwright.config.js   # Configuración de Playwright
│── package.json           # Dependencias y scripts de ejecución
```

---

## Explicación de Código Relevante

### 1. `hooks.js`
Este archivo define **hooks** globales que se ejecutan antes y después de las pruebas. Se usa `createBdd()` para definir estos hooks en Playwright-BDD.

```javascript
import { chromium } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Before, After, BeforeAll, AfterAll } = createBdd();

// Se ejecuta antes de cada escenario
Before(async({page}) => {    
    await page.goto('https://ecommerce-playground.lambdatest.io/')    
});

// Se ejecuta después de cada escenario
After(async () => {
    console.log("❌ Cerrando la página después de cada escenario...");
});

// Se ejecuta antes de todas las pruebas
BeforeAll(async() => {
    console.log("🔥 Iniciando la prueba...");
    await chromium.launch();
});

// Se ejecuta después de todas las pruebas
AfterAll(async () => {
    console.log("🧹 Finalizando pruebas y limpiando recursos...");  
});
```
### Explicación
- **`Before`**: Antes de cada prueba, navega a la URL base de la app.
- **`After`**: Cierra la página y libera recursos después de cada prueba.
- **`BeforeAll`**: Se ejecuta antes de todas las pruebas, inicia el navegador.
- **`AfterAll`**: Finaliza la ejecución y limpia recursos.

---

### 2. `fixture.js`
Define **fixtures**, que son objetos reutilizables para los tests. Utiliza `playwright-bdd` y una estrategia basada en clases para la gestión de páginas.

```javascript
import { test as base } from 'playwright-bdd';
import * as Pages from './pages';

const { EcomLoginPage, EcomChangePage } = Pages;

const createTestFunction = (PageClass) => async ({page}, use) => {
    await use(new PageClass(page));
}

export const test = base.extend({
    ecomLoginPage: createTestFunction(EcomLoginPage),
    ecomChangePage: createTestFunction(EcomChangePage)
});
```

### Explicación
- **`createTestFunction(PageClass)`**: Instancia un objeto de página y lo pasa como fixture a los tests.
- **`test.extend({...})`**: Extiende la instancia de prueba con los objetos de página `EcomLoginPage` y `EcomChangePage`.

---

### 3. `ecomLoginObj.js`
Implementa el **Page Object Model (POM)** para la página de inicio de sesión.

```javascript
export class EcomLoginPage {
    constructor(page) {
        this.page = page;
        this.my_account_Btn = page.getByRole('button', { name: 'My account' });
        this.email_box = page.getByPlaceholder('E-Mail Address');
        this.password_box = page.getByPlaceholder('Password');
        this.submit_btn = page.locator("input[value='Login']");
    }

    async navigateToUrl(url) {
        await this.page.goto(url);
    }

    async clickOnMyAccount() {
        await this.my_account_Btn.click();
    }

    async enterEmailAddress(emailAddress) {
        await this.email_box.fill(emailAddress);
    }

    async enterPassword(password) {
        await this.password_box.fill(password);
    }

    async clickOnSubmit() {
        await this.submit_btn.click();
    }
}
```
### Explicación
- **Métodos `async`**: Se usan porque Playwright es asincrónico y maneja promesas.
- **Métodos de interacción**: `clickOnMyAccount()`, `enterEmailAddress()`, etc., encapsulan la lógica de interacción con la UI.

---

### 4. `ecoLoginSteps.js`
Implementa los **pasos definidos en `ecomlogin.feature`** utilizando las funciones de `playwright-bdd`.

```javascript
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('I navigate to {string}', async ({ ecomLoginPage }, url) => {
    await ecomLoginPage.navigateToUrl(url);
});

Given('I click on My account', async ({ ecomLoginPage }) => {
    await ecomLoginPage.clickOnMyAccount();
});

When('I click on submit button', async ({ ecomLoginPage }) => {
    await ecomLoginPage.clickOnSubmit();
});

Then('I should verify url contains {string}', async ({ page }, logged_url) => {
    await expect(page).toHaveURL(new RegExp(logged_url));
});
```
### Explicación
- **Cada `Given`, `When`, `Then`** representa un paso en `ecomlogin.feature`.
- **Uso de `async/await`**: Las acciones en Playwright son asincrónicas.
- **`expect(page).toHaveURL(...)`**: Valida que la URL es la esperada.

---
### Documentación del Proyecto Playwright BDD

Este proyecto utiliza Playwright con BDD para automatizar pruebas en una aplicación de comercio electrónico.

## Explicación de Código Relevante

### Métodos Async en Playwright

Los métodos `async` se utilizan en Playwright porque las operaciones, como la navegación en la web o la interacción con elementos, son asincrónicas y devuelven promesas. Usar `async/await` garantiza que las acciones se ejecuten en el orden esperado y se completen antes de pasar a la siguiente línea de código.

#### Ejemplo:
```javascript
async navigateToUrl(url) {
    await this.page.goto(url);  // Espera a que la página cargue completamente antes de continuar
}
```

Sin `await`, la ejecución del código no esperaría la carga completa de la página, lo que podría causar errores en pruebas dependientes.

### `hooks.js`: Hooks (Ganchos) de Ejecución

El archivo `hooks.js` define acciones que ocurren antes y después de cada prueba:

- **Before**: Se ejecuta antes de cada escenario, asegurando que la página inicie en la URL correcta.
- **After**: Se ejecuta después de cada prueba, permitiendo cerrar o limpiar recursos.
- **BeforeAll**: Se ejecuta antes de todas las pruebas, útil para configuraciones iniciales.
- **AfterAll**: Se ejecuta después de todas las pruebas, liberando recursos.

Ejemplo:
```javascript
Before(async({page})=>{    
    await page.goto('https://ecommerce-playground.lambdatest.io/');
});
```
Esto garantiza que cada prueba inicie desde la URL esperada.

### `fixture.js`: Creación y construcción de Páginas

En `fixture.js`, se extiende la funcionalidad de `test` para proporcionar instancias de las clases de página.

Ejemplo:
```javascript
export const test = base.extend({
    ecomLoginPage: createTestFunction(EcomLoginPage),
    ecomChangePage: createTestFunction(EcomChangePage)
});
```
Esto permite que cada prueba tenga acceso a los objetos de página de forma automática.

---

## Conclusión
Este proyecto implementa Playwright con BDD de manera estructurada y modular, permitiendo una fácil escalabilidad y mantenimiento. Se aprovechan **fixtures**, **hooks**, **Page Object Model (POM)** y **Cucumber** para crear pruebas legibles y reutilizables.
