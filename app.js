/* // operations for grabbing the numbers from the
//buttons
const a = 1; const b = 2; const c = 3; const d = 4;
const e = 5; const f = 6; const g = 7; const h = 8;
const eye = 9; const j = 0;

//created a variable to appened the inputs to the screen
const screen = document.querySelector('.screen');

//operater functions
let firstArgument = 0;
let secondArgument = 0;

const add = (firstArgument, secondArgument) => {
    return firstArgument + secondArgument;
};
const subtract = (firstArgument, secondArgument) => {
	return firstArgument - secondArgument;
};
const multiply = (firstArgument, secondArgument) => {
    return firstArgument * secondArgument;
}
const divide = (firstArgument, secondArgument) => {
    return firstArgument / secondArgument;
}

let operator = '';
let result = null;

//creating the operate function
const operate = (firstArgument, secondArgument, operator) => {
    if (operator === add) {
        result = add(firstArgument, secondArgument);
        return result;
    } else if (operator === subtract) {
        result = subtract(firstArgument, secondArgument);
        return result;
    } else if (operator === multiply) {
        result = multiply(firstArgument, secondArgument);
        return result;
    } else if (operator === divide) {
        result = divide(firstArgument, secondArgument);
        return result;
    }
}
/* const arr = [];

const sum = function(arr) {  
  // Using reduce function to find the sum
  const sum = arr.reduce(function (x, y) {
      return x + y;
  }, 0);  
  return sum;
}; */
/* const firstDisplayValue = [];

function one (a) {
    const oneBtn = document.querySelector('.one');
    oneBtn.addEventListener('click', () => {
        window.location.reload;
        firstDisplayValue.push(a);
        firstDisplayValue.join(",");
        screen.textContent = firstDisplayValue;
        return firstDisplayValue;     
    });    
}
one(a);


function two (b) {
    const twoBtn = document.querySelector('.two');
    twoBtn.addEventListener('click', () => {
        screen.textContent = b;
        return b;     
    });    
}
two(b);

function three (c) {
    const threeBtn = document.querySelector('.three');
    threeBtn.addEventListener('click', () => {
        screen.textContent = c;
        return c;     
    });    
}
three(c);

function four (d) {
    const fourBtn = document.querySelector('.four');
    fourBtn.addEventListener('click', () => {
        return d;     
    });    
}
four(d);

function five (e) {
    const fiveBtn = document.querySelector('.five');
    fiveBtn.addEventListener('click', () => {
        return e;     
    });    
}
five(e);

function six (f) {
    const sixBtn = document.querySelector('.six');
    sixBtn.addEventListener('click', () => {
        return f;     
    });    
}
six(f);

function seven (g) {
    const sevenBtn = document.querySelector('.seven');
    sevenBtn.addEventListener('click', () => {
        return g;     
    });    
}
seven(g);

function eight (h) {
    const eightBtn = document.querySelector('.eight');
    eightBtn.addEventListener('click', () => {
        return h;     
    });    
}
eight(h);

function nine (eye) {
    const nineBtn = document.querySelector('.nine');
    nineBtn.addEventListener('click', () => {
        return eye;     
    });    
}
nine(eye);

function zero (j) {
    const zeroBtn = document.querySelector('.zero');
    zeroBtn.addEventListener('click', () => {
        return j;     
    });    
}
zero(j); */ 
/* let disp = '';
let x = 0;
function myFunction(x) {
    disp = disp + x;
    if(x == "clr") {
        document.getElementById(".screen").innerHTML = 0;
    } else if(disp == "") {
        document.getElementById(".screen").innerHTML = x;
    } else {
        document.getElementById(".screen").innerHTML = disp;
    }
} */

const display = document.querySelector('.display-surface');
