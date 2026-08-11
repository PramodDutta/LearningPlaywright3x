// Primitive data types - call by value
// Primitive, number, string, boolean, null, undefined
let a = 10;
let b = a;
b = 99;
console.log(a);
console.log(b);
a = 90;
console.log(a);
console.log(b);


console.log("-----")

// Objects — the reference value is copied, so both variables point to the same object.
// Reference - object, array, function
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);
