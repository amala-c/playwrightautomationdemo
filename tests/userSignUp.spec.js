import { SignUpPage } from '../pages/signUpUser'
import { test, expect }from '@playwright/test'
test.beforeEach('loginurl',async({page})=>{
    await page.goto("https://demoblaze.com/")
})

//const signupData=require('../utils/signup.json') //loads the contents of the signup.json file and stores it in the variable signupData.
const loginData=require('../utils/login.json') 
test('signing up new user',async({page})=>{
    const s_username=loginData[0].susername
    const s_password=loginData[0].spassword
    const signupObj=new SignUpPage(page)
    await signupObj.clickHyperlink()
    await signupObj.SignUpCredentials(s_username,s_password)
    //code to handle alert -> accepting the alert
    page.on('dialog',async dialog=>{
    expect(dialog.message()).toBe('Sign up successful.')
    await dialog.accept()
})
 await signupObj.signUpFlow()
})
 

test.only('close signup details',async({page})=>{
    const s_username=loginData[0].susername
    const s_password=loginData[0].spassword
    const signupObj=new SignUpPage(page)
    await signupObj.clickHyperlink()
    await signupObj.SignUpCredentials(s_username,s_password)
    await signupObj.closeFlow()
})