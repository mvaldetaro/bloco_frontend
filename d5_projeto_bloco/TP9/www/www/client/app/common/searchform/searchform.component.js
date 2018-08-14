import template from './searchform.html';
import controller from './searchform.controller';
import './searchform.scss';

let searchformComponent = {
  bindings: {
    inputsize: '<',
    btnsize: '<',
  },
  template,
  controller
};

export default searchformComponent;
