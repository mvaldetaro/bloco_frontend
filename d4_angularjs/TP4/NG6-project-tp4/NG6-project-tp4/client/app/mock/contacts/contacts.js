import angular from 'angular';
import _contatos from './data';

function ContactsMock($httpBackend, $log, storage, tokenManager, crudFactory) {
  let crudObj = crudFactory.getCrudPara('contatos',_contatos);

  $httpBackend.whenGET('/api/contatos').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    // if(!headers['token'] || !tokenManager.ehValido(headers['token']))
    //   return [401,{},{}];
    let contatos = crudObj.get();
    return [200, contatos, {}];
  });

  $httpBackend.whenPOST('/api/contatos').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    // if(!headers['token'] || !tokenManager.ehValido(headers['token']))
    //   return [401,{},{}];
    let _data = JSON.parse(data);
    let id = crudObj.post(_data);
    return [200, id, {}];
  });

  $httpBackend.whenDELETE(/^\/api\/contatos.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    // if(!headers['token'] || !tokenManager.ehValido(headers['token']))
    //   return [401,{},{}];
    if (url === '/api/contatos') {// reseta toda a coleção
      let contatos = crudObj.resetData();
      return [204, contatos, {}]
    } else { //deleta um item da coleção
      let id = url.substring(14);
      crudObj.delete(id);
    }
    return [204, {}, {}];
  });

  $httpBackend.whenPUT(/^\/api\/contatos.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    // if(!headers['token'] || !tokenManager.ehValido(headers['token']))
    //   return [401,{},{}];
    let _data = JSON.parse(data);
    if (url === '/api/contatos') {// atualiza toda a coleção
      contatos = _data;
    } else { //atualiza um item da coleção
      let id = url.substring(14);
      crudObj.put(id, _data);
    }
    return [200, {}, {}];
  });
}

ContactsMock.$inject = ['$httpBackend','$log','StorageService','TokenManager','CrudFactory'];

export default ContactsMock;
