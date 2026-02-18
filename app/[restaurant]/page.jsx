import { client } from "@/lib/sanity.client";
import {
  restaurantQuery,
  categoriesQuery,
  menuItemsQuery,
} from "@/lib/queries";
import RestaurantHeader from "@/components/RestaurantHeader";
import MenuCategory from "@/components/MenuCategory";

export const revalidate = 300; // ISR protection

export default async function RestaurantPage({ params }) {
  const { restaurant } = params;

  const restaurantData = await client.fetch(restaurantQuery, {
    slug: restaurant,
  });

  if (!restaurantData || !restaurantData.isActive) {
    return <div style={{ padding: 40 }}>Restaurant not available.</div>;
  }

  const categories = await client.fetch(categoriesQuery, {
    slug: restaurant,
  });

  const items = await client.fetch(menuItemsQuery, {
    slug: restaurant,
  });

  return (
    <main style={{ padding: "20px" }}>
      <RestaurantHeader data={restaurantData} />

      {categories.map((cat) => (
        <MenuCategory
          key={cat._id}
          category={cat}
          items={items.filter((i) => i.categoryId === cat._id)}
        />
      ))}
    </main>
  );
}
