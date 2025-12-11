function runModule2() {
  console.clear();
  let name = "Tyler";
  const age = 25;
  var mood = "excited";

  console.log(typeof name); // "string"
  console.log(typeof age); // "number"

  let score = "42";
  let numericScore = Number(score);
  console.log("Converted Score:", numericScore);

  console.log(Boolean("")); // false
  console.log(Boolean("hello")); // true

  // Comments don't show in console, but they help explain code
}
