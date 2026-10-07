document.getElementById('Form_Login').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    var formulario = this;
    var campo1 = formulario.elements['email'].value; // Obtenha o valor do campo1

    var novaAction = "";

    // Lógica para determinar para qual página enviar com base no valor de campo1
    if (campo1 === 'condicao1') {
        novaAction = 'processa-login_assistente.php';
    } else if (campo1 === 'condicao2') {
        novaAction = 'processa-login.php';
    } else {
        // Se não atender a nenhuma condição, defina uma ação padrão ou trate como desejado
        novaAction = 'login-cadastro.php';
    }

    // Atualiza o atributo action do formulário com a novaAction
    formulario.action = novaAction;

    // Envie o formulário para a página apropriada
    formulario.submit();
});
