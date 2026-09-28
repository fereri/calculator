let numbers = "";
let symbols = ["+", "-", "/", "*"]
let operator;
let total;
let num1;
let num2;

let display = document.querySelector(".display");
display.textContent = total;
console.log(display);

function add(a, b) {
    return +a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (a == "0" || b == "0") {
        alert("This is division by 0, pls try again");
        return "";
    }
    return a / b;
}

function seperateExpression(numbers) {
    for (let symbol of symbols) {
        if (numbers.includes(symbol)) {
            let split = numbers.split(symbol);
            num1 = split[0];
            num2 = split[1];
            operator = symbol;
            if (num1 === undefined || num2 == undefined) {
                alert("Incorrect number format")
                return "";
            }
            console.log(num1, num2, operator);

            //operates based on variable held in operator
            switch (operator) {
                case "+":
                    return add(+num1,+num2);
                case "-":
                    return subtract(num1,num2);
                case "*":
                    return multiply(num1,num2);
                case "/":
                    return divide(num1,num2);
            }
            break;
        } else {
            continue;
        }
    }
}

// this allows buttons to be pressed and checks for "="
let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let clicked = e.target.textContent;
        numbers = numbers + clicked;

        //when = is clicked, evalueate the answers
        if (clicked === "=") {
            let replaced = numbers.replace("=", "")
            numbers = replaced;
            console.log(replaced);
            console.log(seperateExpression(numbers))
            numbers = seperateExpression(numbers);
        } else if (clicked === "c") {
            numbers = "";
        }
        Math.round(numbers);
        display.textContent = numbers;
        total = display.textContent;
        console.log(total);
    })
})