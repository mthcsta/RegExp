const movies = [
 'O Demolidor (2003)',
 'Brilho eterno de uma mente sem lembranca (2004)',
 'Clube da Luta (1999)',
 'Homem de Ferro 2 (2010)'
]
const reg = /([0-9]+)/g

movies.sort(
      (a, b) => a.match(reg) - b.match(reg)
    )

console.log(movies)