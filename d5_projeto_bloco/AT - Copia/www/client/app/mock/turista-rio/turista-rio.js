import banheiros from './banheiros';
import bombeiros from './bombeiros';
import delegacias from './delegacias';
import escolas from './escolas';
import hoteis from './hoteis';
import jogosOlimpicos from './jogos-olimpicos';
import pontosTuristicos from './pontos-turisticos';
import postosSaude from './postos-saude';
import praias from './praias';
import restaurantes from './restaurantes';
import favoritos from './favoritos';

function TuristaRioMock($httpBackend, $log, storage, tokenManager, crudFactory) {
  let dados = {
    banheiros: banheiros,
    bombeiros: bombeiros,
    delegacias: delegacias,
    escolas: escolas,
    hoteis: hoteis,
    'jogos-olimpicos': jogosOlimpicos,
    'pontos-turisticos': pontosTuristicos,
    'postos-saude': postosSaude,
    praias: praias,
    restaurantes: restaurantes,
    favoritos: favoritos
  };

  $httpBackend.whenGET(/^\/api\/.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    let item = url.substring(5);
    $log.log(item);
    if(dados[item])
      return [200, dados[item], {}];
    else
      return [404, {}, {}];
  });

  let crudObj = crudFactory.getCrudPara('favoritos', favoritos);

  $httpBackend.whenPOST('/api/favoritos').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    // if(!headers['token'] || !tokenManager.ehValido(headers['token']))
    //   return [401,{},{}];
    let _data = JSON.parse(data);
    let id = crudObj.post(_data);
    return [200, id, {}];
  });

}

TuristaRioMock.$inject = ['$httpBackend','$log','StorageService','TokenManager','CrudFactory'];

export default TuristaRioMock;
