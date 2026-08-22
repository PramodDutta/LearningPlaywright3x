// Error Handling — try/catch
// With Promises you use .catch().
// With async/await you use try/catch — exactly like regular JavaScript error handling.

async function testAPI() {
    try {
        let result = await Promise.reject("503 Service Unavailable");
        console.log('Result', result);
    } catch (error) {
        console.log('Error', error);
    } finally {
        console.log("Clean up!!");
    }
}

testAPI();

function step1() {
    console.log("1");
}

function step2() {
    console.log("2");
}

step1();
step2();
