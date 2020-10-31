var botaoBuscaPacientes = document.querySelector('.bto-buscar');

botaoBuscaPacientes.addEventListener('click', function () {
    console.log('Buscando pacientes');
    var erroBusca = document.querySelector('.msg-erro-busca');
    var requisicao = new XMLHttpRequest();
    requisicao.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
    
    requisicao.addEventListener('load', function () {
        
        if (requisicao.status == 200) {
            var resposta = this.responseText;
            var pacientesJson = JSON.parse(resposta);
            pacientesJson.forEach(paciente => {
                inserePaciente(paciente);
            })
        } else {
            erroBusca.classList.add('msg-erro');
            erroBusca.innerHTML = `ERRO: ${requisicao.status} - Não foi possível buscar pacientes`
        }
    });
 

    requisicao.send();
});