var botaoAdiciona = document.querySelector('.bto-adicionar');

botaoAdiciona.addEventListener('click', function () {
    var form = document.querySelector('.form-paciente');
    var paciente = capturaForm(form);
    var pacienteTr = criaTr(paciente);    
    var erros = validaPaciente(paciente)

    /*
    if (erros.length > 0) {
        exibeMensagemErro(erros);
    }
    */

    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
       
    form.reset();
});

function capturaForm (form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function criaTr (paciente) {
    var tr = document.createElement('tr');
    tr.classList.add('paciente');

    var nome = criaTd('info-nome', paciente.nome);
    var peso = criaTd('info-peso', paciente.peso);
    var altura = criaTd('info-altura', paciente.altura);
    var imc = criaTd('info-imc', paciente.imc);

    tr.appendChild(nome);
    tr.appendChild(peso);
    tr.appendChild(altura);
    tr.appendChild(imc);

    return tr;
}

function criaTd (classe, valor) {
    var td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = valor;

    return td;
}

function exibeMensagemErro (erros) {
    var ul = document.querySelector('.erros-form');
    for (var i = 0; i < erros.length; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);
    }

    return ul;
}

function validaPaciente (paciente) {
    if (paciente.nome.length <= 0) {
        console.log('Nome inválido');
    }

    if (!validaPeso(paciente.peso)) {
        console.log('Peso inválido');
    }

    if (!validaAltura(paciente.altura)) {
        console.log('Altura inválida');
    }
}