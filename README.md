npm init playwright@latest —> javascript and git and true, end to end test—> test
npm i -D playwright-bdd
npm i -D @cucumber/cucumber@latest
npm i playwright
----------------
Ejecutamos una prueba para validar si la instalación de los paquetes ha sido exitosa
npx playwright test

----------------

En el archivo playwright.config.js
importamos la siguiente librería

import { defineBddConfig } from 'playwright-bdd';

y agregaamos el siguiente codigo
con el fin de darle la ruta donde tenemos nuestros .features

const testDir = defineBddConfig({
  paths:['tests/features/ecomlogin.feature'],
  require: ['tests/steps/ecomsteps.js'],
});


y modificamos la linea donde aparezca
testDir: './tests',

por
testDir
----------------

ejecutamos el comando
npx bddgen

para así generar los metodos para los steps

----------------
Copiamos lo que nos arroja el generador y lo poegamos en nuestro archivo de steps
ruta= test/steps/xyzsteps.js
----------------
ejecutamos el comando
npx bddgen

npx bddgen; npx playwright test
npx bddgen; npx playwright test --reporter=html,list --headed

----------------
----------------
----------------


