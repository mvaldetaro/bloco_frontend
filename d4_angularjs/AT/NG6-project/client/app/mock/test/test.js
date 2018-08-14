function TestMock($httpBackend, $log) {

  $httpBackend.whenGET('/api/test').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    return [200, 'Testando o HTTP/GET.', {}];
  });

}

TestMock.$inject = ['$httpBackend','$log'];

export default TestMock;
