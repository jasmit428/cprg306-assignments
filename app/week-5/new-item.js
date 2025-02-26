"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  function increaseQuantity() {
    if (quantity < 20) {setQuantity(quantity + 1);}
  }

  function decreaseQuantity() {
    if (quantity > 1) {setQuantity(quantity - 1);}
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-black">Add New Item</h2>

        <label className="block mb-2 text-black">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded mt-1 bg-gray-50"
            required
          />
        </label>

        <div className="flex items-center justify-between bg-gray-200 p-2 rounded-lg mb-4">
          <button
            type="button"
            onClick={decreaseQuantity}
            disabled={quantity === 1}
            className="px-3 py-1 bg-red-500 text-white rounded disabled:bg-gray-400"
          >
            -
          </button>
          <span className="text-lg text-black">{quantity}</span>
          <button
            type="button"
            onClick={increaseQuantity}
            disabled={quantity === 20}
            className="px-3 py-1 bg-green-500 text-white rounded disabled:bg-gray-400"
          >
            +
          </button>
        </div>

        <label className="block mb-2 text-black">
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2 rounded mt-1 bg-gray-50"
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

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
          Add Item
        </button>
      </form>
    </div>
  );
}
