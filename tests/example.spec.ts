import {chromium,test} from '@playwright/test';
test('Browser Instance Launching',async()=>{

  // // Laucnh browser
   const browser= await chromium.launch({headless:false});
   console.log("Browser is launched")

   // Create first browser context

   const context1= await browser.newContext();
   const page1 =await context1.newPage();
   await page1.goto("https://www.google.com/")
   const context2= await browser.newContext();
  const page2= await context2.newPage();
  await page2.goto("https://en.wikipedia.org/wiki/JavaScript")

   await context1.close();
   await context2.close();

   await browser.close();


})