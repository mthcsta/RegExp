const string = 'Romário era um excelente jogador\n, mas hoje é um politico questionador'

console.log(string.match(/^r.*r$/gi)) // problema do dotall

console.log(string.match(/^r[\s\S]*r$/gi)) // solução do dotall