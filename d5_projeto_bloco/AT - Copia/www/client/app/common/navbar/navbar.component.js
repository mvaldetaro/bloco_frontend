import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.scss';

let navbarComponent = {
  bindings: {
    titulo: '<'
  },
  template,
  controller
};

export default navbarComponent;
