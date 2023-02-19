const Singleton = require('./singleton');

class BrowserUtils {
    async initTheDriver(browser) {
        this.driver = await Singleton.getInstance(browser);
    }
    async go_to_url(theURL) {
        await this.driver.get(theURL);
    }
    async scrollToTheBottom() {
        await this.driver.executeScript('window.scrollBy(0, document.body.scrollHeight);');
    }
    async handleOriginalTab() {
        return await this.driver.getWindowHandle();
    }
    async checkTheTabsCount() {
        const tabsCount = (await this.driver.getAllWindowHandles()).length;
        return tabsCount;
    }
    async switchDriverToTheAnotherTab(number) {
        await this.driver.wait(async () => (await this.driver.getAllWindowHandles()).length === 2, 9000);
        const windows = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(windows[number]);
        console.log(`    ▶ switch driver to ${number} tab`);
    }
    async switchDriverToTheOriginalTab(originalTab) {
        await this.driver.switchTo().window(originalTab);
        console.log(`    ▶ switch driver to previous tab`);
    }
    async getAlert() {
        return await this.driver.switchTo().alert();
    }
    async getAlertText() {
        const alert = await this.getAlert();
        return await alert.getText();
    }
    async enterTextToAlert(text) {
        const alert = await this.getAlert();
        await alert.sendKeys(text);
        console.log('    ▶ input text to alert form');
    }
    async acceptAlert() {
        const alert = await this.getAlert();
        await alert.accept();
        console.log('    ▶ accept alert');
    }
    async goIntoFrame(index) {
        await this.driver.switchTo().frame(index);
        console.log('    ▶ go into frame');
    }
    async goOutOfFrame() {
        await this.driver.switchTo().defaultContent();
        console.log('    ▶ go out of frame');
    }
    async closeTab() {
        await this.driver.close();
        console.log('    ▶ close tab');
    }
    async quitDriver() {
        await this.driver.quit();
        await Singleton.deleteInstance();
    }
}

module.exports = new BrowserUtils();