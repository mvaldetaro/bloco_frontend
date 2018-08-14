import angular from 'angular';
import _lancamentos from './lancamentos-data';

function LancamentosMock($httpBackend, $log, storage) {
  let lancamentos = storage.load('lancamentos', _lancamentos);
  let _id = storage.load('lancamentos-index', _lancamentos.length+1);

  $httpBackend.whenGET('/api/lancamentos').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    return [200, lancamentos, {}];
  });

  $httpBackend.whenPOST('/api/lancamentos').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    let _data = JSON.parse(data);
    _data.id = _id++;
    lancamentos.push(_data);
    storage.save('lancamentos', lancamentos);
    storage.save('lancamentos-index', _id);
    return [200, lancamentos, {}];
  });

  $httpBackend.whenDELETE(/^\/api\/lancamentos.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    if (url === '/api/lancamentos') {// reseta toda a coleção
      lancamentos = angular.copy(_lancamentos);
      _id = _lancamentos.length+1;
      storage.load('lancamentos-index', _id);
    } else { //deleta um item da coleção
      let id = url.substring(14);
      for(let i=0; i<lancamentos.length; i++) {
        if(lancamentos[i].id == id){
          lancamentos.splice(i, 1);
          break;
        }
      }
    }
    storage.save('lancamentos', lancamentos);
    return [200, lancamentos, {}];
  });

  $httpBackend.whenPUT(/^\/api\/lancamentos.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    let _data = JSON.parse(data);
    if (url === '/api/lancamentos') {// atualiza toda a coleção
      lancamentos = _data;
    } else { //atualiza um item da coleção
      let id = url.substring(14);
      for(let i=0; i<lancamentos.length; i++) {
        if(lancamentos[i].id == id){
          lancamentos[i].name = _data.name;
          lancamentos[i].phone = _data.phone;
          break;
        }
      }
    }
    storage.save('lancamentos', lancamentos);
    return [200, lancamentos, {}];
  });
}

LancamentosMock.$inject = ['$httpBackend','$log','StorageService'];

export default LancamentosMock;
