var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function (event) {
    var alvo = event.target;
    
    if (alvo.tagName == 'TD') {
        alvo.parentNode.classList.add('fade-out');
        setTimeout(function () {
            alvo.parentNode.remove();   // REMOVENDO A TAG PAI DO ALVO
        }, 1000);
    }
});
