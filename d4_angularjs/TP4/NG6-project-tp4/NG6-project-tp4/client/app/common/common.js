import './common.scss'; //css comum a todas as views
import angular from 'angular';
import navbarModule from './navbar/navbar';
import footerModule from './footer/footer';
import contactsViewerModule from './contacts-viewer/contacts-viewer';
import contactEditorModule from './contact-editor/contact-editor';
import contactDetailModule from './contact-detail/contact-detail';
import colecaoModule from './colecao/colecao';

let commonModule = angular.module('app.common', [
  navbarModule,
  footerModule,
  contactsViewerModule,
  contactEditorModule,
  contactDetailModule,
  colecaoModule
])

.name;

export default commonModule;
