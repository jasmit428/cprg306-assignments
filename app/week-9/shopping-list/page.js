"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas"; 
import itemsData from "./items.json";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  // redirect to login page
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  // Don't render if the user is not authenticated (prevents flashing of UI before redirect)
  if (!user) return null;

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div className="bg-black min-h-screen p-6 text-white flex flex-col items-start">
      <div className="flex w-full max-w-6xl gap-6">
        {/* Shopping List */}
        <div className="w-2/3">
          <h1 className="text-4xl font-bold mt-8 mb-6">Shopping List</h1>

          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full">
            <NewItem onAddItem={handleAddItem} />
          </div>

          {/* sorting */}
          <div className="mt-6 flex items-center space-x-3">
            <span className="text-lg">Sort by:</span>
            <button
              className="bg-pink-300 text-black font-bold py-2 px-4 rounded-lg hover:bg-pink-400"
              onClick={() => setSortBy("name")}
            >
              Name
            </button>
            <button
              className="bg-pink-300 text-black font-bold py-2 px-4 rounded-lg hover:bg-pink-400"
              onClick={() => setSortBy("category")}
            >
              Category
            </button>
          </div>

          {/* list items */}
          <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-lg">
            <ItemList items={items} onItemSelect={setSelectedIngredient} />
          </div>
        </div>

        {/* meal ideas pop up */}
        <div className="w-1/3 bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
          {selectedIngredient ? (
            <MealIdeas ingredient={selectedIngredient} />
          ) : (
            <p className="text-gray-400">Select an item to see meal ideas</p>
          )}
        </div>
      </div>
    </div>
  );
}
