"use strict";

process.title = "Solana Wallet Generator";

// Importing required modules
const { Keypair } = require('@solana/web3.js');
const fs = require('fs');

// Generating a new random Solana keypair
const keypair = Keypair.generate();

// Getting the private key as a byte array
const privateKey = keypair.secretKey;

// Getting the public key as a base58 encoded string (i.e. the wallet address)
const publicKey = keypair.publicKey.toString();

// Creating a wallet object
const wallet = {
    private_key: privateKey.toString('hex'),
    public_address: publicKey
};

try {
    // Saving the generated wallet to a new file using fs.writeFileSync
    const fileName = `generated_${Date.now()}.txt`;
    fs.writeFileSync(fileName, JSON.stringify(wallet, null, 4));
    console.log(`Saved generated wallet to ${fileName}`);
} catch (err) {
    console.error(`An error occurred while writing to the file: ${err.message}`);
}
