class CategoriaService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
    this.obj = {};
  }

  getCategorias(apiurl) {
    return this.$q( (resolve, reject) => { //retorna uma promessa para a controladora solicitante
      this.$http.get(apiurl)
      .then( (response) => {
        this.categorias = response.data
        resolve(this.categorias);
      });
    });
  };

  addObj(newObj){
    this.obj = newObj;
  };

  getObj(){
    return this.obj;
  };

}

CategoriaService.$inject = ['$http','$q'];
export default CategoriaService;
