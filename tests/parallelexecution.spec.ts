import {test,expect} from '@playwright/test'

test('Test Case 1',async({page})=>{
    await page.goto("https://www.google.com")
    console.log("Test Case 1 executed")
})
test('Test Case 2',async({page})=>{
    await page.goto("https://www.google.com")
    console.log("Test Case 2 executed")
})
test('Test Case 3',async({page})=>{
    await page.goto("https://www.google.com")
    console.log("Test Case 3 executed")
})
test('Test Case 4',async({page})=>{
    await page.goto("https://www.google.com")
    console.log("Test Case 4 executed")
})