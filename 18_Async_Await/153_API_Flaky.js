// Retry Pattern with Async/Await - REAL QA
// One simulated API succeeds after two failures; another exhausts its retries.

function createFlakyAPI(successAttempt) {
    let attempt = 0;

    return function () {
        attempt++;
        if (attempt < successAttempt) {
            return Promise.reject("Attempt " + attempt + ": failed");
        }
        return Promise.resolve("Attempt " + attempt + ": success!");
    };
}

async function retryTesting(operation, maxRetries) {
    for (let i = 1; i <= maxRetries; i++) {
        try {
            let result = await operation();
            console.log('PASS:', result);
            return result;
        } catch (error) {
            console.log('FAIL:', error);
            if (i === maxRetries) {
                throw new Error("Test failed after " + maxRetries + " attempts");
            }
        }
    }
}

async function runRetryExamples() {
    console.log("Example 1: succeeds within the retry limit");
    await retryTesting(createFlakyAPI(3), 5);

    console.log("Example 2: exhausts the retry limit");
    try {
        await retryTesting(createFlakyAPI(4), 2);
    } catch (error) {
        console.log(error.message);
    }
}

runRetryExamples();
