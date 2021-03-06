/* JSprimecount is a fast implementation of algorithms calculating the prime-counting function.

Copyright © 2021 Jakub Drozd
For full notice see main.js at the top level directory. */
// Module import
const { mobiustabulator } = require('../JSprimesieve/utilities.js');
// Function
const S0 = (x, y) => {
    console.log('Calculating S0');
    let mobiustable = mobiustabulator(y);
    let total = 0;
    for (let i = 0; i < y; i++) {
        total += mobiustable[i] * Math.floor(x / (i + 1));
    }
    console.log('S0 calculated!');
    return total;
};
// Module export
module.exports = S0;