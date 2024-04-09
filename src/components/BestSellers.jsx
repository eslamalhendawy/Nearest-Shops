import ProductsGrid from "./ProductsGrid";

const BestSellers = () => {
  const products = [
    {
      name: "Product 1",
      price: "33.00",
      category: "Category 1",
      image: "/assets/product1.jpg",
      imageHighRes: "/assets/product1HighRes.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.",
    },
    {
      name: "Product 2",
      price: "33.00",
      category: "Category 2",
      image: "/assets/product2.jpg",
      imageHighRes: "/assets/product2HighRes.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.",
    },
    {
      name: "Product 3",
      price: "33.00",
      category: "Category 3",
      image: "/assets/product3.jpg",
      imageHighRes: "/assets/product3HighRes.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.",
    },
    {
      name: "Product 4",
      price: "33.00",
      category: "Category 4",
      image: "/assets/product4.jpg",
      imageHighRes: "/assets/product4HighRes.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-24">
      <h3 className="text-center font-semibold text-3xl mb-6">Best Selling Products</h3>
      <ProductsGrid products={products} />
    </section>
  );
};

export default BestSellers;
