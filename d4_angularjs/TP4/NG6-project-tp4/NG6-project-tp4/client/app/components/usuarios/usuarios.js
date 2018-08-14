import angular from 'angular';
import uiRouter from 'angular-ui-router';
import usuariosComponent from './usuarios.component';
import usuariosService from './usuarios.service';

let usuariosModule = angular.module('usuarios', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('Usuarios', {
      url: '/usuarios',
      component: 'usuarios'
    })
    .state('Usuarios.detalhar', {
      url: '/detalhar',
      template: `
        <item-detalhar
          configuracao-colecao="$ctrl.configuracaoColecao"
          item="$ctrl.usuarioSelecionado"
          deletar-item="$ctrl.deletarUsuario($event)">
        </item-detalhar>
      `
    })
    .state('Usuarios.editar', {
      url: '/editar',
      template: `
        <item-editar
          configuracao-colecao="$ctrl.configuracaoColecao"
          item="$ctrl.usuarioSelecionado"
          editing="$ctrl.editing"
          erro="{{$ctrl.erro}}"
          novo-item="$ctrl.novoUsuario($event)"
          modificar-item="$ctrl.modificarUsuario($event)">
        </item-editar>
      `
    });
})

.service('UsuariosService', usuariosService)

.component('usuarios', usuariosComponent)

.name;

export default usuariosModule;
