let subscriptions = [];

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Only POST allowed' });

  const { userId, planId } = req.body;
  const plans = [
    { id: 1, name: "Basic", speed: "50 Mbps", price: "$20/month" },
    { id: 2, name: "Standard", speed: "100 Mbps", price: "$30/month" },
    { id: 3, name: "Premium", speed: "200 Mbps", price: "$50/month" }
  ];

  const plan = plans.find(p => p.id === planId);
  if (!plan) return res.status(404).json({ message: "Plan not found" });

  const subscription = { userId, planId, price: plan.price };
  subscriptions.push(subscription);
  res.status(200).json({ message: "Subscription successful", subscription });
}
