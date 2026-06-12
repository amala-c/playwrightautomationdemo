export class Monitors{
    constructor(page){
        this.page=page
        this.leftmenu=page.locator('.list-group-item').nth(3)
        this.selectitem=page.locator("//a[text()='Apple monitor 24']")
        this.addMonitorItem=page.locator("//a[@class='btn btn-success btn-lg']")
    }
    async selectMonitor()
    {
        await this.leftmenu.click()
    }
    async chooseItem()
    {
        await this.selectitem.click()
    }
    async addCartMonitor()
    {
        await this.addMonitorItem.click()
    }
}