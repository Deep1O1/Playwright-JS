import { expect, test } from '@playwright/test';

test('Verify Login', async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/client');
    await page.fill('#userEmail', 'deep1@mailinator.com');
    await page.fill('#userPassword', 'Tester@123');
    await page.click('#login');
    await page.waitForLoadState('networkidle');
    
    await page
        .locator('.card-body')
        .filter({ hasText: /ADIDAS ORIGINAL/ })
        .locator('i.fa-shopping-cart')
        .click();
        
    await page.locator('button.btn-custom i.fa-shopping-cart').click();
    await expect(page.locator('.cart')).toBeVisible();
    
    //await page.locator('text=Checkout').click();
    await page.getByRole('button', {name: 'Checkout'}).click();
    await page.getByPlaceholder('Select Country').pressSequentially('Ind');

    await
        page.locator('.list-group-item')
            .filter({hasText:  /^\s*India$/})
            .click();
      
    await page.locator('input[name = coupon]').fill('rahulshettyacademy');
    //await page.locator('button[type=submit]').click();
    await page.getByRole('button', {name: 'Apply Coupon'}).click();
    await expect(page.locator('p.ng-star-inserted')).toHaveText('* Coupon Applied');
    await page.locator('a.btnn').click();

    await expect(page.locator('.hero-primary')).toBeVisible();
    const rawOrderId = await page.locator('label.ng-star-inserted').textContent();
    const orderId = rawOrderId.trim().replace(/\|\s*|\s*\|/g, '');
    

    await page.locator('button[routerlink*=myorders]').click();

    const row = page
                    .locator('tr.ng-star-inserted')
                    .filter ({has: page
                                    .locator('th', { hasText: orderId })});

    await row.locator('button.btn-primary').click();


    await expect(page.locator('.email-preheader p')).toHaveText('Thank you for Shopping With Us');        

})