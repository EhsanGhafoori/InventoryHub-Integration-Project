/**
 * Front-end: communicates with InventoryHub API.
 * Uses structured JSON responses: { success, data, message }.
 */
const API_BASE = 'http://localhost:3001/api';

async function fetchInventory() {
  try {
    const res = await fetch(`${API_BASE}/inventory`);
    const json = await res.json();
    if (!json.success) {
      document.getElementById('list').textContent = 'Error: ' + (json.message || 'Unknown');
      return;
    }
    const items = json.data?.items || [];
    document.getElementById('list').innerHTML = items.length
      ? '<ul>' + items.map((i) => `<li>${i.name} – Qty: ${i.quantity}</li>`).join('') + '</ul>'
      : '<p>No items</p>';
  } catch (e) {
    document.getElementById('list').textContent = 'Integration error: ' + e.message;
  }
}

fetchInventory();
