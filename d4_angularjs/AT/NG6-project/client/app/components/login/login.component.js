import template from './login.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './login.controller';
import './login.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let loginComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default loginComponent;
