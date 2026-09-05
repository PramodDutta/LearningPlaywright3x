// function getString(name: string): string {
//     return "Amit";
// }

// getString("pramod");
// // getString(123);

function getFirstResult<T>(result:T[]):T{
    return result[0]!; // ! = non null assertion operator
}

let firstNumber = getFirstResult<number>([200, 400, 500]);
let firstString= getFirstResult<string>(["Login", "Signup", "Cart"]);
let firstBoolean = getFirstResult<boolean>([true, false, true]);

console.log("First code:", firstNumber);
console.log("First test:", firstString);
console.log("First test:", firstBoolean);