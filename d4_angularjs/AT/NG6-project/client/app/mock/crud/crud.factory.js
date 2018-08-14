import angular from 'angular';

class Crud {
    constructor(tipoDado, storage, conjuntoDadosInicial, logger){
      this.identificadorDadosStorage = tipoDado;
      this.identificadorIndexStorage = `${tipoDado}-index`;
      this.storage = storage;
      this.conjuntoDadosInicial = conjuntoDadosInicial;
      this.$log = logger;
      this.data = angular.copy(storage.load(this.identificadorDadosStorage, conjuntoDadosInicial))
      this.id = storage.load(this.identificadorIndexStorage, conjuntoDadosInicial.length+1);
    }

    get(){
      return this.data;
    }

    post(data) {
      data.id = this.id++;
      this.data.push(data);
      this.storage.save(this.identificadorDadosStorage, this.data);
      this.storage.save(this.identificadorIndexStorage, this.id);
      return data.id;
    };

    resetData(){
      this.data = angular.copy(this.conjuntoDadosInicial);
      this.id = this.conjuntoDadosInicial.length+1;
      this.storage.save(this.identificadorDadosStorage, this.data);
      this.storage.save(this.identificadorIndexStorage, this.id);
      return this.data;
    }

    deleteAll(){
      this.data = [];
      this.storage.save(this.identificadorDadosStorage, this.data);
      return this.data;
    }

    delete(id){
      let index = this.acharIndexItemPorId(id);
      if(index >= 0){
          this.data.splice(index, 1);
          this.storage.save(this.identificadorDadosStorage, this.data);
          this.$log.log('Crud::delete', this.data);
          return true;
      }
      return false;
    }

    put(id, data){
      let index = this.acharIndexItemPorId(id);
      if(index >= 0){
        this.data[index] = data;
        this.storage.save(this.identificadorDadosStorage, this.data);
        return true;
      }
      return false;
    }

    acharIndexItemPorPropriedade(propriedade, valor){
      try {
        for(let i=0; i<this.data.length; i++) {
          if(this.data[i][propriedade] == valor){
            this.$log.info('Crud::acharIndexItemPorPropriedade', i);
            return i;
          }
        }
      } catch (e) {
        this.$log.info('Crud::acharIndexItemPorPropriedade', e);
      }
      return null;
    }

    acharItemPorPropriedade(propriedade, valor){
      let index = this.acharIndexItemPorPropriedade(propriedade, valor);
      if((index >= 0) && (index < this.data.length))
        return this.data[index];
      return null;
    }

    acharIndexItemPorId(id){
      return this.acharIndexItemPorPropriedade('id', id);
    }
}

function CrudFactory(StorageService, $log){
  return {
    getCrudPara: function(tipoDado, conjuntoDadosInicial) {
      return new Crud(tipoDado, StorageService, conjuntoDadosInicial, $log);
    }
  }
}

CrudFactory.$inject = ['StorageService','$log'];

export default CrudFactory;
