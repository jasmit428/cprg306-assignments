"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMealIdeas() {
      if (!ingredient) return;

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.error("Error fetching meal ideas:", error);
      }
    }

    fetchMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-6 w-full max-w-lg">
      <h2 className="text-xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
      {meals.length === 0 ? (
        <p className="text-gray-400">No meal ideas found.</p>
      ) : (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="flex items-center space-x-4">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-16 h-16 rounded-lg"
              />
              <span className="text-white">{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
