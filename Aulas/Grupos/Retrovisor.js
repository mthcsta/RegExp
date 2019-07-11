const string1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
//console.log(string1.match(/<(\w+)>.*<\/\1>/g))

const string2 = 'Lentamente é mente muito lenta.'
console.log(string2.match(/(lenta)(mente).*\2.*\1\./gi))
console.log(string2.match(/(?:lenta)(mente).*\1/gi)) // ?: não guarda

console.log(string2.match(/(lenta)(mente)/gi))
console.log(string2.match(/(lenta)(mente)?/gi))
console.log(string2.replace(/(lenta)(mente)/gi, '$2'))

// JS suporta mais de 9 retrovisores.
const string3 = 'abcdefghijkll'
console.log(string3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))