# Soundness Pay

A reliable and secure payment system prototype.

## Repository Structure

/workspaces/soundness-pay/
├── frontend/ # Frontend application
├── backend/ # Backend API and proof handling
├── circuits/ # Zero-knowledge circuits
├── package.json # Project dependencies
└── README.md # This file

## Setup & Installation

1. Navigate to the project directory:

```bash
cd /workspaces/soundness-pay
npm install
2. Install project dependencies:

npm install
3. Install global dependencies for Circom and SnarkJS:

npm install -g circom snarkjs

Generate Proof & Upload

Setup the proof environment:

npm run prove:setup


Upload proof using the backend script:

node backend/uploadProof.js wallet.json circuits/build/proof.json

Run Development Server
npm run dev
