var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".grid");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn"); //when using id of easyBtn
// var hardBtn = document.querySelector("#hardBtn"); //when using id of hardBtn
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  colors = randomColorGenerator(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function() {
  reset();
});

//change to forEach
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random(colors.length));
  return colors[random];
}

function randomColorGenerator(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//if using id,

// hardBtn.addEventListener("click", function() {
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = randomColorGenerator(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
//   messageDisplay.textContent = "";
// });

// easyBtn.addEventListener("click", function() {
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = randomColorGenerator(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       //line 25 if at color[0] there is a random color code
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
//   messageDisplay.textContent = "";
// });

// colorDisplay.textContent = pickedColor;
