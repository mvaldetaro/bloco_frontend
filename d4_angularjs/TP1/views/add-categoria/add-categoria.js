//controladora
(function() {
  angular.module('todo')
  .controller('addCategoriaCtrl',['$log', function($log){
    this.titulo = "Adicionar Categoria";
    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];
    this.msg = "";
    this.alertClass;
    this.add = function(cat){
      let check = false;
        // Verifica se a categoria já existe
        if(this.categoria == "" || this.categoria == undefined) {
          this.msg = 'Preencha o campo';
          this.alertClass = 'alert warning';
        } else {
          for (let i = 0; i < this.categorias.length; i++) {
            if (this.categorias[i].toLowerCase() == cat.toLowerCase()) {
              check = true;
            }
          }
          // Caso não exista insere a nova caterogia
          if (!check) {
            this.categorias.push(cat);
            this.msg = 'Ok! Categoria adicionada com sucesso';
            this.alertClass = 'alert success';
          } else {
            this.msg = 'Erro! Não foi possível adicionar a categoria. Categoria "' + cat + '" já existe.';
            this.alertClass = 'alert error';
          }
          this.categoria = '';
        }
      };
    }]);
})();
