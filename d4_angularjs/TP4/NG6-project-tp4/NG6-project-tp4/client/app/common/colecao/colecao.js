import angular from 'angular';
import colecaoListarModule from './colecao-listar/colecao-listar';
import itemEditarModule from './item-editar/item-editar';
import itemDetalharModule from './item-detalhar/item-detalhar';

let colecaoModule = angular.module('colecaoModule', [
  colecaoListarModule,
  itemEditarModule,
  itemDetalharModule
])

.name;

export default colecaoModule;
