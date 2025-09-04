import Arweave from 'arweave';

const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { account, action, postId, proof } = req.body;

  const isValid = proof && proof.startsWith('0x');
  if (!isValid) return res.status(400).json({ success: false, message: 'Invalid proof' });

  try {
    const tx = await arweave.createTransaction({ data: JSON.stringify({ account, action, postId, proof }) });
    await arweave.transactions.sign(tx);
    await arweave.transactions.post(tx);

    res.status(200).json({ success: true, arweaveTxId: tx.id });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
