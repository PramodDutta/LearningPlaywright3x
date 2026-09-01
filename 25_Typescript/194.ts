function infiniteLoop(): never {
    while (true) { }
}
// never - function never returns (throws or infinite loop)

function throwError(message: string): never {
    throw new Error(message);
}