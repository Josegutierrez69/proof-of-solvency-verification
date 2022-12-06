const sha256 = require('crypto-js/sha256');
const Hex = require('crypto-js/enc-hex');

const [_, , accountCode, ...balances] = process.argv;

const balancesHash = balances.sort().reduce((balanceHashAccumulator, accountBalance) => {
    const [currency, balanceValue] = accountBalance.split('=');

    const noLeadingZeroesBalance = balanceValue.replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1');
    console.log(currency, 'balance is', noLeadingZeroesBalance);

    balanceHashAccumulator += sha256(noLeadingZeroesBalance);
    return balanceHashAccumulator;
}, '');

const myMerkleLeafHashBytes = sha256(accountCode + balancesHash);
const myMerkleLeafHash = Hex.stringify(myMerkleLeafHashBytes).slice(0, 16);
console.log('My Merkle Leaf Hash', myMerkleLeafHash);