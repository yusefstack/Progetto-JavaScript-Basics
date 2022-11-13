/* ---- raccolta elementi ----*/
let container = document.querySelector('.container');


/* ---- creazione ed inserimento divisore del container ----*/
let internalDivDivisor = document.createElement('div');
internalDivDivisor.setAttribute("class", "divisor-2");
container.append(internalDivDivisor);


/* ---- creazione ed inserimento numero dinamico ----*/
let changingNumber = document.createElement('div');
changingNumber.textContent = "0";
changingNumber.setAttribute("class", "changing-number");
container.append(changingNumber);


/* ---- creazione ed inserimento secondo divisore del container ----*/
let internalDivDivisor2 = document.createElement('div');
internalDivDivisor2.setAttribute("class", "divisor-2");
container.append(internalDivDivisor2);


/* ---- creazione container per bottoni ----*/
let buttonContainer = document.createElement('div');
buttonContainer.setAttribute("class", "buttons");
container.append(buttonContainer);

/* ---- creazione ed inserimento bottoni dinamici----*/
let minusBtn = document.createElement('button');
let plusBtn = document.createElement('button');
minusBtn.textContent = "-";
plusBtn.textContent = "+";
minusBtn.setAttribute("class", "minus-btn");
plusBtn.setAttribute("class", "plus-btn");
buttonContainer.append(minusBtn, plusBtn);


/* ----funzionamento bottoni----*/
minusBtn.addEventListener("click", function() {
    --changingNumber.innerHTML
});

plusBtn.addEventListener("click", function() {
    changingNumber.innerHTML++
});