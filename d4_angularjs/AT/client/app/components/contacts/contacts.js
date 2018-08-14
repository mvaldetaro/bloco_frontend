import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contatosComponent from './contacts.component';
import contatosService from './contacts.service';

let contatosModule = angular.module('contatos', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('Contatos', {
      url: '/contatos',
      component: 'contatos'
    })
    .state('Contatos.detalhar', {
      url: '/detail',
      template: `
        <item-detalhar
          configuracao-colecao="$ctrl.configuracaoColecao"
          item="$ctrl.contatoSelecionado"
          deletar-item="$ctrl.deletarContato($event)">
        </item-detalhar>
      `
    })
    .state('Contatos.editar', {
      url: '/edit',
      template: `
        <item-editar
          configuracao-colecao="$ctrl.configuracaoColecao"
          item="$ctrl.contatoSelecionado"
          editing="$ctrl.editing"
          erro="{{$ctrl.erro}}"
          novo-item="$ctrl.novoContato($event)"
          modificar-item="$ctrl.modificarContato($event)">
        </item-editar>
      `
    });
})

.service('ContatosService', contatosService)

.component('contatos', contatosComponent)

.name;

export default contatosModule;
