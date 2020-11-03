var button = document.querySelector('table');

button.addEventListener('click', function(event) {
    var valueCaptured = capture(event);
    displayValue(valueCaptured);
});

function capture(event) {

    return event.target.textContent;
}

function displayValue(value) {

    return document.querySelector('.show-numbers').value = value;    
}