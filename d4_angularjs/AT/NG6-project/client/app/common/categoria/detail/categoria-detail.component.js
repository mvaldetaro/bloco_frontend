import template from './categoria-detail.html';

let categoriaDetailComponent = {
  bindings: {
    item: '< item',
    config: '< configuracaoInit',
    deletarItem: '&'
  },
  template
};

export default categoriaDetailComponent;
