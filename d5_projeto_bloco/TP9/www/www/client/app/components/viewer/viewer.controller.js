class ViewerController {
  constructor(CategoriaService, $state, $log, NgMap) {
    console.log('iniciando');
    this.$log = $log;
    this.$state = $state;
    this.obj = CategoriaService.getObj();
    this.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBqMtuWTjyE5fRQx9h9_G45aiur_GqJ3JE';

    //config map
    this.lat = this.obj.geoResult.point.lat;
    this.lng = this.obj.geoResult.point.lng;


    $log.log(this.obj.geoResult.point.lat);
    $log.log(this.obj.geoResult.point.lng);

    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
  }

  $onInit() {
    this.config = {};
  }

}

ViewerController.$inject = ['CategoriaService', '$state', '$log', 'NgMap'];
export default ViewerController;
