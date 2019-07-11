const string = 'João é calmo, mas no transito fica nervoso.'

console.log(string.match(/[\wÀ-ü]+/gi))

// positive lookahead
console.log(string.match(/[\wÀ-ü]+(?=,)/gi))
console.log(string.match(/[\wÀ-ü]+(?=\.)/gi))
console.log(string.match(/[\wÀ-ü]+(?=, mas)/gi))

// negative lookahead
console.log(string.match(/[\wÀ-ü]+\b(?!,)/gi))
console.log(string.match(/[\wÀ-ü]+[\s|.](?!,)/gi))