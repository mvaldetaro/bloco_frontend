import template from './item-editar.html';

let itemEditarComponent = {
  bindings: {
    item: '<',
    config: '< configuracaoColecao',
    editing: '<',
    erro: '@',
    novoItem: '&',
    modificarItem: '&'
  },
  template
};

export default itemEditarComponent;
