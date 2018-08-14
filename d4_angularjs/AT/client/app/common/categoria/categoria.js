import angular from 'angular';
import categoriaListModule from './list/categoria-list';
import categoriaEditModule from './edit/categoria-edit';
import categoriaDetailModule from './detail/categoria-detail';

let categoriaModule = angular.module('categoriaModule', [
  categoriaListModule,
  categoriaEditModule,
  categoriaDetailModule
])

.name;

export default categoriaModule;
