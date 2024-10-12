import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [sortOrder, setSortOrder] = useState('inputOrder');

  const addItem = () => {
    if (input) {
      setItems([
        ...items,
        { description: input, quantity: quantity, packed: false, id: Date.now() },
      ]);
      setInput('');
      setQuantity(1);
    }
  };

  const togglePackedStatus = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const sortItems = () => {
    let sortedItems = [...items];
    if (sortOrder === 'description') {
      sortedItems.sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortOrder === 'packedStatus') {
      sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
    }
    setItems(sortedItems);
  };

  const clearList = () => {
    setItems([]);
  };

  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const packedPercentage = totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  return (
    <div className="App">
      <header className="App-header">
        <h1>🏝️ Far Away 🧳</h1>
      </header>
      
      <div className="input-section">
        <label>What do you need for your 😍 trip?</label>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={input}
          placeholder="Item"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addItem}>ADD</button>
      </div>

      <div className="list-section">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.packed}
                onChange={() => togglePackedStatus(item.id)}
              />
              {item.quantity}x {item.description}
              {/* Red X to remove item */}
              <span 
                onClick={() => removeItem(item.id)} 
                style={{ color: 'red', cursor: 'pointer', marginLeft: '10px', fontSize: '1.2em' }}
                title="Remove item"
              >
                ✖
              </span>
            </li>
          ))}
        </ul>

        <div>
          <select className='btn-list' value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="inputOrder">Sort by Input Order</option>
            <option value="description">Sort by Description</option>
            <option value="packedStatus">Sort by Packed Status</option>
          </select>
          <button className='btn-list' onClick={clearList}>CLEAR LIST</button>
        </div>
      </div>

      {totalItems === 0 ? (
        <div className='footer'>
          Start adding some items to your packing list 🚀
        </div>
      ) : (
        <div className='footer'>
          💼 You have {totalItems} {totalItems === 1 ? 'item' : 'items'} on your list, and you already packed {packedItems} ({packedPercentage}%)
        </div>
      )}
    </div>
  );
}

export default App;
