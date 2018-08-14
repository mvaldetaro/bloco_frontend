import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import homeFactory from './home.factory';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter,
  ngResource
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('Home', {
      url: '/',
      views: {
        '': {component: 'home'},
        footer: {template: '<app-footer> Rodapé customizado para o home esta aplicação </app-footer>'}
      }
    });
})

.factory('HomeFactory', homeFactory)

.component('home', homeComponent)

.name;

export default homeModule;
