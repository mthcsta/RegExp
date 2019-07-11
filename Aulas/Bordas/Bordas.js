const string = 'Romário era um excelente jogador\n, mas hoje é um politico questionador'

console.log(string.match(/r/gi))
console.log(string.match(/^r/gi)) // ^ inicio da linha/string
console.log(string.match(/r$/gi)) // $ fim da linha/string

console.log(string.match(/^r.*r$/gi)) // problema do dotall