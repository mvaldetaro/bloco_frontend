import angular from 'angular';
import uiRouter from 'angular-ui-router';
import home from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])

.component('home', home)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.name;

export default homeModule;
