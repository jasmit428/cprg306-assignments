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
