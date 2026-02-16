/**
 * InventoryHub API - JSON REST backend.
 * Structured JSON responses for front-end integration.
 */
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// In-memory store; use DB in production
const inventory = [
  { id: 1, name: 'Widget A', quantity: 100, sku: 'WID-001' },
  { id: 2, name: 'Widget B', quantity: 50, sku: 'WID-002' },
];

// Structured JSON response helper
function jsonResponse(success, data, message = '') {
  return { success, data, message };
}

// GET /api/inventory - list all
app.get('/api/inventory', (req, res) => {
  res.json(jsonResponse(true, { items: inventory, count: inventory.length }));
});

// GET /api/inventory/:id - get one
app.get('/api/inventory/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = inventory.find((i) => i.id === id);
  if (!item) {
    return res.status(404).json(jsonResponse(false, null, 'Item not found'));
  }
  res.json(jsonResponse(true, { item }));
});

// POST /api/inventory - create
app.post('/api/inventory', (req, res) => {
  const { name, quantity, sku } = req.body || {};
  if (!name || quantity == null) {
    return res.status(400).json(jsonResponse(false, null, 'Missing name or quantity'));
  }
  const id = inventory.length ? Math.max(...inventory.map((i) => i.id)) + 1 : 1;
  const item = { id, name, quantity: parseInt(quantity, 10) || 0, sku: sku || '' };
  inventory.push(item);
  res.status(201).json(jsonResponse(true, { item }, 'Created'));
});

app.listen(PORT, () => console.log(`InventoryHub API on http://localhost:${PORT}`));
