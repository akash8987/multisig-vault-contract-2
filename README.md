# Multi-Signature Vault Contract

A secure, "M-of-N" Multi-Signature wallet designed for decentralized treasury management. This contract requires a predefined number of owners to confirm a transaction before it can be executed on-chain.

## Features
* **M-of-N Validation:** Set a custom threshold of required signatures.
* **Secure Execution:** Only confirmed transactions can be triggered.
* **Transaction Lifecycle:** Propose, Confirm, Revoke, and Execute.
* **Minimalist Design:** Flat file structure for easy deployment and auditing.

## How to Use
1. **Deploy:** Pass an array of owner addresses and the required number of confirmations to the constructor.
2. **Submit:** Any owner can submit a transaction proposal.
3. **Confirm:** Other owners call `confirmTransaction` to reach the threshold.
4. **Execute:** Once the threshold is met, any owner can call `executeTransaction`.

## Security
This code is provided for educational purposes. Ensure a professional audit is conducted before using it to manage significant mainnet funds.
