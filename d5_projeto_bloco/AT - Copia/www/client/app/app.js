import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import ngMap from 'ngmap';
/*import ngMaps from 'angular-google-maps';*/
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

let appModule = angular.module('app', [
    ngAnimate,
    ngAria,
    uiBootstrap,
    uiRouter,
    ngMap,
    /*ngMaps,*/
    Common,
    Components
  ])
  .config(($locationProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .config(['$sceDelegateProvider', function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://**',
      'https://**'
    ]);
  }])

  /*.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDNRhrz5kREKegVfjFPiWeNaTMEfil-hcI',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
  })*/

  .component('app', AppComponent)

  .name;

export default appModule;
