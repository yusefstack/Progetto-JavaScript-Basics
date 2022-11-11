let changingNumber = document.querySelector(".changing-number");
let minusBtn = document.querySelector(".minus-btn");
let plusBtn = document.querySelector(".plus-btn");

minusBtn.addEventListener("click", function() {
    --changingNumber.innerHTML
});

plusBtn.addEventListener("click", function() {
    changingNumber.innerHTML++
});