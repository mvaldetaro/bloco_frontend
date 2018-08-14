class LoginController {
  constructor($http, $resource, $log, LoginFactory, UsuariosService, $state) {
    self = this;
    this.alertType, this.msg;
    this.nome = 'Login';

    var itens = LoginFactory.query(function() {
      $log.log(itens);
      return itens;
    });

    this.users = itens;
    this.autenticado = false;
    this.$log = $log;
    this.$http = $http;
    this.$state = $state
    this.LoginFactory = LoginFactory;
  }

  validator($event) {
    let username = login.value;
    let password = senha.value;

    this.$http.post('/api/login', { login: username, senha: password })
      .then(function successCallback(response) {
        console.log(response);
        self.msg = "Autenticado com sucesso.";
        self.alertType = 'success';
        self.$state.go('Conta');
      }, function errorCallback(response) {
        console.log(response.status);
        self.msg = "Usuário inválido";
        self.alertType = 'warning';
    });
  }
}

LoginController.$inject = ['$http', '$resource', '$log', 'LoginFactory', 'UsuariosService', '$state'];

export default LoginController;
