//var start = document.querySelector('.start');
var countMilliseconds = 0;
var countSeconds = 0;
var countMinutes = 0;
var countHours = 0;


var count;

function cronometer() {
    
    if (countMilliseconds < 99) {
        countMilliseconds++;
    } else {
        countSeconds++;
        countMilliseconds = 0;
    }

    if (countSeconds > 59) {countMinutes++; countSeconds = 0}
    if (countMinutes > 59) {countHours++; countMinutes = 0}
    
    document.querySelector('.milliseconds').innerHTML = countMilliseconds;
    document.querySelector('.seconds').innerHTML = countSeconds;
    document.querySelector('.hours').innerHTML = countHours;
    document.querySelector('.minutes').innerHTML = countMinutes;
}

function startCronometer() {
    count = setInterval(cronometer, 10);
}

function pauseCronometer() {
    var run = 0;
    createPanel(countHours, countMinutes, countSeconds, countMilliseconds);
    clearInterval(count);
}

function stopCronometer() {
    deletePanel();
    clearInterval(count);

    countMilliseconds = 0;
    countSeconds = 0;
    countMinutes = 0;
    countHours = 0;
    document.querySelector('.milliseconds').innerHTML = countMilliseconds;
    document.querySelector('.seconds').innerHTML = countSeconds;
    document.querySelector('.hours').innerHTML = countHours;
    document.querySelector('.minutes').innerHTML = countMinutes;
}

function createPanel(h, m, s, ml) {
    var section = document.querySelector('section');
    var division = document.createElement('div');
    var panel = document.createElement('span');
    panel.innerHTML = `${h} : ${m} : ${s} : ${ml}`
    
    division.classList.add('panel');
    division.appendChild(panel);
    section.appendChild(division);
    
    return section;
}

function deletePanel() {
    var panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.classList.add('invisible');
    })
}

