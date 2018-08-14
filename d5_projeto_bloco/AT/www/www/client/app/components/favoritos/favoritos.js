import angular from 'angular';
import uiRouter from 'angular-ui-router';
import favoritos from './favoritos.component';
import favoritosService from './favoritos.service';

let favoritosModule = angular.module('favoritos', [
  uiRouter
])

.service('FavoritosService', favoritosService)

.component('favoritos', favoritos)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('favoritos', {
      url: '/favoritos',
      component: 'favoritos'
    });
})



.name;

export default favoritosModule;
