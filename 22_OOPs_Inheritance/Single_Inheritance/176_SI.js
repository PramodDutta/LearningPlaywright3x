class BasePage {
    constructor(pageName) {
        this.pageName = pageName;
    }
    open() {
        console.log("Opening the page ");
    }
    close() {
        console.log("Closing the page ");
    }

}
class LoginPage extends BasePage {
}

let page = new LoginPage();
page.open();
page.close();