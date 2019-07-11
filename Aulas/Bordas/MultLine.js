const string = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(string.match(/\n/g))
console.log(string.match(/^(\w).+\1$/gi))
console.log(string.match(/^(\w).+\1$/gim))