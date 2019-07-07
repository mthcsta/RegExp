String.prototype.shuffle = function(){
  let str = this.split('')
  let len = str.length
  return this.replace(/\w/g, (x, i) => {
    let rand = Math.floor(Math.random() * (len - i) + 1)
    let temp = str[i]
    str[i] = str[rand]
    str[rand] = temp
    if (len ^ (i+1)) return ''
    else return str.join('')
  })
}

const str = 'Matheus'

console.log(str.shuffle())