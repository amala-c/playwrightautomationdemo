export class AddToCart{
    constructor(page){
        this.page=page
        this.itemSelect=page.locator("//a[text()='Samsung galaxy s6']")
        this.addcartbtn=page.locator("//a[@class='btn btn-success btn-lg']")
        this.cartlink=page.locator("//div//ul//li//a[text()='Cart']")
        this.purchasebtn=page.locator("//button[text()='Place Order']")

    }
    async selectItem()
    {
        await this.itemSelect.click()
    }
    async addToCartFlow()
    {
        await this.addcartbtn.click()
    }
    async clickCart(){
    await this.cartlink.click();
       
    }
    async purchaseButtonClick(){
        await this.purchasebtn.click();
        
    }
}