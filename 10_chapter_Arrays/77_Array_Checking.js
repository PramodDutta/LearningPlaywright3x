// Checking Arrays

// Check if something IS an array

let result = Array.isArray([1, 2, 3]);
let result1 = Array.isArray("a");
console.log(result);
console.log(result1);

// map, filter, reduce

// every — ALL must pass
// GOTCHA: the missing ; below would make ASI glue the next line's [ ... ]
// into an index access -> TypeError. Always end these lines with ;
console.log([80, 90, 85].every(s => s >= 70)); // true
console.log([80, 60, 85].every(s => s >= 70)); // false

// some — AT LEAST ONE must pass
console.log([80, 60, 85].some(s => s < 70)); // true
console.log([80, 90, 85].some(s => s < 70)); // false