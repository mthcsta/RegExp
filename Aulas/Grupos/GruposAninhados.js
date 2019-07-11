const string = 'supermercado hipermercado minimercado mercado'

console.log(string.match(/(super|hiper|mini)?mercado/g))
console.log(string.match(/((hi|su)per|mini)?mercado/g))