import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contaComponent from './conta.component';
import contaService from './conta.service';

let contaModule = angular.module('conta', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('Conta', {
      url: '/conta',
      views: {
        '': {component: 'conta'},
        footer: {template: '<app-footer> Infnet </app-footer>'}
      }
    });
})

.service('ContaService', contaService)

.component('conta', contaComponent)

.name;

export default contaModule;
