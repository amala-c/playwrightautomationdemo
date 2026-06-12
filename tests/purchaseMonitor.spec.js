import { LoginNewUser } from "../pages/loginFlow";
import { Monitors } from "../pages/addMonitors";
import { AddToCart } from "../pages/addToCart";
import { Purchase } from "../pages/purchase";
import { test, expect } from "@playwright/test";
test.setTimeout(120000); 
test.beforeEach('loginurl',async({page})=>{
    await page.goto("https://demoblaze.com/")
   
})
const loginData=require('../utils/login.json')
//const purchaseData=require('../utils/purchase.json')
test('purchase monitor',async({page})=>{

    const login_username=loginData[1].lusername
    const login_password=loginData[1].lpassword
    const loginObj=new LoginNewUser(page)
    
    const title =await page.title()
    await expect(page).toHaveTitle("STORE") 
    await loginObj.clickLoginUrl()
    await loginObj.loginCreds(login_username,login_password)
    await loginObj.loginNewUserFlow()

    const monitorObj=new Monitors(page)
    await monitorObj.selectMonitor()

    await monitorObj.chooseItem()
    page.on('dialog',async dialog=>{
    expect(dialog.message()).toBe('Product added.')
    await dialog.accept()
}) 
    await monitorObj.addCartMonitor()
    console.log("hai")
    //using AddToCart functions
     const addCartObj=new AddToCart(page)
    await addCartObj.clickCart()

    await addCartObj.purchaseButtonClick()

    const purchaseObj=new Purchase(page)
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