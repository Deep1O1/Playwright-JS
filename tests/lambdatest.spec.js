import {chromium, expect , test} from '@playwright/test'
import { HomePage } from '../Pages/HomePage';

test.beforeEach(async ({page}) => {
    
    await page.goto('https://www.lambdatest.com/selenium-playground/');
});

test('Go To Dropdown Page', async ({page}) => {
    const hp = new HomePage(page);
    await hp.selectDropDownOption();
    
    
});



