/**
 * Cannot work because of solidity file. Compile.js cannot read solidity files directly from the filesystem. Solution: use path module to resolve the path. It helps to resolve the path to the solidity file correctly. Moreover, the Unix and windows file systems have different path formats, so using the path module ensures compatibility across different operating systems.
 */
// require("./contracts/Inbox.sol");

const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];
