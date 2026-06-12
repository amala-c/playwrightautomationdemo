//Login test cases -> login with valid credentials, login with invalid user and valid password
//-> login with valid username and invalid password and login with invalid username and password

import { LoginNewUser } from "../pages/loginFlow";
import{ test, expect}from '@playwright/test'
test.beforeEach('loginurl',async({page})=>{
    await page.goto("https://demoblaze.com/")
})
const loginData=require('../utils/login.json') //Getting data from login.json

//Test Case - 01 - Login with valid user //
test.only('login new user',async({page})=>{
   // const login_username=loginData.lusername //creates a constant variable login_username and assigns it the value of the lusername property from the login.json file.
  //  const login_password=loginData.lpassword
  const login_username=loginData[1].lusername
  const login_password=loginData[1].lpassword

    const loginObj=new LoginNewUser(page) //Object creation for class LoginNewUser
    
    const title =await page.title()
    //console.log("Page title is "+title)
    await expect(page).toHaveTitle("STORE") 

    await loginObj.clickLoginUrl()
    await loginObj.loginCreds(login_username,login_password)
    await loginObj.loginNewUserFlow()
})

////Test Case - 02 - Login with invalid username and valid password //
test('Login invalid username and valid password',async({page})=>{
    const invalid_username=loginData[2].lusername1
    const validpassword=loginData[2].lpassword1
    const loginObj=new LoginNewUser(page)
    const title =await page.title() //assertion
    await expect(page).toHaveTitle("STORE") 
    await loginObj.clickLoginUrl()
    await loginObj.loginCreds(invalid_username,validpassword)
    page.on('dialog',async dialog=>{
    expect(dialog.message()).toBe('Wrong password.')
    await dialog.accept()
})
    await loginObj.loginNewUserFlow()
})

////Test Case - 03 - Login with valid username and invalid password //
test('Login valid username and invalid password',async({page})=>{
    const validusername=loginData[3].lusername2
    const invalidpassword=loginData[3].lpassword2
    const loginObj=new LoginNewUser(page)
    const title =await page.title() //assertion
    await expect(page).toHaveTitle("STORE") 
    await loginObj.clickLoginUrl()
    await loginObj.loginCreds(validusername,invalidpassword)
    page.on('dialog',async dialog=>{
    expect(dialog.message()).toBe('Wrong password.')
    await dialog.accept()
})
    await loginObj.loginNewUserFlow()
})

//Test case -o4 - Login with invalid username and invalid password //
test('login with invalid username and password',async({page})=>{
    const wrongusername=loginData[4].lusername3
    const wrongpassword=loginData[4].lpassword3
    const loginObj=new LoginNewUser(page)
    const title =await page.title() //assertion
    await expect(page).toHaveTitle("STORE") 
    await loginObj.clickLoginUrl()
    await loginObj.loginCreds(wrongusername,wrongpassword)
     page.on('dialog',async dialog=>{
    expect(dialog.message()).toBe('User does not exist.')
    await dialog.accept()
})  
    await loginObj.loginNewUserFlow()

})