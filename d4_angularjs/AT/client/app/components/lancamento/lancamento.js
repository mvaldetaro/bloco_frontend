import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lancamentosComponent from './lancamento.component';
import lancamentosService from './lancamento.service';

let lancamentosModule = angular.module('lancamentos', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('Lancamentos', {
      url: '/lancamento',
      component: 'lancamentos'
    })
    .state('Lancamentos.detalhar', {
      url: '/detail',
      template: `
        <lancamento-detail
          configuracao-init="$ctrl.configuracaoInit"
          item="$ctrl.lancamentoSelecionado"
          deletar-item="$ctrl.deletarLancamento($event)">
        </lancamento-detail>
      `
    })
    .state('Lancamentos.editar', {
      url: '/edit',
      template: `
        <lancamento-edit
          configuracao-init="$ctrl.configuracaoInit"
          item="$ctrl.lancamentoSelecionado"
          editing="$ctrl.editing"
          erro="{{$ctrl.erro}}"
          novo-item="$ctrl.novoLancamento($event)"
          modificar-item="$ctrl.modificarLancamento($event)">
        </lancamento-edit>
      `
    });
})

.service('LancamentosService', lancamentosService)

.component('lancamentos', lancamentosComponent)

.name;

export default lancamentosModule;
