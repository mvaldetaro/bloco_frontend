import angular from 'angular';
import homeComponent from './home/home';
import categoriaComponent from './categoria/categoria';
import viewerComponent from './viewer/viewer';
//import testComponent from './testComponent/testComponent';

let componentModule = angular.module('app.components', [
  //testComponent
  homeComponent,
  categoriaComponent,
  viewerComponent
])

.name;

export default componentModule;
