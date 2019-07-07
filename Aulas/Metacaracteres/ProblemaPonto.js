const texto = 'Bom\ndia'
console.log(texto.match(/.|\n/gi)) // o ponto não engloba o \n

// dotail - algumas linguagens tem um flag /exp/s, mas JS não!