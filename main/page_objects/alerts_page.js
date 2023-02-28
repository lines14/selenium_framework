const BaseForm = require('../framework/base_form');
const Label = require('../framework/base_element_children/label');
const Button = require('../framework/base_element_children/button');
const {By} = require('selenium-webdriver');

class AlertsPage extends BaseForm {
    constructor() {
        super(By.xpath('//div[@class="main-header" and text()="Alerts"]'), '"alerts" form');
        this.clickButtonToSeeAlert = new Button(By.xpath('//*[@id="alertButton"]'), '"click button to see alert" button');
        this.clickButtonToAppearConfirmBox = new Button(By.xpath('//*[@id="confirmButton"]'), '"on button click, confirm box will appear" button');
        this.confirmText = new Label(By.xpath('//*[@id="confirmResult"]'), 'text "You selected Ok"');
        this.clickButtonToAppearPromptBox = new Button(By.xpath('//*[@id="promtButton"]'), '"on button click, prompt box will appear" button');
        this.promptText = new Label(By.xpath('//*[@id="promptResult"]'), 'text');
    }
    async clickButtonToSeeAlertButton() {
        await this.clickButtonToSeeAlert.clickButton();
    }
    async onButtonClickConfirmBoxWillAppearButton() {
        await this.clickButtonToAppearConfirmBox.clickButton();
    }
    async confirmTextIsDisplayed() {
        return await this.confirmText.elementIsDisplayed();
    }
    async onButtonClickPromptBoxWillAppearButton() {
        await this.clickButtonToAppearPromptBox.clickButton();
    }
    async getEnteredText() {
        return await this.promptText.getText();
    }
}

module.exports = new AlertsPage();