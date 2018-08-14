import angular from 'angular';
import homeModule from './home/home';
import aboutModule from './about/about';
import contactsModule from './contacts/contacts';
import usuariosModule from './usuarios/usuarios';

let componentModule = angular.module('app.components', [
  homeModule,
  aboutModule,
  contactsModule,
  usuariosModule
])

.name;

export default componentModule;
