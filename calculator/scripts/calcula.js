var button = document.querySelector('#button-calc');
var operators = document.querySelectorAll('.operator');

button.addEventListener('click', function(event) {
    event.preventDefault();
    var firstNumber = parseFloat(document.querySelector('#input1').value);
    var secondNumber = parseFloat(document.querySelector('#input2').value);
    var showResult = document.querySelector('.result');
    var result = calcNum(firstNumber, secondNumber, operators);
    
    //showOperator(operators);

    showResult.value = result;
});


function showOperator(operators) {
    var show = document.querySelector('.show-operator');
    operators.forEach(operator => {
        if (operator.checked == true) {
            
            if (operator.id == 'sum') {
                show.textContent = '+';
            } else if (operator.id == 'subtraction') {
                show.textContent = '-';
            } else if (operator.id == 'multiplication') {
                show.textContent = '*';
            } else if (operator.id == 'division') {
                show.textContent = '/';
            }
        }
    })
    
    return show.textContent;
}

function calcNum(num1, num2, operators) {
    var result = 0;
    operators.forEach(operator => {
        if (operator.checked == true) {
            if (operator.id == 'sum') {
                result = sum(num1, num2);
            } else if (operator.id == 'subtraction') {
                result = subtract(num1, num2);
            } else if (operator.id == 'multiplication') {
                result = multiply(num1, num2);
            } else if (operator.id == 'division') {
                result = divide(num1, num2);
            }
        }
    });

    return result;
}



function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

