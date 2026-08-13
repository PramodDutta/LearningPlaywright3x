
// Promise.resolve("Quick win").then(function (msg) {
//     console.log(msg);
// });

// Promise.reject("Quick loss").catch(function (msg) {
//     console.log(msg);
// });

// let t1 = Promise.resolve("Login: PASS");
// let t2 = Promise.resolve("Search: PASS");
// let t3 = Promise.resolve("Logout: PASS");

// Promise.all([t1, t2, t3]).then(function (results) {
//     console.log(results);
// });

// let t1 = Promise.resolve("PASS");
// let t2 = Promise.reject("FAIL");
// let t3 = Promise.resolve("PASS");

// Promise.all([t1, t2, t3])
//     .then(function (r) { console.log("All:", r); })
//     .catch(function (err) { console.log("Stopped:", err); });


Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results) {
    results.forEach(function (r) {
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + " → " + val);
    });
});