String.prototype.count = function(string,sensitive){
    return this.match(RegExp(string,'g'+(sensitive?'i':''))).length
}

const str = 'Alo a todos os cavalos, hoje pela tarde almoçaremos robalo e é só isso que eu te falo! Ei, procurem nossas malas!' // frase aleatoria só para testar hehehe

console.log('na frase: ',str)
console.log('Foram encontrados:')
console.log('alo somente com minusculo ::: ', str.count('alo'))
console.log('alo com maiusculo e minusculo ::: ', str.count('alo',true))
console.log('palavras com alo/ala com maiusculo e minusculo ::: ', str.count(/al(a|o)/,true))
