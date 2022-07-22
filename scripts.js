//variables for calc setup
const display = document.querySelector('.display'); 
const row1 = document.querySelector('.row-1');
const row2 = document.querySelector('.row-2');
const row3 = document.querySelector('.row-3');
const row4 = document.querySelector('.row-4'); 
const arr = [row1, row2, row3, row4]; 
const displayValue = 0; 
let num = -1; 

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < 3; j++) {
    num += 1; 
    const btn = document.createElement('button'); 
    btn.style.flex = '1'; 
    btn.style.margin = '3px'; 
    btn.style.backgroundColor = 'gray'; 
    btn.style.borderRadius = '5px'; 
    if (num < 10) {
      btn.textContent = num; 
    } else if (num === 10) {
      btn.textContent = '.'; 
    } else if (num === 11) {
      btn.textContent = '='; 
    }
    arr[i].appendChild(btn); 
  }
}

display.textContent = displayValue; 