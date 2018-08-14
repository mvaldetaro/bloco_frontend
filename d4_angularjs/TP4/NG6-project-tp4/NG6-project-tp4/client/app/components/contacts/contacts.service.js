class ContatosService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
    this.apiUrl = '/api/contatos';
  }

  getContatos() {
    return this.$q( (resolve, reject) => { //retorna uma promessa para a controladora solicitante
      if (this.contatos) //verifica se a variável foi criada e a retorna
        resolve(this.contatos);
      else { //caso não tenha sido, busca os dados
        this.$http.get(this.apiUrl)
          .then( (response) => {
            this.contatos = response.data
            resolve(this.contatos);
          });
      }
    });
  }

  createContato(contato) {
    return this.$http.post(this.apiUrl, contato)
    .then( (response)=>{
      contato.id = response.data;
      return contato;
    });
  }

  deleteContatos(){
    return this.$http.delete(this.apiUrl)
    .then( (response)=>{
      this.contatos = response.data;
      return this.contatos;
    });
  }

  deleteContato(id){
    return this.$http.delete(`${this.apiUrl}/${id}`)
    .then( (response)=> {
      let i = this.acharIndexItemPorId(id);
      if(i > -1)
        this.contatos.splice(i, 1);
      return this.contatos;
    });
  }

  modifyContatos(contato) {
    return this.$http.put(`${this.apiUrl}/${contato.id}`, contato)
    .then( (response)=>{
      let i = this.acharIndexItemPorId(contato.id);
      if(i > -1)
        this.contatos[i] = contato;
      return contato;
    });
  }

  acharIndexItemPorId(valor){
    try {
      for(let i=0; i<this.contatos.length; i++) {
        if(this.contatos[i]['id'] == valor){
          return i;
        }
      }
    } catch (e) {
      return -1;
    }
    return -1;
  }
}

ContatosService.$inject = ['$http','$q'];
export default ContatosService;
