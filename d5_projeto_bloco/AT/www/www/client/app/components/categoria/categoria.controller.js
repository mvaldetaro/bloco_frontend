class CategoriaController {
  constructor(CategoriaService, $state, $stateParams, $log, $filter) {
    console.log('iniciando');
    this.obj = {};
    this.$log = $log;
    this.$state = $state;
    this.$filter = $filter;
    this.CategoriaService = CategoriaService;
    this.servico = $stateParams.servico;
    this.apiUrl = '/api/' + this.servico;

    this.loadData = function(url){
      this.CategoriaService.getCategorias(url)
      .then(categorias => this.categorias = categorias);
    }

    this.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBqMtuWTjyE5fRQx9h9_G45aiur_GqJ3JE';
  }

  $onInit() {
    this.$log.log(this.apiUrl);
    this.config = {};
    this.loadData(this.apiUrl);
  }

  goTo(obj){
    this.obj = obj;
    this.$log.log(this.obj);
    let slug = this.$filter('slug')(this.obj.name);
    this.$log.log(slug);
    this.$state.go('viewer', {name: slug, obj: this.obj});
    this.CategoriaService.addObj(this.obj);
  }


}

CategoriaController.$inject = ['CategoriaService', '$state', '$stateParams', '$log', '$filter'];
export default CategoriaController;
