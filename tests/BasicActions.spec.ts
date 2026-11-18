import {test,expect} from '@playwright/test';

test('Basic Actions Demo',async({page})=>{

    await page.goto('https://techwithsuresh.lovable.app/test');

    // Click on the button
    await page.getByTestId('test-click-button').click();

    // Double click on the button
    await page.getByTestId('test-double-click-button').dblclick();

    // Right click on the button
    await page.locator('#test-context-area').click({button:'right'});

    await page.getByTestId('test-input-text').fill('Hello World');

    await page.getByTestId('test-reg-gender-male').check();

    await page.getByTestId('test-reg-skill-javascript').check();

     await page.getByTestId('test-reg-skill-javascript').uncheck();

     await page.locator('#test-hover-card').hover();

     await page.getByTestId('test-keyboard-input').press('Tab');
     await page.getByTestId('test-keyboard-input').press('Enter');
     await page.getByTestId('test-keyboard-input').press('ArrowDown');
     await page.getByTestId('test-keyboard-input').press('ArrowUp');
     await page.getByTestId('test-keyboard-input').press('Escape');
     await page.getByTestId('test-keyboard-input').press('Control+a');
     await page.getByTestId('test-keyboard-input').press('Control+c');
     await page.getByTestId('test-keyboard-input').press('Control+v');
     await page.getByTestId('test-keyboard-input').press('Control+x');
     await page.getByTestId('test-keyboard-input').press('Control+z');
     await page.getByTestId('test-keyboard-input').press('Control+y');

     // Alerts
     page.on('dialog', async (dialog) => {
         console.log(dialog.message());
         await dialog.accept();
         await dialog.dismiss();
     });

     await page.getByTestId('test-alert-button').click();

});