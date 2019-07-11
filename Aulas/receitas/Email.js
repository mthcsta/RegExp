const string = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@reg.br
    - rafa.samp@yahoo.com
    - fulano+de+t@escola.ninja.br
`

console.log(string.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g))