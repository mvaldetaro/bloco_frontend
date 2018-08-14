class LancamentosService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
    this.apiUrl = '/api/lancamentos';
  }

  getLancamentos() {
    return this.$q( (resolve, reject) => { //retorna uma promessa para a controladora solicitante
      if (this.lancamentos) //verifica se a variável foi criada e a retorna
        resolve(this.lancamentos);
      else { //caso não tenha sido, busca os dados
        this.$http.get(this.apiUrl)
          .then( (response) => {
            this.lancamentos = response.data
            resolve(this.lancamentos);
          });
      }
    });
  }

  createLancamento(lancamento) {
    return this.$http.post(this.apiUrl, lancamento)
    .then( (response)=>{
      lancamento.id = response.data;
      return lancamento;
    });
  }

  deleteLancamentos(){
    return this.$http.delete(this.apiUrl)
    .then( (response)=>{
      this.lancamentos = response.data;
      return this.lancamentos;
    });
  }

  deleteLancamento(id){
    return this.$http.delete(`${this.apiUrl}/${id}`)
    .then( (response)=> {
      let i = this.acharIndexItemPorId(id);
      if(i > -1)
        this.lancamentos.splice(i, 1);
      return this.lancamentos;
    });
  }

  modifyLancamentos(lancamento) {
    return this.$http.put(`${this.apiUrl}/${lancamento.id}`, lancamento)
    .then( (response)=>{
      let i = this.acharIndexItemPorId(lancamento.id);
      if(i > -1)
        this.lancamentos[i] = lancamento;
      return lancamento;
    });
  }

  acharIndexItemPorId(valor){
    try {
      for(let i=0; i<this.lancamentos.length; i++) {
        if(this.lancamentos[i]['id'] == valor){
          return i;
        }
      }
    } catch (e) {
      return -1;
    }
    return -1;
  }
}

LancamentosService.$inject = ['$http','$q'];
export default LancamentosService;
