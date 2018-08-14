class Categorias {
  constructor() {
  }
}

function CategoriasFactory($resource){
  return $resource('/api/categories/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
}

CategoriasFactory.$inject = ['$resource', '$log'];
export default CategoriasFactory;
