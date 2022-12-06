# proof-of-solvency-verification

Proof of Funds, Proof of Reserves, Proof of Solvency? There’s a good chance you’ve seen these concepts floating around
in your social media and news feeds. But, do you know what any of these terms stand for? Do you know whether any of
these terms actually ‘prove’ that a crypto exchange, a bank, or any other company or institution is in good financial
shape? Learn more about the Proof that Matters [here](https://blog.bitso.com/bitso/the-proof-that-matters).

## How to run it

### Verify Merkle tree
1. Download and install a LTS version of NodeJS from the (official website)[https://nodejs.org/en/].
2. Head to the terminal and access the folder of this project.
3. Run `npm install`.
4. Run `node ./merkle-tree-verify.js <Merkle Tree File> <My Merkle Leaf Hash>`
    1. e.g. `node ./merkle-tree-verify.js ./merkle-tree-2022_11_22_03_5517283378330170732023.tsv f31dc1a905e3afae`
