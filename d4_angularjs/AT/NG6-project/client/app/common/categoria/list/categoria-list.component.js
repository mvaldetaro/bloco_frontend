import template from './categoria-list.html';
import './categoria-list.scss';

let colecaoListarComponent = {
  bindings: {
    itens: '<',
    config: '< configuracaoInit',
    onItemClicked: '&',
    onAddBtnClicked: '& criarNovoItem',
    resetarItens: '&'
  },
  template
};

export default colecaoListarComponent;
