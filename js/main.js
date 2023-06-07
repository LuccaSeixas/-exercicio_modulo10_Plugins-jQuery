$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', { placeholder: '___.___.___-__'});
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: false
            }
        },
        messages: {
            nomeCompleto: "Por favor, preencha seu nome completo.",
            email: "Por favor, preencha seu e-mail.",
            telefone: "Por favor, preencha seu telefone.",
            cpf: "Por favor, preencha seu CPF.",
            endereço: "Por favor, preencha seu endereço."
        },
        submitHandler: function(form){
            alert('Cadastro realizado com sucesso')
        }
    })
})

