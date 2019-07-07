String.prototype.reverse = function(){
    return this.split("").reverse().join("")
}

const str = 'matheus'

console.log(str.reverse())