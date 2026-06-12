export class UserLogout{
    constructor(page){
        this.page=page
        this.logoutLink=page.locator('#logout2')

    }
    async logOutUsers()
    {
        await this.logoutLink.click()
    }
}