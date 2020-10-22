var botaoAdiciona = document.querySelector('.bto-adicionar');

botaoAdiciona.addEventListener('click', function () {
    var form = document.querySelector('.form-paciente');
    var paciente = capturaForm(form);
    var pacienteTr = criaTr(paciente);    
    var erros = validaPaciente(paciente)
    var elementoUl = document.querySelector('.erros-form');

    if (erros.length > 0) {
        exibeMensagemErro(erros);

        return;
    }

    elementoUl.innerHTML = '';

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
    ul.innerHTML = '';

    erros.forEach(erro => {
        var li = document.createElement('li');
        li.textContent = erro;
        li.classList.add('msg-erro');
        ul.appendChild(li);
    });

    return ul;
}

function validaPaciente (paciente) {
    var erros = [];

    if (paciente.nome.length <= 0) {
        erros.push('Nome inválido');
    }

    if (!validaPeso(paciente.peso)) {
        erros.push('Peso inválido');
    }

    if (!validaAltura(paciente.altura)) {
        erros.push('Altura inválida');
    }

    return erros;
}