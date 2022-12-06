const {MerkleTree} = require('merkletreejs');
const SHA256 = require('crypto-js/sha256');

const fs = require('fs'), readline = require('readline');

const [_, , path, checkHash] = process.argv;

console.log('Merkle Tree File:', path);
console.log('My Merkle Leaf Hash:', checkHash);

const rd = readline.createInterface({
    input: fs.createReadStream(path), output: process.stdout, console: false, terminal: false
});

const leaves = [];

function bufferToString(value) {
    return value.toString('hex');
}

let is_matched = false;
rd.on('line', function (line) {
    if (!line || line === "Level\tHash" || line[0] === '#') {
        return;
    }
    let [pos, hash] = line.match(/[^\s]+/g);
    if (checkHash === hash) {
        console.log('Successful! Found your Merkle Leaf Hash at level and position:', pos);
        is_matched = true;
    }
    leaves.push(hash)
});

rd.on('close', function () {
    if (!is_matched) {
        console.log('Could not find your Merkle Leaf Hash in the Merkle Tree');
    }
    console.log('Merkle root hash is being generated...');
    const tree = new MerkleTree(leaves, SHA256, {hashLeaves: false});
    const root = bufferToString(tree.getRoot());
    console.log('Merkle Tree Root Hash:', root);
    console.log('Finished.');
});


