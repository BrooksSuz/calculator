//variables for calc setup
const btns = document.querySelectorAll('button'); 
const display = document.querySelector('.display'); 
const nums = /[0-9]/; 
const mdas = /x|\/|\+|\-/;
const arr = []; 
let currentValue; 
let displayValue;  

btns.forEach(btn => {
  btn.addEventListener('click', function displayNumber(e) {
    if (e.target.textContent.match(nums)) {
      currentValue = btn.textContent; 
      display.textContent += currentValue;
      displayValue = display.textContent; 
    } else if (e.target.textContent.match(mdas)) {
      if (e.target.textContent === '+') {
        add(); 
      }
    }
  }); 
});

function add() {
  arr.push(displayValue); 
  if (arr.length = 2) {
    arr = arr.reduce((a, b) => a + b); 
  }
} 