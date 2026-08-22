// async function sayHello() {
//     return "Hello, QA!";
// }
// sayHello().then(function (msg) {
//     console.log(msg);
// });


/// ---

// async function getStatus() {
//     let status = await Promise.resolve(200);
//     console.log("Status code:", status);
// }
// getStatus();




// async function testFlow() {
//     let step1 = await Promise.resolve("Opened browser");
//     console.log(step1);

//     let step2 = await Promise.resolve("Clicked login");
//     console.log(step2);

//     let step3 = await Promise.resolve("Verified dashboard");
//     console.log(step3);
// }

// testFlow();





// async function riskyTest() {
//     try {
//         let data = await Promise.reject("Element not found");
//         console.log(data);
//     } catch (err) {
//         console.log("Test failed:", err);
//     }
// }

// riskyTest();


// async function apiTest() {
//     try {
//         let response = await Promise.resolve({ status: 201, body: "Created" });
//         console.log("Status:", response.status);
//         console.log("Body:", response.body);
//     } catch (err) {
//         console.log("Error:", err);
//     } finally {
//         console.log("Test complete");
//     }
// }

// apiTest();

console.log("A");
async function test() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}
test();
console.log("D");
