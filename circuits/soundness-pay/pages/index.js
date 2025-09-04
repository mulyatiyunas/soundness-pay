import { useState } from 'react';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from 'web3';

export default function Home() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    const provider = new WalletConnectProvider({
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID
    });
    await provider.enable();
    const web3Instance = new Web3(provider);
    setWeb3(web3Instance);
    const accounts = await web3Instance.eth.getAccounts();
    setAccount(accounts[0]);
  };

  const sendInteraction = async () => {
    if (!account) return alert("Wallet not connected!");

    const dummyProof = web3.utils.keccak256(account + "like_post");

    const response = await fetch('/api/zkproof', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ account, action: 'like_post', postId: 12345, proof: dummyProof })
    });

    const result = await response.json();
    alert(result.success ? `Interaction accepted! Arweave TX: ${result.arweaveTxId}` : "Interaction rejected");
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Soundness Payment Prototype</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
      {account && (
        <>
          <p>Connected: {account}</p>
          <button onClick={sendInteraction}>Send Interaction</button>
        </>
      )}
    </div>
  )
}