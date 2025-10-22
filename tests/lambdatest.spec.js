import {expect , test} from '@playwright/test'
import { HomePage } from '../Pages/HomePage';
import { DropDown } from '../Pages/DropDown';

test.beforeEach(async ({page}) => {
    
    await page.goto('https://www.lambdatest.com/selenium-playground/');
});

test('Dropdown Page', async ({page}) => {
    const hp = new HomePage(page);
    await hp.selectDropDownOption();
    const dd = new DropDown(page);
    let day = 'Sunday';
    await dd.selectOption(day);
    expect(await dd.validateDayName()).toContain(day);
});

