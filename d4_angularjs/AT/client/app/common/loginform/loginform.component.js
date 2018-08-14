import template from './loginform.html';
import controller from './loginform.controller';
import './loginform.scss';

let loginformComponent = {
  restrict: 'E',
  bindings: {
    onClickBtn: '& validator',
  },
  template,
  controller
};

export default loginformComponent;
