import template from './categoria-edit.html';

let categoriaEditComponent = {
  bindings: {
    item: '<',
    config: '< configuracaoInit',
    editing: '<',
    erro: '@',
    novoItem: '&',
    modificarItem: '&'
  },
  template
};

export default categoriaEditComponent;
