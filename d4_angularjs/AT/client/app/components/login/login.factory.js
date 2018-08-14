class Login {
  constructor() {
  }
}

function LoginFactory($resource){
  return $resource('/api/usuarios')
};

LoginFactory.$inject = ['$resource', '$log'];
export default LoginFactory;
