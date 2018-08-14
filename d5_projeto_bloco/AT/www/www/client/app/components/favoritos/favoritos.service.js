class FavoritosService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
    this.apiUrl = '/api/favoritos';
  }

  getFavoritos() {
    return this.$q( (resolve, reject) => { //retorna uma promessa para a controladora solicitante
      if (this.favoritos) //verifica se a variável foi criada e a retorna
        resolve(this.favoritos);
      else { //caso não tenha sido, busca os dados
        this.$http.get(this.apiUrl)
          .then( (response) => {
            this.favoritos = response.data
            resolve(this.favoritos);
          });
      }
    });
  }

  createFavoritos(favorito) {
    return this.$http.post(this.apiUrl, favorito)
    .then( (response)=>{
      favorito.id = response.data;
      return favorito;
    });
  }

  deleteFavorito(){
    return this.$http.delete(this.apiUrl)
    .then( (response)=>{
      this.favoritos = response.data;
      return this.favoritos;
    });
  }

}

FavoritosService.$inject = ['$http','$q'];
export default FavoritosService;
