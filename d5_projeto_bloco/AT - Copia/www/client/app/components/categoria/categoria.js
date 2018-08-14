import angular from 'angular';
import uiRouter from 'angular-ui-router';
import categoria from './categoria.component';
import categoriaService from './categoria.service';

let categoriaModule = angular.module('categoria', [
  uiRouter
  ])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
  .state('categoria', {
    url: '/categoria',
    component: 'categoria',
  })
  .state('categoria.servicos', {
    url: '/:servico',
    component: 'categoria',
  })
  .state('categoria.praia', {
    url: '/praias',
  })
  .state('categoria.comer', {
    url: '/onde-comer',
  })
  .state('categoria.dormir', {
    url: '/onde-dormir',
  })
  .state('categoria.banheiros', {
    url: '/banheiros',
  })
  .state('categoria.hospitais', {
    url: '/hospitais',
  })
  .state('categoria.delegacias', {
    url: '/delegacias',
  })
  .state('categoria.eventos', {
    url: '/eventos',
  });
})

.service('CategoriaService', categoriaService)

.component('categoria', categoria)

.filter('slug', function(){
  return function url_slug(s, opt) {
    s = String(s);
    opt = Object(opt);

    var defaults = {
      'delimiter': '-',
      'limit': undefined,
      'lowercase': true,
      'replacements': {},
      'transliterate': (typeof(XRegExp) === 'undefined') ? true : false
    };

  for (var k in defaults) {
    if (!opt.hasOwnProperty(k)) {
      opt[k] = defaults[k];
    }
  }

  var char_map = {
    // Latin
    'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE', 'Ç': 'C',
    'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I', 'Î': 'I', 'Ï': 'I',
    'Ð': 'D', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö': 'O', 'Ő': 'O',
    'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U', 'Ű': 'U', 'Ý': 'Y', 'Þ': 'TH',
    'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'æ': 'ae', 'ç': 'c',
    'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
    'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ő': 'o',
    'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u', 'ű': 'u', 'ý': 'y', 'þ': 'th',
    'ÿ': 'y',
  };

  for (var k in opt.replacements) {
    s = s.replace(RegExp(k, 'g'), opt.replacements[k]);
  }

  if (opt.transliterate) {
    for (var k in char_map) {
      s = s.replace(RegExp(k, 'g'), char_map[k]);
    }
  }

  var alnum = (typeof(XRegExp) === 'undefined') ? RegExp('[^a-z0-9]+', 'ig') : XRegExp('[^\\p{L}\\p{N}]+', 'ig');
  s = s.replace(alnum, opt.delimiter);
  s = s.replace(RegExp('[' + opt.delimiter + ']{2,}', 'g'), opt.delimiter);
  s = s.substring(0, opt.limit);
  s = s.replace(RegExp('(^' + opt.delimiter + '|' + opt.delimiter + '$)', 'g'), '');
  return opt.lowercase ? s.toLowerCase() : s;
}

})

.name;

export default categoriaModule;
