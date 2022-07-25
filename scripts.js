//variables for calc setup
const btns = document.querySelectorAll('button'); 
const display = document.querySelector('.display'); 
const nums = /[0-9]/; 
const mdas = /x|\/|\+|\-/;
let displayValue = 0; 

display.textContent = displayValue; 

btns.forEach(btn => {
  btn.addEventListener('click', function displayNumber(e) {
    if (e.target.textContent.match(nums)) {
      displayValue = btn.textContent; 
      display.textContent = displayValue;
    }
  }); 
});