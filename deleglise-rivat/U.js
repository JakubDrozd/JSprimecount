/* JSprimecount is a fast implementation of algorithms calculating the prime-counting function.

Copyright © 2021 Jakub Drozd
For full notice see main.js at the top level directory. */
// Module import
const { pitabulator, ersieve } = require('../JSprimesieve/utilities.js');
// Function
const U = (x, y) => {
    console.log('Computing U...');
    const pitable = pitabulator(y);
    const primtable = ersieve(Math.floor(Math.cbrt(x)));
    const psplitnum = Math.sqrt(x / y);
    const psplitindex = primtable.findIndex((element) => element > psplitnum);
    let total = 0;
    primtable.splice(0, psplitindex);
    for (const p of primtable) {
        total += pitable[y - 1] - pitable[Math.floor(x / (p * p)) - 1];
    }
    console.log('U computed!');
    return total;
}
// Module export
module.exports = U;