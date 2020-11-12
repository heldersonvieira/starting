var display = document.calculator.displayNumber;
var result = document.calculator.displayResult;
var number1 = 0;
var number2 = 0;
var pendingOpe = true;
var operator = '';


function clearCalc() {
    display.value = '';
    result.value = '';
    number1 = 0; 
    number2 = 0;
    pendingOpe = true;
}

function calcResult() {
    if (operator == '+') {
        result.value = parseFloat(number1) + parseFloat(number2);
    } else if (operator == '-') {
        result.value = parseFloat(number1) - parseFloat(number2);
    } else if (operator == '/') {
        result.value = parseFloat(number1) / parseFloat(number2);
    } else if (operator == '*') {
        result.value = parseFloat(number1) * parseFloat(number2);
    } else {
        result.value = 'Operação inválida'
    }

    console.log(number1, number2);
}

function receivesNumber(num) {
    if (pendingOpe) {
        display.value += num; 
        number1 = display.value;   
    } else {
        display.value += num;
        number2 = display.value;
    }
}

function receivesOperator(ope) {
    display.value = '';
    operator = ope; // operator recebe ope para ser usado no calculo da função calcResult
    pendingOpe = false;   
}
