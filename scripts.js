//variables for calc setup
const btns = document.querySelectorAll('button'); 
const display = document.querySelector('.display'); 
const nums = /[0-9]/; 
const mdas = /x|\/|\+|\-/;
let previousBtn; 
let arr = []; 
let currentValue = 0; 
let displayValue = 0; 
display.textContent = 0; 

btns.forEach(btn => {
  btn.addEventListener('click', function displayNumber(e) {
    if (e.target.textContent.match(nums)) {
      if (currentValue == 0) {
        display.textContent = ''; 
      }
      currentValue = btn.textContent; 
      display.textContent += currentValue;
      displayValue = display.textContent; 
    } else if (e.target.textContent.match(mdas)) {
      if (e.target.textContent === 'x') {
        multiply(); 
      } else if (e.target.textContent === '/') {
        divide(); 
      } else if (e.target.textContent === '+') {
        add(); 
      } else if (e.target.textContent === '-') {
        subtract(); 
      }
    } else if (e.target.textContent === '=') {
      if (previousBtn.textContent === 'x') {
        multiply(); 
      } else if (previousBtn.textContent === '/') {
        divide(); 
      } else if(previousBtn.textContent === '+') {
        add(); 
      } else if (previousBtn.textContent === '-') {
        subtract(); 
      }
    } else if (e.target === btns[0]) {
      arr = []; 
      currentValue = 0; 
      displayValue = 0; 
      display.textContent = 0;
    }
  }); 
});

function add() {
  arr.push(parseInt(displayValue));

  if (arr.length === 2) {
    arr = [arr.reduce((a, b) => a + b)]; 
    display.textContent = arr; 
  } 

  currentValue = 0; 
} 

function subtract() {
  arr.push(parseInt(displayValue)); 

  if (arr.length === 2) {
    arr = [arr.reduce((a, b) => a - b)]; 
    display.textContent = arr; 
  } 

  currentValue = 0; 
} 

function multiply() {
  arr.push(parseInt(displayValue)); 

  if (arr.length === 2) {
    arr = [arr.reduce((a, b) => a * b)]; 
    display.textContent = arr; 
  } 

  if (arr.join('').length > 8) {
    display.textContent = Math.round(arr); 
  }

  currentValue = 0; 
} 

function divide() {
  arr.push(parseInt(displayValue)); 

  if (arr.length === 2) {
    arr = [arr.reduce((a, b) => a / b)]; 
    display.textContent = arr; 
  } 

  if (arr.join('').length > 8) {
    display.textContent = Math.round(arr); 
  }

  currentValue = 0; 
} 