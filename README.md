# soundness-pay
/workspaces/soundness-pay/
├── frontend/
├── backend/
├── circuits/
├── package.json
└── README.md
cd /workspaces/soundness-pay
npm install
npm install -g circom snarkjs
npm run prove:setup
node backend/uploadProof.js wallet.json circuits/build/proof.json
npm run dev
