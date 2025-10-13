let b = Boolean( BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);

// or

let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let b = Boolean(bi);
console.log(`${b} [${typeof b}]`);