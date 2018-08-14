/**
  * Criar um componente para criação de usuário e login em aplicação(sign up/ sign in).
  * No 1o cenário, antes de estar logado, o visitante se depara com o formulário de login ou de criação de usuário.
  * Se for feito o login com sucesso, o componente deve levar ao cenário 2, se falhar ele deve alertar o usuário
  * e voltar ao início do cenário 1. Se o usuário optar por criar um usuário,
  * o componente deve criar o registro de um novo usuário e voltar para início do cenário 1.
  *
  * No cenário 2, após logado, mostrar apenas um texto de logado no componente e
  * um botão (ou link) para deslogar, retornando ao início do cenário 1.
  *
  * Deve ser possível criar múltiplos usuários e, se fechada, a página não pode perder os registros de usuários  armazenados.
 */

 (function(){
  console.log("Questao 6");

  function createInputElement(type, id, name, textLabel, parent, required) {
    var label = document.createElement("label");
    label.setAttribute('for',id);
    label.innerHTML = textLabel + '<br>';

    var input = document.createElement("input");
    input.setAttribute('type', type);
    input.setAttribute('id',id);
    input.setAttribute('name',name);
    input.required = required;

    parent.appendChild(label);
    parent.appendChild(input);
  }

  function createButton(name, type, text, parent) {
    var btn = document.createElement("button");
    btn.setAttribute('name',name);
    btn.setAttribute('type',type);
    btn.innerHTML = text;

    parent.appendChild(btn);
  }

  function breakRow(parent) {
    var br = document.createElement("br");
    parent.appendChild(br);
  }

  function removeChildNodes(parent) {
    var node = parent;
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
  }

  function createFormCadastro(parent){
    var cadastro = document.createElement("form");
    cadastro.setAttribute('id',"formCadastro");
    cadastro.setAttribute('method',"post");

    createInputElement('text','nome','nome','Nome:',cadastro, true);
    breakRow(cadastro);

    createInputElement('text','login','login','Login:',cadastro, true);
    breakRow(cadastro);

    createInputElement('password','senha','senha','Senha:',cadastro, true);
    breakRow(cadastro);

    createButton("cadastrar", "button", "Cadastrar", cadastro);
    createButton("voltar", "button", "Voltar", cadastro);

    // Insere o form no documento
    parent.appendChild(cadastro);
  }

  function createFormLogin(parent){
    var login = document.createElement("form");
    login.setAttribute('id',"formLogin");
    login.setAttribute('method',"post");

    var msg = document.createElement("p");
    msg.setAttribute('id',"msg");
    login.appendChild(msg);

    createInputElement('text','login','login','Login:',login, true);
    breakRow(login);

    createInputElement('password','senha','senha','Senha:',login, true);
    breakRow(login);

    // botao logar
    createButton("entrar", "button", "Entrar", login);
    // botao cadastrar
    createButton("gtCadastro", "button", "Cadastrar", login);
    // Insere o form no documento
    parent.appendChild(login);
  }

  function msgWelcome(parent){
    var username = sessionStorage.getItem('nome');
    var msg = document.createElement("p");
    msg.innerHTML = 'Bem vindo ' + username + '. <button id="logout" name="logout">Logout</button>';
    parent.appendChild(msg);
  }

  function storageAvailable(type) {
    try {
      var storage = window[type],
      x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch(e) {
      return false;
    }
  }
  // modelo usuario
  function User() {

    var s = Symbol();

    this.nome;
    this.login;
    this.senha;

    this.getNome = () => this.nome;
    this.setNome = (nome) => this.nome = nome;

    this.getLogin = () => this.login;
    this.setLogin = (login) => this.login = login;

    this.getSenha = () => this.senha;
    this.setSenha = (senha) => this.senha = senha;
  }
  //
  function cadatrar(newuser) {
    if (storageAvailable('localStorage')) {
      var storage = window.localStorage;
      var dbb = storage.getItem('db');
      if(dbb == null) {
        var usuarios = [];
      } else {
        var usuarios = JSON.parse(dbb);
      }

      usuarios.push(newuser);
      storage.setItem('db', JSON.stringify(usuarios));
      console.log("Cadastrado com sucesso!");
    } else {
      console.log("localStorage está indisponível nesta plataforma");
    }
  }

  function validacao(user) {
    if (storageAvailable('localStorage')) {
      var storage = window.localStorage;
    } else {
      console.log("localStorage está indisponível nesta plataforma");
    }

    var status = false;

    var dbb = storage.getItem('db');
    let lista = JSON.parse(dbb);
    console.log(lista);
    for (var i = 0; i <= lista.length-1; i++) {
      console.log(lista[i]);
      if(user.getLogin() === lista[i].login) {
        if(user.getSenha() === lista[i].senha) {
          sessionStorage.setItem('nome', lista[i].nome);
          return true;
        } else {
          var status = false;
        }
      } else {
        var status = false;
      }
    }

    return status;
  }

  function ctrlWelcome(parent) {
    var btnLogout = document.getElementsByName('logout');
     btnLogout[0].onclick = function() {
      sessionStorage.clear();
      removeChildNodes(parent);
      createFormLogin(parent);
      ctrlLogin(parent);
    }
  }

  //controle cadastro
  function ctrlCadastro(parent) {
    var cadastroForm = document.getElementById('formCadastro');
    var btnCadastrar = document.getElementsByName('cadastrar');
    var linkVoltar = document.getElementsByName('voltar');

    linkVoltar[0].onclick = function(){
      removeChildNodes(parent);
      createFormLogin(parent);
      ctrlLogin(parent);
    }

    btnCadastrar[0].onclick = function() {
      let nome = document.getElementById('nome').value;
      let login = document.getElementById('login').value;
      let senha = document.getElementById('senha').value;

      var user = new User();

      user.setNome(nome);
      user.setLogin(login);
      user.setSenha(senha);

      cadatrar(user);

      removeChildNodes(parent);
      createFormLogin(parent);
      alert('Cadastrado com sucesso!');
    }
  }

  //controle login
  function ctrlLogin(parent) {
    var loginForm = document.getElementById('formLogin');
    var btnLogin = document.getElementsByName('entrar');
    var linkCadastro = document.getElementsByName('gtCadastro');

    linkCadastro[0].onclick = function(){
      removeChildNodes(parent);
      createFormCadastro(parent);
      ctrlCadastro(parent);
    }

    btnLogin[0].onclick = function() {
      let login = document.getElementById('login');
      let senha = document.getElementById('senha');
      let erro = document.getElementById('msg');

      if (login.value == "") {
        erro.innerHTML = "Informe o login";
        login.focus();
      } else if (senha.value == "") {
        erro.innerHTML = "Informe a senha";
        senha.focus();
      } else {

        var user = new User();
        user.setLogin(login.value);
        user.setSenha(senha.value);

        if (validacao(user)) {
          removeChildNodes(parent);
          msgWelcome(parent);
          ctrlWelcome(parent);
        } else {
          console.log("Usuario não existe");
        }
      }
    }
  }

  return (function(){
    var parent = document.getElementById("q6");
    if (sessionStorage.getItem('nome')) {
      msgWelcome(parent);
      ctrlWelcome(parent);
    } else {
      createFormLogin(parent);
      ctrlLogin(parent);
    }
  })();

})();




