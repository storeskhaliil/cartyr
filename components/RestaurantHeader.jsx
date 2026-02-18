export default function RestaurantHeader({ data }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
}
