class TestCase {
    execute() {
        console.log("Running generic test");
    }
}
class UnitTest extends TestCase {
    execute() {
        console.log("Running unit test — checking one function");
    }
}
class APITest extends TestCase {
    execute() {
        console.log("Running API test — sending HTTP request");
    }
}
class E2ETest extends TestCase {
    execute() {
        console.log("Running E2E test — opening browser");
    }
}
let tests = [new UnitTest(), new APITest(), new E2ETest()];
tests.forEach(function (test) {
    test.execute();
});
