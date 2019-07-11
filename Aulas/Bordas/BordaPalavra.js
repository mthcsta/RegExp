const string1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(string1.match(/\bdia\w+/gi))
console.log(string1.match(/\w+dia\b/gi))
console.log(string1.match(/\w+dia\w+/gi))
console.log(string1.match(/\bdia\b/gi))

// borda é não \w, que é [^A-Za-z0-9]... temos problemas com acentos!
// ou seja ( 'informação',/\b\w+\b/ ); Retorna: informa
// O 'i' marca o inicio da borda e o 'a' marca o fim da borda

const string2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

console.log(string2.match(/\bdia\b/gi))
console.log(string2.match(/(\S*)?dia(\S*)?/gi)) // a virgula entra!
console.log(string2.match(/([\wÀ-ü-]*)?dia([\wÀ-ü]*)?/gi))