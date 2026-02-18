import MenuItemCard from "./MenuItemCard";

export default function MenuCategory({ category, items }) {
  if (!items.length) return null;

  return (
    <section style={{ marginBottom: 40 }}>
      <h2>{category.title}</h2>
      <div style={{ display: "grid", gap: 16 }}>
        {items.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
}



