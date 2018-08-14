import angular from 'angular';
import _categories from './categories-data';

function CategoriesMock($httpBackend, $log, storage) {
  let categories = storage.load('categories', _categories);
  let _id = storage.load('categories-index', _categories.length+1);

  $httpBackend.whenGET('/api/categories').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    return [200, categories, {}];
  });

  $httpBackend.whenPOST('/api/categories').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    let _data = JSON.parse(data);
    _data.id = _id++;
    categories.push(_data);
    storage.save('categories', categories);
    storage.save('categories-index', _id);
    return [200, categories, {}];
  });

  $httpBackend.whenDELETE(/^\/api\/categories.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    if (url === '/api/categories') {// reseta toda a coleção
      categories = angular.copy(_categories);
      _id = _categories.length+1;
      storage.load('categories-index', _id);
    } else { //deleta um item da coleção
      let id = url.substring(14);
      for(let i=0; i<categories.length; i++) {
        if(categories[i].id == id){
          categories.splice(i, 1);
          break;
        }
      }
    }
    storage.save('categories', categories);
    return [200, categories, {}];
  });

  $httpBackend.whenPUT(/^\/api\/categories.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    let _data = JSON.parse(data);
    if (url === '/api/categories') {// atualiza toda a coleção
      categories = _data;
    } else { //atualiza um item da coleção
      let id = url.substring(14);
      for(let i=0; i<categories.length; i++) {
        if(categories[i].id == id){
          categories[i].name = _data.name;
          categories[i].phone = _data.phone;
          break;
        }
      }
    }
    storage.save('categories', categories);
    return [200, categories, {}];
  });
}

CategoriesMock.$inject = ['$httpBackend','$log','StorageService'];

export default CategoriesMock;
