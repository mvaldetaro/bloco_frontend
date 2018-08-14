//controladora
(function() {
  angular.module('todo')
  .controller('categoriaCtrl', function(){
    this.titulo = 'Categorias';
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
  });
})();

