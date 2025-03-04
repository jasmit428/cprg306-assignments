"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sorting logic
  let sortedItems = [...items];
  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortBy === "grouped") {
    const grouped = items.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});

    sortedItems = Object.entries(grouped).map(([category, items]) => ({
      category,
      items: items.sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }

  return (
    <div>
      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 text-black bg-pink-200 hover:bg-pink-300`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 mr-2 text-black bg-pink-200 hover:bg-pink-300`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
        <button
          className={`px-4 py-2 text-black bg-pink-200 hover:bg-pink-300`}
          onClick={() => setSortBy("grouped")}
        >
          Group by Category
        </button>
      </div>

      {sortBy === "grouped" ? (
        <div>
          {sortedItems.map(({ category, items }) => (
            <div key={category} className="mb-4">
              <h2 className="text-xl font-bold capitalize">{category}</h2>
              <ul className="space-y-1">
                {items.map((item) => (
                  <Item key={item.id} {...item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="space-y-2">
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
}
