import angular from 'angular';
import lancamentoListComponent from './lancamento-list.component';

let lancamentoListModule = angular.module('lancamentoList', [

])

.component('lancamentoList', lancamentoListComponent)

.name;

export default lancamentoListModule;
