import { Link } from "react-router-dom";

import ProductOverlay from "./ProductOverlay";

const BestSellers = () => {
  const products = [
    {
      name: "Product 1",
      price: "33.00",
      category: "Category 1",
      image: "/assets/product1.jpg",
    },
    {
      name: "Product 2",
      price: "33.00",
      category: "Category 2",
      image: "/assets/product2.jpg",
    },
    {
      name: "Product 3",
      price: "33.00",
      category: "Category 3",
      image: "/assets/product3.jpg",
    },
    {
      name: "Product 4",
      price: "33.00",
      category: "Category 4",
      image: "/assets/product4.jpg",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-24">
      <h3 className="text-center font-semibold text-3xl mb-6">Best Selling Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-2">
        {products.map((product, index) => (
          <div key={index}>
            <div className="max-w-[300px] max-h-[366px] relative group">
              <ProductOverlay />
              <Link to={`/product/${index + 1}`}>
                <img src={product.image} alt="" />
              </Link>
            </div>
            <div className="p-2">
              <span className="text-[#b1adad] text-xs">{product.category}</span>
              <h5 className="text-xl font-semibold my-2">{product.name}</h5>
              <p className="text-xs font-semibold text-[#706e6e]">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
