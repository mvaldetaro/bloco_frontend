class LancamentoController {
  constructor(LancamentosService, $state) {
    this.titulo = 'Lançamentos';
    this.LancamentosService = LancamentosService;
    this.$state = $state;
    LancamentosService.getLancamentos()
      .then(lancamentos => this.lancamentos = lancamentos);
  }

  $onInit(){
    this.editing = false;
    this.configuracaoInit = {
      nome: 'Lançamentos',
      nomeDoItemDaColecao: 'Lançamento',
      propriedades: ['id','nome','descricao','valor','receita','categoria','data','repeticoes','repetitividade'],
      propNome: 'nome',
      propCategoria: 'nome',
      propValor: 'valor'
    }
  }

  criarNovoLancamento() {
    delete this.lancamentoSelecionado;
    delete this.erro;
    this.editing = false;
    this.$state.go('Lancamentos.editar');
  }

  novoLancamento(lancamento) {
    if (lancamento) {
      this.erro = 'Criando lancamento';
      this.LancamentosService.createLancamento(lancamento)
        .then((lancamento)=>{
          this.lancamentos.push(lancamento);
          this.erro = 'Lancamento criado com sucesso!';
        });
    } else {
      this.erro = 'Nome e telefone não podem estar vazios!';
    }
  }

  resetarLancamentos() {
    this.LancamentosService.deleteLancamentos()
      .then((lancamentos)=>{
        this.lancamentos = lancamentos;
        this.$state.go('Lancamentos');
      });
  }

  deletarLancamento(){
    this.LancamentosService.deleteLancamento(this.lancamentoSelecionado.id)
      .then((lancamentos)=>{
        this.editing = false;
        delete this.lancamentoSelecionado;
        this.lancamentos = lancamentos;
        this.$state.go('Lancamentos');
        return this.lancamentos;
      });
  }

  onLancamentoClicked(lancamento){
    this.lancamentoSelecionado = angular.copy(lancamento);
    this.editing = true;
    this.$state.go('Lancamentos.detalhar');
  }

  modificarLancamento(){
    this.LancamentosService.modifyLancamentos(this.lancamentoSelecionado)
      .then(()=>{
        this.erro = 'Lancamento alterado!';
        this.editing = false;
        delete this.lancamentoSelecionado;
        this.$state.go('Lancamentos');
      });
  }
}

LancamentoController.$inject = ['LancamentosService','$state'];
export default LancamentoController;
