import angular from 'angular';
import _usuarios from './data';

function UsuariosMock($httpBackend, $log, storage, tokenManager, crudFactory) {
  let crudObj = crudFactory.getCrudPara('usuarios',_usuarios);

  $httpBackend.whenGET('/api/usuarios').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    // if(!headers['token'] || !tokenManager.ehValido(headers['token']))
    //   return [401,{},{}];
    let usuarios = crudObj.get();
    return [200, usuarios, {}];
  });

  $httpBackend.whenPOST('/api/usuarios').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    // if(!headers['token'] || !tokenManager.ehValido(headers['token']))
    //   return [401,{},{}];
    let _data = JSON.parse(data);
    let id = crudObj.post(_data);
    return [200, id, {}];
  });

  $httpBackend.whenDELETE(/^\/api\/usuarios.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    // if(!headers['token'] || !tokenManager.ehValido(headers['token']))
    //   return [401,{},{}];
    if (url === '/api/usuarios') {// reseta toda a coleção
      let usuarios = crudObj.resetData();
      return [204, usuarios, {}]
    } else { //deleta um item da coleção
      let id = url.substring(14);
      crudObj.delete(id);
    }
    return [204, {}, {}];
  });

  $httpBackend.whenPUT(/^\/api\/usuarios.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    // if(!headers['token'] || !tokenManager.ehValido(headers['token']))
    //   return [401,{},{}];
    let _data = JSON.parse(data);
    if (url === '/api/usuarios') {// atualiza toda a coleção
      usuarios = _data;
    } else { //atualiza um item da coleção
      let id = url.substring(14);
      crudObj.put(id, _data);
    }
    return [200, {}, {}];
  });

  $httpBackend.whenPOST('/api/login').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    let _data = JSON.parse(data);
    let usuario = crudObj.acharItemPorPropriedade('login', _data.login);
    if(usuario && (usuario.senha === _data.senha)) {
      headers['token'] = `token-${usuario.nome}-${Date.now()}`;
      //$log.log([200, {}, headers]);
      return [200, {}, headers];
    }
    //$log.log([401, {erro: 'Usuario não encontrado'}, {}]);
    return [401, {erro: 'Usuario não encontrado'}, {}];
  });
}

UsuariosMock.$inject = ['$httpBackend','$log','StorageService','TokenManager','CrudFactory'];

export default UsuariosMock;
