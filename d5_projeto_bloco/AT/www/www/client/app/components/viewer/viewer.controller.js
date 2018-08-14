class ViewerController {
  constructor(CategoriaService, FavoritosService, $state, $log, NgMap) {
    console.log('iniciando');
    this.$log = $log;
    this.$state = $state;
    this.obj = CategoriaService.getObj();
    this.FavoritosService = FavoritosService;
    this.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBqMtuWTjyE5fRQx9h9_G45aiur_GqJ3JE';

    //config map
    this.lat = this.obj.geoResult.point.lat;
    this.lng = this.obj.geoResult.point.lng;

    this.$log.log(this.obj.contactData);

    if(this.obj.contactData == undefined) {
      this.link = true;
    } else {
      this.link = false;
    }


    //$log.log(this.obj.geoResult.point.lat);
    //$log.log(this.obj.geoResult.point.lng);

    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });

    FavoritosService.getFavoritos()
      .then(favoritos => this.favoritos = favoritos);
  }

  $onInit() {
    this.config = {};
  }

  addFavoritos() {
    this.FavoritosService.createFavoritos(this.obj)
      .then(()=>{
        this.favoritos.push(this.obj);
        this.$log.log("Add com sucesso");
      });
  }

}

ViewerController.$inject = ['CategoriaService', 'FavoritosService', '$state', '$log', 'NgMap'];
export default ViewerController;
