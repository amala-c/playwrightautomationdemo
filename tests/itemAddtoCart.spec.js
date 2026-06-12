// Login with valid credentials -> select a product -> Add to cart -> click ok on the pop up
import { LoginNewUser } from "../pages/loginFlow";
import { AddToCart } from "../pages/addToCart";
import { Purchase } from "../pages/purchase";
import { test, expect }from '@playwright/test'
test.setTimeout(120000); 
test.beforeEach('loginurl',async({page})=>{
    await page.goto("https://demoblaze.com/")
   
})

const loginData=require('../utils/login.json')
//const purchaseData=require('../utils/purchase.json')

test('Add Item to cart',async({page})=>{
    const login_username=loginData[1].lusername
    const login_password=loginData[1].lpassword
    const loginObj=new LoginNewUser(page)
    
    const title =await page.title()
    await expect(page).toHaveTitle("STORE") 
    await loginObj.clickLoginUrl()
    await loginObj.loginCreds(login_username,login_password)
    await loginObj.loginNewUserFlow()

    const addCartObj=new AddToCart(page)
    await addCartObj.selectItem()
    const actualText = await page.locator('h2.name').textContent();
    expect(actualText?.trim()).toBe('Samsung galaxy s6');

    page.on('dialog',async dialog=>{
    expect(dialog.message()).toBe('Product added.')
    await dialog.accept()
}) 
    await addCartObj.addToCartFlow()
})

//Login with valid credentials -> select a product  under Phones -> Add to cart -> click ok on the pop up-> Add details > Purchase
test.only('Add purchase details',async({page})=>{
   const login_username=loginData[1].lusername
   const login_password=loginData[1].lpassword
    const loginObj=new LoginNewUser(page)
    
    const title =await page.title()
    await expect(page).toHaveTitle("STORE") 
    await loginObj.clickLoginUrl()
    await loginObj.loginCreds(login_username,login_password)
    await loginObj.loginNewUserFlow()

    const addCartObj=new AddToCart(page)
    await addCartObj.selectItem()
    const actualText = await page.locator('h2.name').textContent();
    expect(actualText?.trim()).toBe('Samsung galaxy s6');

    page.on('dialog',async dialog=>{
    expect(dialog.message()).toBe('Product added.')
    await dialog.accept()
}) 
    await addCartObj.addToCartFlow()
   
    console.log("Before clickCart");
    await addCartObj.clickCart()

    console.log("After clickCart");
   /* await expect(page.locator('#totalp')).toHaveText('360');
    const totalAmount = await page.locator('#totalp').textContent();
    expect(totalAmount?.trim()).toBe('360'); */
    //console.log(await page.locator('#totalp').textContent());

    await addCartObj.purchaseButtonClick()

    const purchaseObj=new Purchase(page)
   /* const pname=purchaseData.name 
    const pcountry=purchaseData.country //we have to use single json that is why we are commenting this line of codes
    const pcity=purchaseData.city
    const pcard=purchaseData.card
    const pmonth=purchaseData.month
    const pyear=purchaseData.year*/
    const pname=loginData[5].name
    const pcountry=loginData[5].country
    const pcity=loginData[5].city
    const pcard=loginData[5].card
    const pmonth=loginData[5].month
    const pyear=loginData[5].year

    await expect(page.locator('#orderModal')).toBeVisible({ timeout: 1000000 });
    
    await purchaseObj.filldetails(
        pname,
        pcountry,
        pcity,
        pcard,
        pmonth,
        pyear)

await purchaseObj.purchaseCart()
// wait for popup
const successPopup = page.locator('.sweet-alert');
await expect(successPopup).toBeVisible();

// assert text
await expect(successPopup).toContainText('Thank you for your purchase!');

// click OK
await page.locator('.confirm.btn.btn-lg.btn-primary').click();
})
