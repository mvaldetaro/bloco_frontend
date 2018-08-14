class ContaController {
  constructor($http) {
    this.name = 'conta';
    $http.get('/api/test')
      .then( (response) => this.testData = response.data );
  }
}

ContaController.$inject = ['$http'];

export default ContaController;
