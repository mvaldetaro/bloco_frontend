import angular from 'angular';
import uiRouter from 'angular-ui-router';
import categoriasComponent from './categoria.component';
//import categoriasFactory from './categoria.factory';
import categoriasService from './categoria.service';

let categoriasModule = angular.module('categorias', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('Categorias', {
      url: '/categoria',
      component: 'categorias'
    })
    .state('Categorias.detalhar', {
      url: '/detail',
      template: `
        <categoria-detail
          configuracao-init="$ctrl.configuracaoInit"
          item="$ctrl.categoriaSelecionado"
          deletar-item="$ctrl.deletarCategoria($event)">
        </categoria-detail>
      `
    })
    .state('Categorias.editar', {
      url: '/edit',
      template: `
        <categoria-edit
          configuracao-init="$ctrl.configuracaoInit"
          item="$ctrl.categoriaSelecionado"
          editing="$ctrl.editing"
          erro="{{$ctrl.erro}}"
          novo-item="$ctrl.novoCategoria($event)"
          modificar-item="$ctrl.modificarCategoria($event)">
        </categoria-edit>
      `
    });
})

.service('CategoriasService', categoriasService)
//.factory('CategoriasService', categoriasService)

.component('categorias', categoriasComponent)

.name;

export default categoriasModule;
