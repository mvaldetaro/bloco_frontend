import angular from 'angular';
import lancamentoListModule from './list/lancamento-list';
import lancamentoEditModule from './edit/lancamento-edit';
import lancamentoDetailModule from './detail/lancamento-detail';

let lancamentoModule = angular.module('lancamentoModule', [
  lancamentoListModule,
  lancamentoEditModule,
  lancamentoDetailModule
])

.name;

export default lancamentoModule;
