import template from './lancamento-detail.html';

let lancamentoDetailComponent = {
  bindings: {
    item: '< item',
    config: '< configuracaoInit',
    deletarItem: '&'
  },
  template
};

export default lancamentoDetailComponent;
