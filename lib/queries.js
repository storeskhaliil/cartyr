export const restaurantQuery = `
*[_type == "restaurant" && slug.current == $slug][0]{
  _id,
  name,
  description,
  logo,
  coverImage,
  isActive
}
`;

export const categoriesQuery = `
*[_type == "menuCategory" && restaurant->slug.current == $slug] | order(order asc) {
  _id,
  title
}
`;

export const menuItemsQuery = `
*[_type == "menuItem" && restaurant->slug.current == $slug && isAvailable == true] | order(order asc) {
  _id,
  name,
  description,
  price,
  image,
  "categoryId": category->_id
}
`;
