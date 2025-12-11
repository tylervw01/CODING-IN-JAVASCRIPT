document.getElementById("startBtn").addEventListener("click", () => {
  alert("Welcome to Module 1: Let's dive into Variables!");
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function showConsoleMessage() {
  console.log(
    "%cWelcome, Tyler! Ready to code like a legend 💻",
    "color: lime; font-size: 16px;"
  );
}

document.getElementById("startBtn").addEventListener("click", () => {
  alert("Welcome to Module 1: Let's dive into Variables!");
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function showConsoleMessage() {
  console.log(
    "%cWelcome, Tyler! Ready to code like a legend 💻",
    "color: lime; font-size: 16px;"
  );
}

function openModal() {
  document.getElementById("quizModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("quizModal").classList.add("hidden");
}

function checkGuess(guess) {
  if (guess === "22") {
    alert("Correct! JavaScript coerces number + string to string.");
  } else {
    alert("Oops! Try again.");
  }
}

function markModuleComplete(moduleName) {
  localStorage.setItem(moduleName, "complete");
  alert(`${moduleName} marked as complete!`);
}

function checkProgress() {
  const modules = ["Variables", "Functions", "Loops", "DOM", "Events"];
  let progress = modules
    .map((mod) => {
      return `${mod}: ${
        localStorage.getItem(mod) === "complete" ? "✅" : "❌"
      }`;
    })
    .join("\\n");
  alert("Progress Tracker:\\n" + progress);
}
