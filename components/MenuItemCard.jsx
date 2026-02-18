export default function MenuItemCard({ item }) {
  return (
    <div
      style={{
        padding: 16,
        border: "1px solid #eee",
        borderRadius: 8,
      }}
    >
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <strong>₪ {item.price}</strong>
    </div>
  );
}
