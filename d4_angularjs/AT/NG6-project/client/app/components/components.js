import angular from 'angular';
import homeModule from './home/home';
import loginModule from './login/login';
import contaModule from './conta/conta';
import lancamentoModule from './lancamento/lancamento';
import categoriaModule from './categoria/categoria';
//import usuariosModule from './usuarios/usuarios';

let componentModule = angular.module('app.components', [
  homeModule,
  loginModule,
  contaModule,
  lancamentoModule,
  categoriaModule,
  //usuariosModule
])

.name;

export default componentModule;
