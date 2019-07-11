const string = `Os e-mails dos convidados são:
- fulano@cod3r.com.br
- xico@gmail.com
- ygu_zinhoLok@hotmail.com
- luk.ander@yahoo.com
- rod+igo@outlook.com
- mario@reg.br
- ianderground@reg.cc`

// MODO 1
const regex = /\w+\@\w+[\w.]+/g
//console.log(string.match(regex))

// MODO 2
const regex2 = /[\w+.]+\@[a-z0-9]+\.[a-z0-9]{2,}(\.[a-z0-9]{2,})?/gi
console.log(string.match(regex2))