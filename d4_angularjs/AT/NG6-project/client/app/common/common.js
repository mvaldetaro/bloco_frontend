import './common.scss'; //css comum a todas as views
import angular from 'angular';
import navbarModule from './navbar/navbar';
import footerModule from './footer/footer';
import lancamentoModule from './lancamento/lancamento';
import categoriaModule from './categoria/categoria';
import loginModule from './loginform/loginform';

let commonModule = angular.module('app.common', [
  navbarModule,
  footerModule,
  lancamentoModule,
  categoriaModule,
  loginModule
])

.name;

export default commonModule;
