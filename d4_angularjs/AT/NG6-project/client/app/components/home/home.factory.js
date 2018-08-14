class Noticias {
  constructor() {
  }
}

function NoticiasFactory($resource){
  return $resource('/api/noticias/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
}

NoticiasFactory.$inject = ['$resource', '$log'];
export default NoticiasFactory;
