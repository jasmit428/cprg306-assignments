"use client";
import { useState } from 'react';
export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="flex justify-center items-start bg-black min-h-screen pt-12">
      <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded-lg shadow-md w-60 justify-center">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          -
        </button>

        <span className="text-xl font-semibold text-black">{quantity}</span>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          +
        </button>
      </div>
    </div>
  );
}