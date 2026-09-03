interface TestHook {
    (testName: string): void;
}

let beforeEachHook: TestHook = function (testName: string): void {
    console.log("[BEFORE] Setting up: " + testName);
}

let afterEachHook: TestHook = function (testName: string): void {
    console.log("[AFTER] Tearing down: " + testName);
};

beforeEachHook("Login Test");
