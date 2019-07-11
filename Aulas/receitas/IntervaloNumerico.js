const string = '0 1 10 192 199 201 249 255 256 312 1010 24 1512'

// numeros entre 0-255
// console.log(string.match(/[0-2]{0,1}[0-9]{0,1}[0-5]{1}/g))
console.log(string.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))