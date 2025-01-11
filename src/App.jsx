import React, { useState } from "react";
import "./App.css"; // Import the CSS file for styling

function App() {
  const [items, setItems] = useState([]); // State to hold the list of items
  const [inputValue, setInputValue] = useState(""); // State to hold the input value

  // Function to handle adding an item
  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]); // Add new item to the list
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div className="container">
      <h1>Item List Manager</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update input value on change
          className="input-field"
        />
        <button onClick={handleAddItem} className="add-button">
          Add Item
        </button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
