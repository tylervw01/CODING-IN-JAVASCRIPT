function outer() {
  let name = "outer";
  let str = inner();
  return str;
}

function inner() {
  let name = "inner";
  return "Hello !";
}

console.log("before outer() call");
// debugger;
console.log(outer());
console.log("after outer() call");

// Call stack for (inner)
console.log(name); // -> inner
name = "new name";
console.log(name); // -> new name
