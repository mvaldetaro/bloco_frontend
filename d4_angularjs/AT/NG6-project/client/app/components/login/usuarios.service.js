class UsuariosService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
    this.apiUrl = '/api/usuarios';
  }

  getUsuarios() {
    return this.$q( (resolve, reject) => { //retorna uma promessa para a controladora solicitante
      if (this.usuarios) //verifica se a variável foi criada e a retorna
        resolve(this.usuarios);
      else { //caso não tenha sido, busca os dados
        this.$http.get(this.apiUrl)
          .then( (response) => {
            this.usuarios = response.data
            resolve(this.usuarios);
          });
      }
    });
  }

  createUsuario(usuario) {
    return this.$http.post(this.apiUrl, usuario)
    .then( (response)=>{
      usuario.id = response.data;
      return usuario;
    });
  }

  deleteUsuarios(){
    return this.$http.delete(this.apiUrl)
    .then( (response)=>{
      this.usuarios = response.data;
      return this.usuarios;
    });
  }

  deleteUsuario(id){
    return this.$http.delete(`${this.apiUrl}/${id}`)
    .then( (response)=> {
      let i = this.acharIndexItemPorId(id);
      if(i > -1)
        this.usuarios.splice(i, 1);
      return this.usuarios;
    });
  }

  modifyUsuario(usuario) {
    return this.$http.put(`${this.apiUrl}/${usuario.id}`, usuario)
    .then( (response)=>{
      let i = this.acharIndexItemPorId(usuario.id);
      if(i > -1)
        this.usuarios[i] = usuario;
      return usuario;
    });
  }

  acharIndexItemPorId(valor){
    try {
      for(let i=0; i<this.usuarios.length; i++) {
        if(this.usuarios[i]['id'] == valor){
          return i;
        }
      }
    } catch (e) {
      return -1;
    }
    return -1;
  }
}

UsuariosService.$inject = ['$http','$q'];
export default UsuariosService;
