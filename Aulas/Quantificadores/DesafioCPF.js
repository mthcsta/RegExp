const string = `CPF dos aprovados: 
- 600.567.890-12
- 765.998.345-23
- 141.158.418-12`

// MODO 1
const regex = /[-\d.]{14}/g
console.log(string.match(regex))

// MODO 2
const regex2 = /\d{3}\.\d{3}\.\d{3}\-\d{2}/g
console.log(string.match(regex2))