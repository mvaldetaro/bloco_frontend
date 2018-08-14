import template from './lancamento-list.html';
import './lancamento-list.scss';

let lancamentoListComponent = {
  bindings: {
    itens: '<',
    config: '< configuracaoInit',
    onItemClicked: '&',
    onAddBtnClicked: '& criarNovoItem',
    resetarItens: '&'
  },
  template
};

export default lancamentoListComponent;
