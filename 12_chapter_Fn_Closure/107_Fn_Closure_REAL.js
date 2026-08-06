const { run } = require("node:test");

function maxRetryTRacker(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} exceeded max retries (${max})`;
        }
        return `Attempt ${attempts}/${max} for ${testName}`;
    };
    return tryAgain;
}

let runTCRetry = maxRetryTRacker(3);
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));


