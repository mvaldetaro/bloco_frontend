import template from './item-detalhar.html';

let itemDetalharComponent = {
  bindings: {
    item: '< item',
    config: '< configuracaoColecao',
    deletarItem: '&'
  },
  template
};

export default itemDetalharComponent;
