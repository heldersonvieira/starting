var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function (event) {
    console.log(event.target.parentNode);
});