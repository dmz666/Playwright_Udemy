const {test, expect} = require('@playwright/test');


test('First playwright test', async ({ page }) => {
    //const context = await browser.newContext();
    //const page = await context.newPage();
    //In case we don't have any requirement like cookies or something to put into the browser
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");


})