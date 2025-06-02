let subscriptions = [];

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Only POST allowed' });

  const { userId, planId } = req.body;
  const plans = [
  {
    "id": 1,
    "name": "Basic Plan",
    "price": "$20/month",
    "features": [
      "10 Mbps speed",
      "100 GB data",
      "No installation fee"
    ]
  },
  {
    "id": 2,
    "name": "Premium Plan",
    "price": "$50/month",
    "features": [
      "100 Mbps speed",
      "Unlimited data",
      "Free router"
    ]
  }
];

  const plan = plans.find(p => p.id === planId);
  if (!plan) return res.status(404).json({ message: "Plan not found" });

  const subscription = { userId, planId, price: plan.price };
  subscriptions.push(subscription);
  res.status(200).json({ message: "Subscription successful", subscription });
}
