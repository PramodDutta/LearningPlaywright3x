let fruit = [];
let browsers = ["chrome", "firefox", "webkit"];
console.log(browsers[0]);
console.log(browsers.at(-1));
console.log(browsers.length);
console.log(fruit.length);

// For the Negative indexedDB, use the at
console.log(browsers[-1]); // undefined
console.log(browsers.at(0));