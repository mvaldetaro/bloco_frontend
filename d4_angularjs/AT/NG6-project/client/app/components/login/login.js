import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import loginFactory from './login.factory';
import usuariosService from './usuarios.service';
import loginComponent from './login.component';

let loginModule = angular.module('login', [
  uiRouter,
  ngMessages
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('Login', {
      url: '/login',
      views: {
        '': {component: 'login'},
        footer: {template: '<app-footer> Infnet </app-footer>'}
      }
    });
})

.factory('LoginFactory', loginFactory)

.service('UsuariosService', usuariosService)

.component('login', loginComponent)

.name;

export default loginModule;
