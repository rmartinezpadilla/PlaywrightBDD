import { chromium, firefox } from '@playwright/test';
import { createBdd } from 'playwright-bdd';


const { Before, After, BeforeAll, AfterAll,  } = createBdd();

Before(async({page})=>{
    console.log("🔥 Iniciando la prueba...");
    await page.goto('https://ecommerce-playground.lambdatest.io/')
    
});

After(async()=>{
    console.log("This is a After.")
    console.log("❌ Cerrando la página después de cada escenario...");
});

BeforeAll(async({browser})=>{
    const page = firefox.launch();
});

AfterAll(async()=>{
    console.log("🧹 Finalizando pruebas y limpiando recursos...");
    console.log("This is a AfterAll.")
});