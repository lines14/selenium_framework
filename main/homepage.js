var Base = require ('../main/base');

class HomePage extends Base{

    async driverInit(browser){
        await this.initTheDriver(browser);
    }
    async enter_url(theURL){
        await this.go_to_url(theURL);
    }
    async verifyHomePageByCustomText(path){
        return await this.verifyWebPageByCustomText(path)
    }
    async clickLoginButton(path){
        await this.clickButton(path);
    }

}

module.exports = new HomePage();