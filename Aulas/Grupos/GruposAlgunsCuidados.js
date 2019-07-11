const string = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

console.log(string.match(/[(abc)]/gi)) // não é um grupo
console.log(string.match(/([abc])/gi))
console.log(string.match(/(abc)/gi))