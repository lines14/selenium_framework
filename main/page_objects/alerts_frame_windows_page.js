const BaseForm = require('../framework/base_form');
const {By} = require('selenium-webdriver');

class AlertsFrameWindowsPage extends BaseForm {
    constructor() {
        super(By.xpath('//div[@class="main-header" and text()="Alerts, Frame & Windows"]'), '"alerts, frame & windows" page');
    }
    async alertsFrameWindowsPageIsDisplayed() {
        return await this.boolPageIsDisplayed();
    }
}

module.exports = new AlertsFrameWindowsPage();