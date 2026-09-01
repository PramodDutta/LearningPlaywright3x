// Primitive types

let name: string = "John";
let age: number = 30;
let pi: number = 3.14;
let distance_to_moon: number = 398765434567;
//let pi: float = 3.14;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["John", "Jane"];

// Any (avoid when possible)
let anything: any = "hello";

// Unknown (safer than any)
let unknown: unknown = "hello";

let message: string = "Hello, TypeScript!";
let count: number = 42;

console.log("Message:", message);
console.log("Count:", count);
console.log("Is Active:", isActive);