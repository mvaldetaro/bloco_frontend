class ContaService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
    this.apiUrl = '/api/usuarios';
  }
}

ContaService.$inject = ['$http','$q'];
export default ContaService;
