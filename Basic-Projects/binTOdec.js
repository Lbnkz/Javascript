const prompt = require('prompt-sync')();
const math = require('math');

var numBin = prompt("What number do you need translate to decimal?")

let dec = 0;
for (let c = 0; c < numBin.length; c++) {
    dec += Math.pow(2, c) * numBin[numBin.length - c - 1]
}
console.log("The number entered above is: "+dec)