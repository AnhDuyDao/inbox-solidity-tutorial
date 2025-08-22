/**
 * Cannot work because of solidity file. Compile.js cannot read solidity files directly from the filesystem. Solution: use path module to resolve the path. It helps to resolve the path to the solidity file correctly. Moreover, the Unix and windows file systems have different path formats, so using the path module ensures compatibility across different operating systems.
 */
// require("./contracts/Inbox.sol");

const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.version());

const input = {
   language: 'Solidity',
   sources: {
      'Inbox.sol': {
         content: source,
      },
   },
   settings: {
      outputSelection: {
         '*': {
            '*': ['*'],
         },
      },
   },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
   'Inbox.sol'
].Inbox;
