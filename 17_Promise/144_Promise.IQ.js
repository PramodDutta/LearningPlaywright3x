// let p = new Promise(function (resolve, reject) {
//     resolve(42);
// });

// p.then(function (value) {
//     console.log("Answer:", value);
// });

// let p = new Promise(function (resolve, reject) {
//     reject("Something broke");
// });

// p.catch(function (err) {
//     console.log("Caught:", err);
// });

// let p = Promise.resolve(5);

// p.then(function (val) {
//     return val * 10;
// }).then(function (val) {
//     console.log("Result:", val);
// });

// Promise.resolve(1)
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     })
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     })
//     .then(function (val) {
//         console.log(val);
//     });

// Promise.resolve("start")
//     .then(function (val) {
//         console.log(val);
//         throw new Error("Broke at step 2");
//     })
//     .then(function () {
//         console.log("This will NOT run");
//     })
//     .catch(function (err) {
//         console.log("Caught:", err.message);
//     });


Promise.reject("Test failed")
    .then(function (data) {
        console.log("Data:", data);
    })
    .catch(function (err) {
        console.log("Error:", err);
    })
    .finally(function () {
        console.log("Cleanup done");
    });