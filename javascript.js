let num1;
let operator;
let num2;

//access display of calculator
let display = document.querySelector(".display");

//access all buttons and their values with button.textContent
let buttons = document.querySelectorAll("button");

//display text in the display of the display class
let displayText = document.createElement("div");
displayText.textContent = "900"

//function to get button value
buttons.forEach(button => {
    button.addEventListener("click", (element) => {
        console.log(element.target.textContent);
    })
});
//this needs work

function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a/b
}

function operate(num1, operator,num2) {
    switch (operator) {
        case "+":
            return add(+num1,+num2);
        
        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1,num2);

        case "/":
            return divide(num1,num2);
    }
}

console.log(operate(num1,operator,num2));


//this section is all for append actions
display.appendChild(displayText);