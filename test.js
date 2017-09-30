'use strict'
//test.js
const f2c = require('./index.js')
 let tempC = f2c(20)
 console.log(tempC)

if(tempC == -6.67){
	console.log('Teste OK!')
	process.exit(0)
}

console.log('Teste failed!')
process.exit(1)