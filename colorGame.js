var colors = [
  "RGB(255, 255, 0)",
  "RGB(0, 255, 0)",
  "RGB(0, 255, 255)",
  "RGB(0, 0, 255)",
  "RGB(255, 0, 255)",
  "RGB(255, 0, 0)"
];

var squares = document.querySelectorAll(".grid");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      alert("Correct!");
    } else {
      this.style.backgroundColor = "#232323";
    }
  });
}
