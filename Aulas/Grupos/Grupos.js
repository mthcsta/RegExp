const string1 = 'O José Simão é muito engraçado... hehehehe'
//console.log(string1.match(/(he)+/g))

const string2 = 'http://www.site.info www.escola.ninja.br google.com.ag'
// MODO 1
console.log('Modo:::1\n', string2.match(/(\w+\:\/\/)?(\w+\.)?([\w.]+)/g) )
// MODO 2
console.log('Modo:::2\n', string2.match(/(\w+\:\/\/)?(\w+\.)?\w+\.\w{2,}(\.\w{2,})?/g) )
