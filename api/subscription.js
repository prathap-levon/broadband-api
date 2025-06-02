let subscriptions = [];

export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ message: 'Only GET allowed' });

  const userId = req.query.userId;
  const sub = subscriptions.find(s => s.userId === userId);

  if (!sub) return res.status(404).json({ message: "No subscription found" });
  res.status(200).json({ price: sub.price });
}
