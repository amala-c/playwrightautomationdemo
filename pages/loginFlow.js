export class LoginNewUser{
    constructor(page){
        this.page=page
        this.loginLink=page.locator('#login2')
        this.l_username=page.locator('#loginusername')
        this.l_password=page.locator('#loginpassword')
        this.l_loginbtn=page.locator("//button[text()='Log in']")

    }
    async clickLoginUrl()
    {
        await this.loginLink.click();
    }
    async loginCreds(l_username,l_password)
    {
        await this.l_username.fill(l_username)
        await this.l_password.fill(l_password)
    }
    async loginNewUserFlow()
    {
        await this.l_loginbtn.click()
    }


}
