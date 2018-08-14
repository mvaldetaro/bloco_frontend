class FavoritosController {
  constructor(FavoritosService, $state, $stateParams, $log) {
    console.log('favoritos');
    this.apiUrl = '/api/favoritos';
    this.$log = $log;
    this.$state = $state;

    FavoritosService.getFavoritos(this.apiUrl)
      .then(favoritos => this.favoritos = favoritos);
  }

  deletarFavoritos(){
    this.FavoritosService.deleteFavorito(this.favoritoSelecionado.id)
      .then((favoritos)=>{
        delete this.favoritoSelecionado;
        this.favoritos = favoritos;
        this.$state.go('Favoritos');
        return this.favoritos;
      });
  }

}
FavoritosController.$inject = ['FavoritosService', '$state', '$stateParams', '$log'];
export default FavoritosController;
