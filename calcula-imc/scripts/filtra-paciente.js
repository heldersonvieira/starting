var filtra = document.querySelector('.filtra-paciente');

filtra.addEventListener('input', function () {
    var nomeDigitado = this.value;
    var pacientes = document.querySelectorAll('.paciente');

    pacientes.forEach(paciente => { 
        var nome = paciente.querySelector('.info-nome').textContent;
        /*  DECLARANDO UMA EXPRESSÃO REGULAR COM A FLAG "i" INDICANDO MAIÚSCULO OU MINUSCULO    */
        var expressao = new RegExp(nomeDigitado, 'i');

        if (nomeDigitado.length > 0) {
            /*  COM O '!' ESTAMOS TESTANDO SE O QUE FOI DIGITADO NÃO CONTEM EM NOME */
            if (!expressao.test(nome)) {
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }
        } else {
            paciente.classList.remove('invisivel');
        }
    });
});
