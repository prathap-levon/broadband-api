export default function handler(req, res) {
  const plans = [
    { id: 1, name: "Basic", speed: "50 Mbps", price: "$20/month" },
    { id: 2, name: "Standard", speed: "100 Mbps", price: "$30/month" },
    { id: 3, name: "Premium", speed: "200 Mbps", price: "$50/month" }
  ];

  const prices = plans.map(plan => ({ price: plan.price }));
  res.status(200).json(prices);
}
