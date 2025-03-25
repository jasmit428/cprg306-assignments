import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Item({ name, quantity, category, onSelect }) {
  function handleClick() {
    onSelect(name.split(",")[0]); 
  }

  return (
    <li className="border p-2 rounded-md shadow-sm cursor-pointer" onClick={handleClick}>
      {name} ({quantity}) - <span className="italic">{category}</span>
    </li>
  );
}
