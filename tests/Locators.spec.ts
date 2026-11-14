import {test,expect} from '@playwright/test';

test('Locators Demo',async({page})=>{

  await page.goto('https://techwithsuresh.lovable.app/shop');

  await page.getByTestId('nav-login').click();

  await page.getByTestId('login-email').fill('demo@shopease.test')

  await page.getByTestId('login-password').fill('Demo@123');

  await page.getByTestId('remember-me').check();

  await page.getByTestId('login-submit').click()






})