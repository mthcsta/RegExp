String.prototype.ucwords = function(onlyFirst){
    return this.replace(RegExp(/\b\w/,onlyFirst?'':'g'),x=>x.toUpperCase())
}

const str = 'matheus costa'

console.log(str.ucwords())
console.log(str.ucwords(true))