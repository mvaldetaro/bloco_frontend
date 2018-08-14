class ContatosController {
  constructor(ContatosService, $state) {
    this.titulo = 'Contatos';
    this.ContatosService = ContatosService;
    this.$state = $state;
    ContatosService.getContatos()
      .then(contatos => this.contatos = contatos);
  }

  $onInit(){
    this.editing = false;
    this.configuracaoColecao = {
      nomeDaColecao: 'Contatos',
      nomeDoItemDaColecao: 'Contato',
      propriedadesDosItens: ['id','nome','fone'],
      propriedadePrincipal: 'nome',
      propriedadeSecundaria: 'fone'
    }
  }

  criarNovoContato() {
    delete this.contatoSelecionado;
    delete this.erro;
    this.editing = false;
    this.$state.go('Contatos.editar');
  }

  novoContato(contato) {
    if (contato) {
      this.erro = 'Criando contato';
      this.ContatosService.createContato(contato)
        .then((contato)=>{
          this.contatos.push(contato);
          this.erro = 'Contato criado com sucesso!';
        });
    } else {
      this.erro = 'Nome e telefone não podem estar vazios!';
    }
  }

  resetarContatos() {
    this.ContatosService.deleteContatos()
      .then((contatos)=>{
        this.contatos = contatos;
        this.$state.go('Contatos');
      });
  }

  deletarContato(){
    this.ContatosService.deleteContato(this.contatoSelecionado.id)
      .then((contatos)=>{
        this.editing = false;
        delete this.contatoSelecionado;
        this.contatos = contatos;
        this.$state.go('Contatos');
        return this.contatos;
      });
  }

  onContatoClicked(contato){
    this.contatoSelecionado = angular.copy(contato);
    this.editing = true;
    this.$state.go('Contatos.detalhar');
  }

  modificarContato(){
    this.ContatosService.modifyContatos(this.contatoSelecionado)
      .then(()=>{
        this.erro = 'Contato alterado!';
        this.editing = false;
        delete this.contatoSelecionado;
        this.$state.go('Contatos');
      });
  }
}

ContatosController.$inject = ['ContatosService','$state'];
export default ContatosController;
