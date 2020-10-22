var botaoAdiciona = document.querySelector('.bto-adicionar');

botaoAdiciona.addEventListener('click', function () {
    var form = document.querySelector('.form-paciente');
    var paciente = capturaForm(form);
    console.log(paciente);

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

}

function criaTd (classe, valor) {
    var td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = valor;

    return td;
}

