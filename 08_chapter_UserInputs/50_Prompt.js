const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number: "));
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}