# proof-of-solvency-verification

Bitso is moving toward a definitive Proof of Solvency that can provide transparency and security to users without ever
putting at risk their privacy. But since the final solution takes time to be implemented, we’re releasing one step at
the time. The first step, then, is the release of a Merkle Tree where users can verify manually that their balances were
properly accounted for in Bitso’s liabilities. To learn how to perform this verification, read the tutorial below.

If you want to learn more about the definitive Proof of Solvency, and about Bitso’s roadmap to achieve it, you can read
it in [here](https://blog.bitso.com/bitso/the-proof-that-matters).

## How to run it

First, execute the following preparation steps.

1. Download and install a LTS version of NodeJS from the [official website](https://nodejs.org/en/).
2. Head to the terminal and access the folder of this project.
3. Run `npm install`.

### Verify Merkle tree

Bitso's Proof of Solvency page provides you with a link to download the Merkle Tree File and your Merkle Leaf Hash.
Use those as input to the following command.

`node ./merkle-tree-verify.js <Merkle Tree File> <My Merkle Leaf Hash>`

e.g. `node ./merkle-tree-verify.js ./example-merkle-tree.tsv e17e7edf6faa1a6a`

### Generate your Merkle Leaf Hash

If you would like to generate your Merkle Leaf Hash yourself, Bitso's Proof of Solvency page displays your balance for
each currency at the time the snapshot was taken. Use the balances and your Account Code as input to the following
command.

`node merkle-tree-calculate-leaf-hash.js <My Account Code> <Currency A Code>=<Currency A Balance> <Currency B Code>=<Currency B Balance> ...`

e.g. `node merkle-tree-calculate-leaf-hash.js d7ae2e6e-c36b-4b44-8b98-bdd59c4eebad btc=0.00000001`
