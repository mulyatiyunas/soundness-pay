# 🌐 Soundness Pay dApp

This project is a Decentralized Application (dApp) based on [Next.js](https://nextjs.org/) with Web3 and Arweave integration.
This repo also hosts several JSON configuration files (`config.json`, `setting.json`, `zkproof.json`, etc.) used for testing.

---

## 🚀 Features
- ⚡ Next.js 13 Framework
- 🔗 Web3.js & WalletConnect Integration
- 🗄️ Decentralized storage with Arweave
- 🧪 Testing script for JSON file validation

---

## 📦 Installation & Running

### 1. Clone Repository
```bash
git clone https://github.com/mulyatiyunas/soundness-pay.git
cd soundness-pay
### 2. Install Dependencies
npm install
### 3. Run Testing (optional)
npm test
### 4. Run Server Development
npm run dev

The application will run on:

http://localhost:3000
(default)

http://localhost:3001
if port 3000 is already in use

### 5. Build for Production
npm run build
npm start

## 📦 Struktur Folder
soundness-pay/
├── circuits/ # zk-SNARK circuit files
├── pages/ # Next.js pages
│ └── index.js # home page
├── config.json # dApp configuration
├── setting.json # additional settings
├── zkproof.json # zk-SNARK proof data
├── index.json # index data
├── test.json # additional testing files
├── package.json # project configuration
└── README.md # documentation

⚠️ Note

At least Node.js v18 is recommended.

If port 3000 is already in use, Next.js automatically switches to 3001.

To run the test script, ensure there is a test.js file in the root.

👨‍💻 Author

mulyatiyunas