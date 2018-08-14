//controladora
(function() {
  angular.module('todo')
  .controller('addTarefaCtrl',['$log', function($log){
    this.titulo = "Adicionar Tarefa";
    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];
    this.tarefas = [
    { nome: 'Varrer o quarto', categoria: 'Casa', feito: false },
    { nome: 'Lavar a louça', categoria: 'Casa', feito: true },
    { nome: 'Lavar as roupas', categoria: 'Casa', feito: false },
    { nome: 'Consertar a porta', categoria: 'Casa', feito: false },
    { nome: 'Terminar o relatório', categoria: 'Trabalho', feito: false },
    { nome: 'Estudar para a próxima reunião', categoria: 'Trabalho', feito: false },
    { nome: 'Enviar email sobre o problema', categoria: 'Trabalho', feito: false },
    { nome: 'Levar pó de café', categoria: 'Trabalho', feito: true },
    { nome: 'Comprar canetas novas', categoria: 'Trabalho', feito: true },
    { nome: 'Estudar Etapa 1', categoria: 'Faculdade', feito: true },
    { nome: 'Estudar Etapa 2', categoria: 'Faculdade', feito: true },
    { nome: 'Estudar Etapa 3', categoria: 'Faculdade', feito: false },
    { nome: 'Fazer TP1', categoria: 'Faculdade', feito: false }
    ];
    this.msg = "";
    this.alertClass;

    function Tarefa(nome, categoria) {
      this.nome = nome;
      this.categoria = categoria;
      this.feito = false;
    }

    function compararObj(arr, obj) {
      let check = false;
      for (let i = 0; i < arr.length; i++) {
        if(!arr[i].feito) {
          if(obj.nome.toLowerCase() == arr[i].nome.toLowerCase() &&
           obj.categoria.toLowerCase() == arr[i].categoria.toLowerCase())
          {
            check = true;
          }
        }
      }
      return check;
    }

    this.add = function(task, cat){
      var tarefa = new Tarefa(task, cat);
      if(this.categoria == "" || this.categoria == undefined && this.tarefa == "" || this.tarefa == undefined) {
        this.msg = 'Preencha os campos';
        this.alertClass = 'alert warning';
      } else if(this.categoria == "" || this.categoria == undefined) {
        this.msg = 'Selecione uma categoria';
        this.alertClass = 'alert warning';
      } else if(this.tarefa == "" || this.tarefa == undefined) {
        this.msg = 'Preencha o nome da tarefa';
        this.alertClass = 'alert warning';
      } else {
        if(!compararObj(this.tarefas, tarefa)){
          this.tarefas.push(tarefa);
          this.msg = 'Ok! Tarefa adicionada com sucesso.';
          this.alertClass = 'alert success';
        } else {
          this.msg = 'Erro! Não foi possível adicionar a tarefa. Tarefa "' + task + '" já existe na categoria "'+ cat +'".';
          this.alertClass = 'alert error';
        };
        this.tarefa = '';
      }
    };
  }]);
})();
