// operations for grabbing the numbers from the
//buttons
const a = 1; const b = 2; const c = 3; const d = 4;
const e = 5; const f = 6; const g = 7; const h = 8;
const eye = 9; const j = 0;

function one (a) {
    const oneBtn = document.querySelector('.one');
    oneBtn.addEventListener('click', () => {
        return a;     
    });    
}
one(a);

function two (b) {
    const twoBtn = document.querySelector('.two');
    twoBtn.addEventListener('click', () => {
        return b;     
    });    
}
two(b);

function three (c) {
    const threeBtn = document.querySelector('.three');
    threeBtn.addEventListener('click', () => {
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
zero(j);