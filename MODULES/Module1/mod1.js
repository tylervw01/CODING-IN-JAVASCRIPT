function runModule1() {
  console.clear();
  console.log("Hello, World!");

  let message = "JavaScript is awesome!";
  console.log(message);

  let a = 5;
  let b = 3;
  let sum = a + b;
  console.log("Sum:", sum);

  if (sum > 5) {
    console.log("Sum is greater than 5");
  } else {
    console.log("Sum is 5 or less");
  }

  for (let i = 1; i <= 3; i++) {
    console.log("Loop iteration:", i);
  }
}

// Highlight active nav link
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (
      href === currentPath ||
      (href === "/index.html" && currentPath === "/")
    ) {
      link.classList.add("active");
    }
  });
});
