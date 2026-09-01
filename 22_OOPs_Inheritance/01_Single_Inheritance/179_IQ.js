class BaseTest {
    constructor(){
        console.log("Parent!")
    }
    setup() {
        console.log("Base: open browser");
    }
    teardown() {
        console.log("Base: close browser");
    }
}
class UITest extends BaseTest {
    constructor(){
        super();
    }
    setup() {
        super.setup(); // UITest will help you to call your parent function. super() - Constrcutor, super.fname() - functions name
        console.log("UI: maximize window");
    }

    teardown() {
        console.log("UI: take screenshot");
        super.teardown();
    }

}