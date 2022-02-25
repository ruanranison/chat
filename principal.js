//Validação dos formulários de cadastro e login 
let click = document.querySelector('.botao');
click.addEventListener('click', formularioCadastro);

function formularioCadastro() {
    //pegando os valores do input e armazenando em uma variável 
    var nomeCompleto = document.querySelector('#nomeCompleto').value;
    var email = document.querySelector('#email').value;
    var usuario = document.querySelector('#usuario').value;
    var senha = document.querySelector('#senha').value;

    //Verificação do contéudo dos campos do input.
    if (nomeCompleto == '') {
        alert("O campo 'Nome Completo' está vazio. Insira um  valor!");
        document.getElementById('nomeCompleto').focus();
        formularioCadastro.preventDefault();
    }

    if (email == '') {
        alert("O campo 'Endereço de e-mail' está vazio. Insira um valor!");
        document.getElementById('email').focus;
        formularioCadastro.preventDefault();
    }

    if (usuario == '') {
        alert("O campo 'Nome Usuário' está vazio. Insira um valor!");
        document.getElementById('usuario').focus();
        formularioCadastro.preventDefault();
    }

    if (senha == '') {
        alert("O campo 'Senha (entre 0 e 8 carateres)' está vazio. Insira um valor!");
        document.getElementById('senha').focus;
        formularioCadastro.preventDefault();
    }

    if (document.getElementById('senha').value.length < 8 || document.getElementById('data').value.length > 8) {
        alert("Informe entre 0 à 8 caracteres para o campo 'Senha'");
        document.getElementById('senha').focus();
        formularioCadastro.preventDefault();
    }

    //Vereficando duplicação de dados no banco
    /*if(document.getElementById('usuario').value == ){
      alert("O nome de usuário informado para o sistema já exite. Informe outro, por favor!");
      document.getElementById('usuario').focus();
      formularioCadastro.preventDefault();
     }

     if(document.getElementById('senha').value == ){
      alert("A senha informada para o sistema já exite. Informe outra, por favor!");
      document.getElementById('senha').focus();
      formularioCadastro.preventDefault();
     }

     if(document.getElementById('email').value == ){
      alert("Endereço de e-mail já cadastrado. Informe outro, por favor!");
      document.getElementById('email').focus();
      formularioCadastro.preventDefault();
     }*/
    else {
        alert("Cadastro realizado com sucesso.");
    }

}
//Para enviar mensagens o usuário tem que estar cadastrado no sistema. Dessa maneira, deve ser impedido qe ele mande mensagens caso não esteja cadastrada 
/*let click = document.querySelector('.botao');
click.addEventListener('click', usuarioCadastrado);

function usuarioCadastrado() {
    if(document.getElementById('usuario').value== && document.getElementById('senha').value== ){

    }
    else {
        alert("Entre em sua conta para enviar mensagens");
        usuarioCadastrado.preventDefault();
    }
}*/