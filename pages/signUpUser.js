export class SignUpPage{
    constructor(page){
        this.page=page
        this.signupLink=page.locator('#signin2')
        this.username=page.locator('#sign-username')
        this.password=page.locator('#sign-password')
        this.signupbtn=page.getByRole('button', { name: 'Sign up' })
        this.closebtn=page.locator("//button[@class='btn btn-secondary']").nth(1)
    }
    async clickHyperlink()
    {
        await this.signupLink.click();
        await this.username.waitFor({ state: 'visible' });
    }
    async SignUpCredentials(username,password){
        await this.username.fill(username)
        await this.password.fill(password)

    }
   async signUpFlow()
    {
        await this.signupbtn.click()
    }
    async closeFlow()
    {
        await this.closebtn.click()
    }
}