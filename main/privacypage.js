var Base = require ('../main/base');

class LoginPage extends Base{

    async checkTabsCount(){
        return await this.checkTheTabsCount();
    }
    async switchDriverToAnotherTab(number){
        await this.switchDriverToTheAnotherTab(number);
    }
    async verifyLanguagesListOnPrivacyPage(path){
        return await this.verifyWebPageByDisplayedElement(path)
    }
    async parseChildElementsUnlimited(path, childPath, attr){
        return await this.parseTheChildElementsUnlimited(path, childPath, attr);
    }
    async chechPolicySignYear(path){
        return await this.verifyWebPageByCustomText(path)
    }
    // async verifyLanguagesListIsDisplayed(path){
    //     await this.waitUntilElementIsDisplayed(path)
    // }
    // async inputForm(path, text){
    //     await this.inputTextByXpath(path, text)
    // }
    // async clickSubmitButton(path){
    //     await this.clickButton(path)
    // }
    // async verifyLoadingAnimation(path){
    //     return await this.checkElementIsEnabled(path)
    // }
    // async waitUntilErrorMessageExpects(path){
    //     await this.waitUntilElementIsEnabled(path)
    // }
    async driverQuit(){
        await this.quitDriver()
    }
    
}

module.exports = new LoginPage();