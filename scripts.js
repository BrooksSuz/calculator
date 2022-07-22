//variables for calc setup
const btns = document.querySelectorAll('button'); 
const display = document.querySelector('.display'); 
let displayValue = 0; 

display.textContent = displayValue; 

btns.forEach(btn => {
  btn.addEventListener('click', function displayNumber() {
    if (typeof parseInt(btn.textContent) === 'number') {
      displayValue = btn.textContent; 
      display.textContent = displayValue; 
    }
  }); 
});