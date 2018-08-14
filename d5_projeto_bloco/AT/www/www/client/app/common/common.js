import './common.scss'; //css comum a todas as views
import angular from 'angular';
import navbarModule from './navbar/navbar';
import footerModule from './footer/footer';
import searchModule from './searchform/searchform';
import menuModule from './menu/menu';

let commonModule = angular.module('app.common', [

  navbarModule,
  footerModule,
  searchModule,
  menuModule
])

.name;

export default commonModule;
