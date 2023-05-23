let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelectorAll("#result-box");
let clearBtn = document.querySelectorAll("#clear");
let totalBtn = document.querySelectorAll("#total");

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];
// for number inputs

btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    //inner values for calculator

    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }

    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});

//function to evaluate strings below

function evaluate(fn) {
  return new Function("return " + fn)();
}

//to calculate all functions

total.addEventListener("click", () => {
  let allInputs = resultBox.innerHTML;
  resultBox.innerHTML = evaluate(allInputs);
  console.log(evaluate(allInputs));
});

//clear all inputs

clearBtn.addEventListener("click", () => {
  resultBox.innerHTML = "0";
});
