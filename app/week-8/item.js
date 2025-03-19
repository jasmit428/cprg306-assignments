import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Item({ name, quantity, category }) {
  const [showMeals, setShowMeals] = useState(false);

  return (
    <li className="border p-2 rounded-md shadow-sm">
      {name} ({quantity}) - <span className="italic">{category}</span>
      <button
        onClick={() => setShowMeals(!showMeals)}
        className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
      >
        {showMeals ? "Hide" : "Get Meal Ideas"}
      </button>
      {showMeals && <MealIdeas ingredient={name.split(",")[0]} />}
    </li>
  );
}
