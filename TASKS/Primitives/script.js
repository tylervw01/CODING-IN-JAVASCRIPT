const bool1 = true;
const bool2 = Boolean(false);

const num1 = 42;
const num2 = Number(3.14);

const big1 = 1234567890n;
const big2 = BigInt("98765432109876543210");

const str1 = "Hello";
const str2 = String("World");

let undef1;
const undef2 = undefined;

// PRINT VALUES AND TYPES USING STRING INTERPOLATION
console.log(`${bool1} [${typeof bool1}]`);
console.log(`${bool2} [${typeof bool2}]`);

console.log(`${num1} [${typeof num1}]`);
console.log(`${num2} [${typeof num2}]`);

console.log(`${big1} [${typeof big1}]`);
console.log(`${big2} [${typeof big2}]`);

console.log(`${str1} [${typeof str1}]`);
console.log(`${str2} [${typeof str2}]`);

console.log(`${undef1} [${typeof undef1}]`);
console.log(`${undef2} [${typeof undef2}]`);

// CHAIN OF CONVERSIONS: STRING -> NUMBER -> BIGINT -> BOOLEAN
const strVal = "1234";
const numVal = Number(strVal);
const bigVal = BigInt(numVal);
const boolVal = Boolean(bigVal);
console.log(`${boolVal} [${typeof boolVal}]`); //TRUE [BOOLEAN]

// ADD TWO VALUES OF THE SAME TYPE
console.log(`${true + false} [${typeof (true + false)}]`); // 1 [NUMBER]
console.log(`${5 + 10} [${typeof (5 + 10)}]`); // 15 [NUMBER]
console.log(`${123n + 456n} [${typeof (123n + 456n)}]`); // 579 [BIGINT]
console.log(`${"foo" + "bar"} [${typeof ("foo" + "bar")}]`); // FOOBAR [STRING]

//ADD TWO VALUES OF DIFFERENT TYPES
console.log(`${"5" + 5} [${typeof ("5" + 5)}]`); // 55 [STRING]
console.log(`${true + "true"} [${typeof (true + "true")}]`); // TRUETRUE [STRING]
console.log(`${5 + true} [${typeof (5 + true)}]`); // 6 [NUMBER]
console.log(`${123n + BigInt(1)} [${typeof (123n + BigInt(1))}]`); // 124 [BIGINT]

// MODIFY CONST STR1 = 42 + "1"; TO GET 43
const strFixed = 42 + Number("1");
console.log(strFixed); //43
