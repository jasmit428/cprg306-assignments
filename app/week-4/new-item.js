"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded-lg shadow-md">
        {/* Decrement Button */}
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 
                     disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          -
        </button>

        <span className="text-xl font-semibold text-black">{quantity}</span>

        {/* Increment Button */}
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 
                     disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          +
        </button>
      </div>
    </div>
  );
}
