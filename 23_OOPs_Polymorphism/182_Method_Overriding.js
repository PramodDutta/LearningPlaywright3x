class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}

class APIPage extends BaseTest{
    setup() {
        console.log("APITest: open browser");
    }
}

let btest = new BaseTest();
let test = new APIPage();
test.setup();
btest.setup();

// TS = JS + Rules
