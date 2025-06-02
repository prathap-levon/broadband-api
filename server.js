const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable for frontend/WordPress requests

// Mock Broadband Plans
const plans = [
    { id: 1, name: "Basic", speed: "50 Mbps", price: "$20/month" },
    { id: 2, name: "Standard", speed: "100 Mbps", price: "$30/month" },
    { id: 3, name: "Premium", speed: "200 Mbps", price: "$50/month" }
];

// Store Subscriptions
let subscriptions = [];

// GET /plans - Return prices only
app.get('/plans', (req, res) => {
    const prices = plans.map(plan => ({ price: plan.price }));
    res.json(prices);
});

// POST /subscribe - Subscribe to a plan
app.post('/subscribe', (req, res) => {
    const { userId, planId } = req.body;
    const plan = plans.find(p => p.id === planId);
    if (!plan) return res.status(404).json({ message: "Plan not found" });

    const subscription = { userId, planId, price: plan.price };
    subscriptions.push(subscription);
    res.json({ message: "Subscription successful", subscription });
});

// GET /subscription/:userId - Return subscription price only
app.get('/subscription/:userId', (req, res) => {
    const sub = subscriptions.find(s => s.userId === req.params.userId);
    if (!sub) return res.status(404).json({ message: "No subscription found" });

    res.json({ price: sub.price });
});

// Start server
app.listen(port, () => {
    console.log(`📡 Broadband API running at http://localhost:${port}`);
});
