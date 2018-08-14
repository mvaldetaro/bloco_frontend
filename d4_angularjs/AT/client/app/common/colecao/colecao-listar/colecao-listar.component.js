import template from './colecao-listar.html';
import './colecao-listar.scss';

let colecaoListarComponent = {
  bindings: {
    colecao: '<',
    config: '< configuracaoColecao',
    onItemClicked: '&',
    onAddBtnClicked: '& criarNovoItem',
    resetarItens: '&'
  },
  template
};

export default colecaoListarComponent;
