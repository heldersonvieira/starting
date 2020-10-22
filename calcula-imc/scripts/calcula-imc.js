var pacientes = document.querySelectorAll('.paciente');

/* PERCORRENDO OS PARANTES PARA ARMAZENAR NAS VARIÁVIES OS VALORES DOS ELEMENTOS HTML */
for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var nome = paciente.querySelector('.info-nome').textContent;
    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;
    var imcTd = paciente.querySelector('.info-imc');
    var imc = calculaImc(peso, altura);

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (pesoValido && altura) {
        imcTd.textContent = imc;
    }

    if (!pesoValido) {
        imcTd.textContent = 'Peso inválido';
        imcTd.classList.add('dados-invalidos');
    }

    if (!alturaValida) {
        imcTd.textContent = 'Altua inválida';
        imcTd.classList.add('dados-invalidos')
    }   
}

/*  FUNÇÕES */
function calculaImc (peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso (peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura (altura) {
    if (altura > 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}
