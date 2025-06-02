export default function handler(req, res) {
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

  const prices = plans.map(plan => ({ price: plan.price }));
  res.status(200).json(prices);
}
