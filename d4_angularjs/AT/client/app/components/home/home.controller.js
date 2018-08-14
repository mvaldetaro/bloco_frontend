class HomeController {
  constructor($http, $q, $resource, $log, HomeFactory) {
    this.name = 'home';

    var itens = HomeFactory.query(function() {
      return itens;
    });

    this.noticias = itens;
    this.totalItems = 10;
    this.currentPage = 1;
    this.viewby = 3;
    this.itemsPerPage = this.viewby;
  }
}

HomeController.$inject = ['$http', '$q', '$resource', '$log', 'HomeFactory'];

export default HomeController;
