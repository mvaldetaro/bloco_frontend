class CategoriasController {
  constructor(CategoriasService, $state, $log) {
    this.titulo = 'Categorias';
    this.CategoriasService = CategoriasService;
    this.$state = $state;
    this.$logger = $log;
    CategoriasService.getCategorias()
      .then(categorias => this.categorias = categorias);
  }

  $onInit(){
    this.editing = false;
    this.configuracaoInit = {
      nome: 'Categorias',
      nomeDoItemDaColecao: 'Categoria',
      propriedades: ['id','nome','descricao'],
      propNome: 'nome',
    }
  }

  criarNovoCategoria() {
    delete this.categoriaSelecionado;
    delete this.erro;
    this.editing = false;
    this.$state.go('Categorias.editar');
  }

  onCategoriaClicked(categoria){
    this.categoriaSelecionado = angular.copy(categoria);
    this.editing = true;
    this.$state.go('Categorias.detalhar');
  }

  novoCategoria(categoria) {
    if (categoria) {
      this.erro = 'Criando categoria';
      this.CategoriasService.createCategoria(categoria)
        .then((categoria)=>{
          this.categorias.push(categoria);
          this.erro = 'Categoria criado com sucesso!';
        });
    } else {
      this.erro = 'Nome e telefone não podem estar vazios!';
    }
  }

  resetarCategorias() {
    this.CategoriasService.deleteCategorias()
      .then((categorias)=>{
        this.categorias = categorias;
        this.$state.go('Categorias');
      });
  }

  deletarCategoria(){
    this.CategoriasService.deleteCategoria(this.categoriaSelecionado.id)
      .then((categorias)=>{
        this.editing = false;
        delete this.categoriaSelecionado;
        this.categorias = categorias;
        this.$state.go('Categorias');
        return this.categorias;
      });
  }

  modificarCategoria(){
    this.CategoriasService.modifyCategorias(this.categoriaSelecionado)
      .then(()=>{
        this.erro = 'Categoria alterado!';
        this.editing = false;
        delete this.categoriaSelecionado;
        this.$state.go('Categorias');
      });
  }

}

CategoriasController.$inject = ['CategoriasService','$state', '$log'];
export default CategoriasController;
