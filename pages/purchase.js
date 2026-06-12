export class Purchase{
    constructor(page){
        this.nameField = page.locator('#name');
        this.countryField = page.locator('#country');
        this.cityField = page.locator('#city');
        this.cardField = page.locator('#card');
        this.monthField = page.locator('#month');
        this.yearField = page.locator('#year');
        this.purchaseButton = page.locator("//button[text()='Purchase']");
    }
    async filldetails(nameField,countryField,cityField,cardField,monthField,yearField)
    {
        await this.nameField.fill(nameField)
        await this.countryField.fill(countryField)
        await this.cityField.fill(cityField)
        await this.cardField.fill(cardField)
        await this.monthField.fill(monthField)
        await this.yearField.fill(yearField)
    }
    async purchaseCart()
    {
        await this.purchaseButton.click()
    }
}