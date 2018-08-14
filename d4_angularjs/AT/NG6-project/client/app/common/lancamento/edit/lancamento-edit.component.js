import template from './lancamento-edit.html';

let lancamentoEditComponent = {
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

export default lancamentoEditComponent;
