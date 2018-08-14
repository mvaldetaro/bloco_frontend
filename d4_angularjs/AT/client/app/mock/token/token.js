class TokenManager {
  constructor($log){
    this.log = $log;
    this.intervalo = 1 * 60 * 1000;// 1 minuto em milisegeundos
  }

  ehValido(token){
    let parts = token.split('-');
    let tokenDate = parseInt(parts[2]);
    let diff = ((Date.now - tokenDate) < this.intervalo) ? true : false;
    this.log('TokenManager::ehValido', diff);
    return diff;
  }
}

export default TokenManager;
