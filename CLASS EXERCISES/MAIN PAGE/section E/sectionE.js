// ...existing code...
let user = ""; // Try "", null, undefined, 0, false, or a name like "Tyler"
let displayName = user || "Guest User";
console.log("Welcome, " + displayName);

// Example tests:
user = "Tyler";
displayName = user || "Guest User";
console.log("Welcome, " + displayName);

user = "";
displayName = user || "Guest User";
console.log("Welcome, " + displayName);
// ...existing code...