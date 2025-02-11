export default function Item({ name, quantity, category }) {
    return (
        <li className="p-4 bg-gray-200 rounded-lg shadow mb-2">
            <h3 className="font-bold text-lg text-blue-800">{name}</h3>
            <p className="text-sm text-gray-600">
                Quantity: {quantity} | Category: {category}
            </p>
        </li>
    );
}
