import { LoginNewUser } from "../pages/loginFlow";
import { UserLogout } from "../pages/userLogout";
import { test, expect } from "@playwright/test";

const loginData = require("../utils/login.json");

test.beforeEach(async ({ page }) => {
    await page.goto("https://demoblaze.com/");
});

test("logout valid user", async ({ page }) => {

    const login_username = loginData.lusername;
    const login_password = loginData.lpassword;

    const loginObj = new LoginNewUser(page);

    await expect(page).toHaveTitle("STORE");

    await loginObj.clickLoginUrl();
    await loginObj.loginCreds(login_username, login_password);
    await loginObj.loginNewUserFlow();

    // Logout
    const logoutObj = new UserLogout(page);
    await logoutObj.logOutUsers();

    // Verification after logout
    await expect(page.locator("#login2")).toBeVisible();
});