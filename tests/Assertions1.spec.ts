import {test,expect} from '@playwright/test'

test('Verify Login Functionality',async({page})=>{

    await page.goto("https://techwithsuresh.lovable.app/shop/login");
    await page.locator('#email').fill("demo@shopease.test");
    await page.locator('#password').fill("Demo@123");
    await page.getByTestId("login-submit").click();

    // Assertions

    await expect(page.getByTestId("shop-demo-banner")).toBeVisible();

})