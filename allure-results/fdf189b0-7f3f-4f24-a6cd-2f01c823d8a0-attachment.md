# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: purchaseMonitor.spec.js >> purchase monitor
- Location: tests/purchaseMonitor.spec.js:12:5

# Error details

```
ReferenceError: purchaseData is not defined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog "Place order" [active] [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading "Place order" [level=5] [ref=e6]
          - button "Close" [ref=e7] [cursor=pointer]: ×
        - generic [ref=e9]:
          - generic [ref=e10]: "Total: 1200"
          - generic [ref=e11]:
            - generic [ref=e12]: "Name:"
            - 'textbox "Total: 1200 Name:" [ref=e13]'
          - generic [ref=e14]:
            - generic [ref=e15]: "Country:"
            - textbox "Country:" [ref=e16]
          - generic [ref=e17]:
            - generic [ref=e18]: "City:"
            - textbox "City:" [ref=e19]
          - generic [ref=e20]:
            - generic [ref=e21]: "Credit card:"
            - textbox "Credit card:" [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]: "Month:"
            - textbox "Month:" [ref=e25]
          - generic [ref=e26]:
            - generic [ref=e27]: "Year:"
            - textbox "Year:" [ref=e28]
        - generic [ref=e30]:
          - button "Close" [ref=e31]
          - button "Purchase" [ref=e32]
  - text:             
  - navigation [ref=e33]:
    - generic [ref=e34]:
      - link "PRODUCT STORE" [ref=e35] [cursor=pointer]:
        - /url: index.html
        - img [ref=e36]
        - text: PRODUCT STORE
      - list [ref=e38]:
        - listitem [ref=e39]:
          - link "Home (current)" [ref=e40] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e41]: (current)
        - listitem [ref=e42]:
          - link "Contact" [ref=e43] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e44]:
          - link "About us" [ref=e45] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e46]:
          - link "Cart" [ref=e47] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=e48]:
          - link "Log out" [ref=e49] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e50]:
          - link "Welcome amala" [ref=e51] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=e53]:
    - generic [ref=e54]:
      - heading "Products" [level=2] [ref=e55]
      - table [ref=e57]:
        - rowgroup [ref=e58]:
          - row "Pic Title Price x" [ref=e59]:
            - columnheader "Pic" [ref=e60]
            - columnheader "Title" [ref=e61]
            - columnheader "Price" [ref=e62]
            - columnheader "x" [ref=e63]
        - rowgroup [ref=e64]:
          - row "Apple monitor 24 400 Delete" [ref=e65]:
            - cell [ref=e66]:
              - img [ref=e67]
            - cell "Apple monitor 24" [ref=e68]
            - cell "400" [ref=e69]
            - cell "Delete" [ref=e70]:
              - link "Delete" [ref=e71] [cursor=pointer]:
                - /url: "#"
          - row "Apple monitor 24 400 Delete" [ref=e72]:
            - cell [ref=e73]:
              - img [ref=e74]
            - cell "Apple monitor 24" [ref=e75]
            - cell "400" [ref=e76]
            - cell "Delete" [ref=e77]:
              - link "Delete" [ref=e78] [cursor=pointer]:
                - /url: "#"
          - row "Apple monitor 24 400 Delete" [ref=e79]:
            - cell [ref=e80]:
              - img [ref=e81]
            - cell "Apple monitor 24" [ref=e82]
            - cell "400" [ref=e83]
            - cell "Delete" [ref=e84]:
              - link "Delete" [ref=e85] [cursor=pointer]:
                - /url: "#"
    - generic [ref=e86]:
      - heading "Total" [level=2] [ref=e87]
      - heading "1200" [level=3] [ref=e90]
      - button "Place Order" [ref=e91]
  - generic [ref=e93]:
    - generic [ref=e96]:
      - heading "About Us" [level=4] [ref=e97]
      - paragraph [ref=e98]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e101]:
      - heading "Get in Touch" [level=4] [ref=e102]
      - paragraph [ref=e103]: "Address: 2390 El Camino Real"
      - paragraph [ref=e104]: "Phone: +440 123456"
      - paragraph [ref=e105]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e109]:
      - img [ref=e110]
      - text: PRODUCT STORE
  - contentinfo [ref=e111]:
    - paragraph [ref=e112]: Copyright © Product Store
```

# Test source

```ts
  1  | import { LoginNewUser } from "../pages/loginFlow";
  2  | import { Monitors } from "../pages/addMonitors";
  3  | import { AddToCart } from "../pages/addToCart";
  4  | import { Purchase } from "../pages/purchase";
  5  | import { test, expect } from "@playwright/test";
  6  | test.setTimeout(120000); 
  7  | test.beforeEach('loginurl',async({page})=>{
  8  |     await page.goto("https://demoblaze.com/")
  9  |    
  10 | })
  11 | const loginData=require('../utils/login.json')
  12 | test('purchase monitor',async({page})=>{
  13 | 
  14 |     const login_username=loginData.lusername
  15 |     const login_password=loginData.lpassword
  16 |     const loginObj=new LoginNewUser(page)
  17 |     
  18 |     const title =await page.title()
  19 |     await expect(page).toHaveTitle("STORE") 
  20 |     await loginObj.clickLoginUrl()
  21 |     await loginObj.loginCreds(login_username,login_password)
  22 |     await loginObj.loginNewUserFlow()
  23 | 
  24 |     const monitorObj=new Monitors(page)
  25 |     await monitorObj.selectMonitor()
  26 | 
  27 |     await monitorObj.chooseItem()
  28 |     page.on('dialog',async dialog=>{
  29 |     expect(dialog.message()).toBe('Product added.')
  30 |     await dialog.accept()
  31 | }) 
  32 |     await monitorObj.addCartMonitor()
  33 |     console.log("hai")
  34 |     //using AddToCart functions
  35 |      const addCartObj=new AddToCart(page)
  36 |     await addCartObj.clickCart()
  37 | 
  38 |     await addCartObj.purchaseButtonClick()
  39 | 
  40 |     const purchaseObj=new Purchase(page)
> 41 |     const pname=purchaseData.name
     |                 ^ ReferenceError: purchaseData is not defined
  42 |     const pcountry=purchaseData.country
  43 |     const pcity=purchaseData.city
  44 |     const pcard=purchaseData.card
  45 |     const pmonth=purchaseData.month
  46 |     const pyear=purchaseData.year
  47 | 
  48 |     await expect(page.locator('#orderModal')).toBeVisible({ timeout: 1000000 });
  49 |     
  50 |     await purchaseObj.filldetails(
  51 |         pname,
  52 |         pcountry,
  53 |         pcity,
  54 |         pcard,
  55 |         pmonth,
  56 |         pyear)
  57 | 
  58 | await purchaseObj.purchaseCart()
  59 | // wait for popup
  60 | const successPopup = page.locator('.sweet-alert');
  61 | await expect(successPopup).toBeVisible();
  62 | 
  63 | // assert text
  64 | await expect(successPopup).toContainText('Thank you for your purchase!');
  65 | 
  66 | // click OK
  67 | await page.locator('.confirm.btn.btn-lg.btn-primary').click();
  68 | 
  69 | })
```