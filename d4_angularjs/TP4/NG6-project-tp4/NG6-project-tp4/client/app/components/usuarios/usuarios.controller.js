class UsuariosController {
  constructor(UsuariosService,$state) {
    this.titulo = 'Usuários';
    this.UsuariosService = UsuariosService;
    this.$state = $state;
    UsuariosService.getUsuarios()
      .then(usuarios => this.usuarios = usuarios);
  }

  $onInit(){
    this.editing = false;
    this.configuracaoColecao = {
      nomeDaColecao: 'Usuarios',
      nomeDoItemDaColecao: 'Usuario',
      propriedadesDosItens: ['id','nome','fone'],
      propriedadePrincipal: 'nome',
      propriedadeSecundaria: 'id'
    }
  }

  criarNovoUsuario() {
    delete this.usuarioSelecionado;
    delete this.erro;
    this.editing = false;
    this.$state.go('Usuarios.editar');
  }

  novoUsuario(usuario) {
    if (usuario) {
      this.erro = 'Criando contato';
      this.UsuariosService.createUsuario(usuario)
        .then((usuario)=>{
          this.usuarios.push(usuario);
          this.erro = 'Contato criado com sucesso!';
        });
    } else {
      this.erro = 'Nome e telefone não podem estar vazios!';
    }
  }

  resetarUsuarios() {
    this.UsuariosService.deleteUsuarios()
      .then((usuarios)=>{
        this.usuarios = usuarios;
        this.$state.go('Usuarios');
      });
  }

  deletarUsuario(){
    this.UsuariosService.deleteUsuario(this.usuarioSelecionado.id)
      .then((usuarios)=>{
        this.editing = false;
        delete this.usuarioSelecionado;
        this.usuarios = usuarios;
        this.$state.go('Usuarios');
        return this.usuarios;
      });
  }

  onUsuarioClicked(usuario){
    this.usuarioSelecionado = angular.copy(usuario);
    this.editing = true;
    this.$state.go('Usuarios.detalhar');
  }

  modificarUsuario(){
    this.UsuariosService.modifyUsuario(this.usuarioSelecionado)
      .then(()=>{
        this.erro = 'Contato alterado!';
        this.editing = false;
        delete this.usuarioSelecionado;
        this.$state.go('Usuarios');
      });
  }
}

UsuariosController.$inject = ['UsuariosService','$state'];

export default UsuariosController;
