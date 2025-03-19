// "use client";

// import Item from "./item";

// export default function ItemList({ items, sortBy }) {
//   const sortedItems = [...items].sort((a, b) => {
//     if (sortBy === "name") {
//       return a.name.localeCompare(b.name);
//     } else if (sortBy === "category") {
//       return a.category.localeCompare(b.category);
//     }
//     return 0;
//   });

//   return (
//     <ul className="mt-4 space-y-2">
//       {sortedItems.map((item) => (
//         <Item
//           key={item.id}
//           name={item.name}
//           quantity={item.quantity}
//           category={item.category}
//         />
//       ))}
//     </ul>
//   );
// }





import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  return (
    <ul>
      {items.map((item, index) => (
        <Item key={index} {...item} onSelect={onItemSelect} /> // ✅ Send clicked item
      ))}
    </ul>
  );
}
