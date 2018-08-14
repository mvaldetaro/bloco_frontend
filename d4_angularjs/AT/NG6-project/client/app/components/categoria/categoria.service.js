class CategoriaService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
    this.apiUrl = '/api/categories';
  }

  getCategorias() {
    return this.$q( (resolve, reject) => { //retorna uma promessa para a controladora solicitante
      if (this.categorias) //verifica se a variável foi criada e a retorna
        resolve(this.categorias);
      else { //caso não tenha sido, busca os dados
        this.$http.get(this.apiUrl)
          .then( (response) => {
            this.categorias = response.data
            resolve(this.categorias);
          });
      }
    });
  }

  createCategoria(categoria) {
    return this.$http.post(this.apiUrl, categoria)
    .then( (response)=>{
      categoria.id = response.data;
      return categoria;
    });
  }

  deleteCategorias(){
    return this.$http.delete(this.apiUrl)
    .then( (response)=>{
      this.categorias = response.data;
      return this.categorias;
    });
  }

  deleteCategoria(id){
    return this.$http.delete(`${this.apiUrl}/${id}`)
    .then( (response)=> {
      let i = this.acharIndexItemPorId(id);
      if(i > -1)
        this.categorias.splice(i, 1);
      return this.categorias;
    });
  }

  modifyCategorias(categoria) {
    return this.$http.put(`${this.apiUrl}/${categoria.id}`, categoria)
    .then( (response)=>{
      let i = this.acharIndexItemPorId(categoria.id);
      if(i > -1)
        this.categorias[i] = categoria;
      return categoria;
    });
  }

  acharIndexItemPorId(valor){
    try {
      for(let i=0; i<this.categorias.length; i++) {
        if(this.categorias[i]['id'] == valor){
          return i;
        }
      }
    } catch (e) {
      return -1;
    }
    return -1;
  }
}

CategoriaService.$inject = ['$http','$q'];
export default CategoriaService;
