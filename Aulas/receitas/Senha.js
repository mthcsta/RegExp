const string = `
123456
cod3r
QUASE123!
#0pA1
#essaSenhaEGrande1234

#0pA1?
Foi123!
`

console.log(string.match(/^.{6,20}$/gm))
console.log(string.match(/^(?=.*[A-Z]).{6,20}$/gm))
console.log(string.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm))
