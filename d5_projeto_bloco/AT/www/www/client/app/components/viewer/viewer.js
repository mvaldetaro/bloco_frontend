import angular from 'angular';
import uiRouter from 'angular-ui-router';
import viewer from './viewer.component';

let viewerModule = angular.module('viewer', [
  uiRouter
])

.component('viewer', viewer)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
  .state('viewer', {
    url: '/v/:name',
    component: 'viewer',
  });
})

.name;

export default viewerModule;
