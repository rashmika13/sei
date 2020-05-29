// variable //

var output = 0;

// DOM elements //

let plusBtnEl = document.querySelector(".plus-button");
let minusBtnEl = document.querySelector(".minus-button");
let inputEl = document.querySelector("input");
let outputEl = document.querySelector(".count-display");

// Event Listener //
plusBtnEl.addEventListener("click", addIncrement);
minusBtnEl.addEventListener("click", minusIncrement);

function addIncrement() {
  var value = parseInt(inputEl.value);
  output = output + value;
  outputEl.innerHTML = output;
  if (output >= 0) {
    outputEl.style.color = "black";
  } else {
    outputEl.style.color = "red";
  }
}
function minusIncrement() {
  var value = parseInt(inputEl.value);
  output = output - value;
  outputEl.innerHTML = output;
  if (output >= 0) {
    outputEl.style.color = "black";
  } else {
    outputEl.style.color = "red";
  }
}
