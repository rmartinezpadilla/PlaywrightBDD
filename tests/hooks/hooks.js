import { chromium, firefox } from '@playwright/test';
import { createBdd } from 'playwright-bdd';


const { Before, After, BeforeAll, AfterAll,  } = createBdd();

Before(async({page})=>{    
    await page.goto('https://ecommerce-playground.lambdatest.io/')    
});

After(async()=>{
    console.log("This is a After.")
    console.log("❌ Cerrando la página después de cada escenario...");
});

BeforeAll(async({browser})=>{
    console.log("🔥 Iniciando la prueba...");
    const page = chromium.launch();
});

AfterAll(async()=>{
    console.log("This is a AfterAll.")
    console.log("🧹 Finalizando pruebas y limpiando recursos...");  
});