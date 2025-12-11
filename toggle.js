document.getElementById("toggleAnswers").addEventListener("click", function () {
  const answers = document.querySelectorAll(".answer");
  answers.forEach((answer) => {
    answer.style.display = answer.style.display === "none" ? "block" : "none";
  });
});
