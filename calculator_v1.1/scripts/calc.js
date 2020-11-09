var display = document.calculator.displayNumber;
var number1 = 0;
var number2 = 0;
var pendingOpe = '';
var buttons = document.querySelector('table');

buttons.addEventListener('click', function(event) {
    if (event.target.type == 'button') {
        
    }
})


// FUNÇÃO PARA MOSTRAR NO DISPLAY OS VALORES CAPTURADOS
function showValue(num) {
    var displayNumber = document.calculator.displayNumber;
   
    return displayNumber.value = displayNumber.value + value;
}


function receivesNumber(num) {

    if (display.value == '') {
        display.value = num;
    } else if (display.value != '' && display.value != 'undefined') {
        display.value += num;
    }   
}

function operation(ope) {
    var result = document.calculator.displayResult;
    if (ope == '+') {
        
        
    }
        
}
