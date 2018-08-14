class ContaController {
  constructor($http, $state) {
    this.name = 'Dashboard';
    $http.get('/api/test')
      .then( (response) => this.testData = response.data );
  }
}

/* IIFE para verifocar login*/
(function() {
  console.log("verificador");
}());

ContaController.$inject = ['$http', '$state'];

export default ContaController;
