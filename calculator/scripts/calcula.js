var button = document.querySelector('#button-calc');
var clear = document.querySelector('#button-clear');
var operators = document.querySelectorAll('.operator')

updateOperator(operators);

clear.addEventListener('click', function () {
    var form = document.querySelector('form');
    
    form.reset();
})

button.addEventListener('click', function(event) {
    var firstNumber = parseFloat(document.querySelector('#input1').value);
    var secondNumber = parseFloat(document.querySelector('#input2').value);
    var showResult = document.querySelector('.result');
    var result = calcNum(firstNumber, secondNumber, operators);
    event.preventDefault();
    showResult.value = result;
});

var show = document.querySelector('.show-operator');

function updateOperator(operators) {
    for (var i = 0; i < operators.length; i++) {
        var operator = operators[i];
            operator.addEventListener('click', function (event) {
                var idOperator = event.target.id;
                if (idOperator == 'sum') {
                    show.innerHTML = '+';
                } else if (idOperator == 'subtraction') {
                    show.innerHTML = '-';
                } else if (idOperator == 'multiplication') {
                    show.innerHTML = 'X';
                } else if (idOperator == 'division') {
                    show.innerHTML = '/';
                }
            })
    }
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

    if (typeof result == NaN) {
        result = 'Inválido';
    }

    console.log( typeof result);
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

