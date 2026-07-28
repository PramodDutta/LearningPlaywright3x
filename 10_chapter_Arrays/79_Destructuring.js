let [first, second, third] = [10, 20, 30];

console.log(first);
console.log(second);
console.log(third);

// Rest pattern (...) — collects everything left over into a NEW array.
// Note: cannot reuse first/second/third here, `let` cannot be redeclared
// in the same scope (SyntaxError: Identifier has already been declared).
let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);    // 10
console.log(b);    // 20
console.log(rest); // [30, 40, 50]

// Default values — used only when the slot is undefined
let [x = 1, y = 2, z = 99] = [10, 20];
console.log(x, y, z); // 10 20 99

// Skip elements with a hole, and swap without a temp variable
let [, , thirdOnly] = [10, 20, 30];
console.log(thirdOnly); // 30

let p = 1, q = 2;
[p, q] = [q, p];
console.log(p, q); // 2 1