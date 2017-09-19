$(document).ready(function() {
    //No clique do botão com id enviar, executa a função
    $("#enviar").click(function() {
        //Busca o valor digitado pelo usuário no input com id cep
        var cep = $("#cep").val();
        //Requisição AJAX
        $.ajax({
            url: 'https://viacep.com.br/ws/' + cep + '/json/',
            crossDomain: true, //Domínio diferente do servidor
            contentType: "application/json", //Tipo de dados retornado
            success: function(result) { //Resultado é um objeto json, na variável result
                console.log(result); //Imprime result pra ver os campos do objeto json
                //Exibe a cidade no elemento com id resultado
                $('#resultado').html('Cidade: ' + result.localidade);
            }
        });
    });
});