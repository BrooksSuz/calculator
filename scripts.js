//variables for calc setup
const display = document.querySelector('.display'); 
const row1 = document.querySelector('.row-1');
const row2 = document.querySelector('.row-2');
const row3 = document.querySelector('.row-3');
const row4 = document.querySelector('.row-4'); 
const arr = [display, row1, row2, row3, row4]; 
const displayValue = 0; 

for (let i = 1; i < arr.length; i++) {
  for (let j = 0; j < 5; j++) {
    const btn = document.createElement('button'); 
    btn.style.flex = '1'; 
    btn.style.margin = '3px'; 
    btn.style.backgroundColor = 'gray'; 
    arr[i].appendChild(btn); 
  }
}

display.textContent = displayValue; 