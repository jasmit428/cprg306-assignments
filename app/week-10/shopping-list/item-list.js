// importing the Item component to be used within the ItemList component
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  return (
    <ul>
      {items.map((item, index) => (
        <Item key={index} {...item} onSelect={onItemSelect} />
      ))}
    </ul>
  );
}
