"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const increment = () => setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log("New Item:", item);
    alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-black">Add New Item</h2>

        {/* Name Input */}
        <label className="block mb-2 text-black font-medium">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded mt-1 bg-gray-50"
          />
        </label>

        {/* Quantity Selector */}
        <div className="flex items-center space-x-4 bg-gray-200 p-3 rounded-lg shadow-md mb-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-400"
          >
            -
          </button>
          <span className="text-xl font-semibold text-black">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-400"
          >
            +
          </button>
        </div>

        {/* Category Dropdown */}
        <label className="block mb-2 text-black font-medium">
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mt-1 bg-gray-50"
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

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
