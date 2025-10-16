let width = prompt("Enter the width of the box:");
let height = prompt("Enter the height of the box:");
let length = prompt("Enter the length of the box:");

width = Number(width);
height = Number(height);
length = Number(length);

if (isNaN(width) || isNaN(height) || isNaN(length)) {
  alert("Please enter valid numbers for all dimensions!");
} else if (width <= 0 || height <= 0 || length <= 0) {
  alert("All dimensions must be positive numbers!");
} else {
  const volume = width * height * length;
  alert(`The volume of your box is: ${volume}`);
}
