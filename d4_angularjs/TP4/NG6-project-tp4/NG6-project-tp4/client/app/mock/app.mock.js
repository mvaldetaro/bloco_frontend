import angular from 'angular';
import angularMocks from 'angular-mocks';
import appModule from '../app';
import storageService from './storage.service';
import tokenManager from './token/token';
import testMock from './test/test';
import crudFactory from './crud/crud.factory';
import contactsMock from './contacts/contacts';
import usuariosMock from './usuarios/usuarios';

let appMockModule = angular.module('appMock', [
  appModule,
  'ngMockE2E'
])

.service('StorageService', storageService)

.service('TokenManager', tokenManager)

.factory('CrudFactory', crudFactory)

.run(testMock)
.run(contactsMock)
.run(usuariosMock)

.name;

export default appMockModule;
