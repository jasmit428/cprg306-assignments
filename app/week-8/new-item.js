"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Other");

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("Other");
  }

  function increaseQuantity() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 p-4 rounded-lg shadow-lg">
      {/* Name Input */}
      <label className="block text-white">
        Item Name:
        <input
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border p-2 rounded mt-1 bg-gray-800 text-white"
        />
      </label>

      {/* Quantity & Category */}
      <div className="flex space-x-4">
        {/* Quantity Selector */}
        <div className="flex items-center justify-between bg-gray-800 p-2 rounded-lg w-1/2">
          <button
            type="button"
            onClick={decreaseQuantity}
            disabled={quantity === 1}
            className="px-3 py-1 bg-red-500 text-white rounded disabled:bg-gray-400"
          >
            -
          </button>
          <span className="text-lg text-white">{quantity}</span>
          <button
            type="button"
            onClick={increaseQuantity}
            disabled={quantity === 20}
            className="px-3 py-1 bg-green-500 text-white rounded disabled:bg-gray-400"
          >
            +
          </button>
        </div>

        {/* Category Dropdown */}
        <label className="block text-white w-1/2">
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2 rounded mt-1 bg-gray-50 text-black"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700"
      >
        +
      </button>
    </form>
  );
}
