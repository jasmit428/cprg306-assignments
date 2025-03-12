// "use client";

// import { useState } from "react";
// import NewItem from "./new-item";
// import ItemList from "./item-list";
// import itemsData from "./items.json";

// export default function Page() {
//   const [items, setItems] = useState(itemsData);
//   const [sortBy, setSortBy] = useState(""); 

//   function handleAddItem(newItem) {
//     setItems((prevItems) => [...prevItems, newItem]);
//   }

//   return (
//     <div className="bg-black min-h-screen p-6 text-white">
//       {/* Header Section */}
//       <h1 className="text-4xl font-bold text-center p-4">Shopping List</h1>

//       {/* New Item Form */}
//       <div className="max-w-xl mx-auto">
//         <NewItem onAddItem={handleAddItem} />
//       </div>

//       {/* Sort Buttons */}
//       <div className="flex justify-center space-x-4 mt-4">
//         <button
//           className="bg-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-700"
//           onClick={() => setSortBy("name")}
//         >
//           Sort by Name
//         </button>
//         <button
//           className="bg-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-700"
//           onClick={() => setSortBy("category")}
//         >
//           Sort by Category
//         </button>
//       </div>

//       {/* Item List */}
//       <div className="max-w-2xl mx-auto mt-6">
//         <ItemList items={items} sortBy={sortBy} />
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState("");

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div className="bg-black min-h-screen p-6 text-white flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl font-bold mt-8 mb-6">Shopping List</h1>

      {/* New Item Form Section */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <NewItem onAddItem={handleAddItem} />
      </div>

      {/* Sorting Section */}
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

      {/* Item List */}
      <div className="max-w-2xl w-full mt-6">
        <ItemList items={items} sortBy={sortBy} />
      </div>
    </div>
  );
}
