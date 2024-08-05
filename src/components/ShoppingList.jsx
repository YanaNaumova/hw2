function ShoppingList({ items }) {
  return (
    <ul>
      {items.length === 0 ? (
        <p>Список пуст</p>
      ) : (
        items.map((item, index) => <li key={index}>{item}</li>)
      )}
    </ul>
  );
}

export default ShoppingList;
