import {test,chromium} from '@playwright/test';

test('Test Multi Tab functionality', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    
    const [child] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('.cart a:nth-child(2)').click()
    ]);

    await child.waitForLoadState();
    console.log(await child.title());

    await page.bringToFront();
    
    await browser.close();
});