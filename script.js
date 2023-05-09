const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById('equalsBtn');
const clearButton = document.querySelector(".clear");
const topScreen = document.querySelector(".screen-last");
const bottomScreen = document.querySelector(".screen-current");

let currentOperation = '';
let lastOperation = '';


numberButtons.forEach((button) => {
    button.addEventListener('click', () => showNumbers(button.textContent));
})


  

clearButton.addEventListener('click', clearScreen);



function showNumbers(textContent) {
    if (bottomScreen.textContent == '0'){
        bottomScreen.innerHTML = textContent;
    }else{
        bottomScreen.innerHTML += textContent;
    }
    
}


function clearScreen() {
    topScreen.textContent = "0";
    bottomScreen.textContent = "0";
    console.log("works");
} 
