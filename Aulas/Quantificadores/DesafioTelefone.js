const string = `Lista telefonica:
- (11) 98756-1212
- 98765-4321
- (051) 98416-1156
- (10) 9541-1584`

// MODO 1
const regex = /(\(\d+\)\s)?[-\d]{9,10}/g
//console.log(string.match(regex))

// MODO 2
const regex2 = /(\(\d{2,3}\)\s)?\d{4,5}-\d{4}/g
console.log(string.match(regex2))