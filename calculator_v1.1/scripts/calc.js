var display = document.calculator.displayNumber;
var number1 = 0;
var number2 = 0;
var pendingOpe = true;

function clearCalc() {
    display.value = '';
    number1 = 0; 
    number2 = 0;
    pendingOpe = true;
}

function calcResult(operator) {
    var result = document.calculator.displayResult;
    if (operator = '+') {
        result.value = parseFloat(number1) + parseFloat(number2);
    } else if (operator = '-') {
        result.value = parseFloat(number1) - parseFloat(number2);
    } else if (operator = '/') {
        result.value = parseFloat(number1) / parseFloat(number2);
    } else if (operator = '*') {
        result.value = parseFloat(number1) * parseFloat(number2);
    } else {
        result.value = 'Operação inválida'
    }
}

function receivesNumber(num) {
    if (pendingOpe) {
        display.value += num; 
        number1 = display.value;   
    } else {
        display.value += num;
        number2 = display.value;
    }
    console.log(number1, number2);
}

function receivesOperator(ope) {
    display.value = '';
    pendingOpe = false;
}
