import { useEffect, useState } from "react";
import { getData } from "../Services/apiCalls";
import ProductsGrid from "./ProductsGrid";
import SkeletonGrid from "./SkeletonGrid";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getData("products/popular");
      if (response.status === "success") {
        setProducts(response.data.products);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="container mx-auto px-4 py-24">
      <h3 className="text-center font-semibold text-3xl mb-8">Most Popular Products</h3>
      {loading ? <SkeletonGrid /> : <ProductsGrid products={products} /> }
    </section>
  );
};

export default BestSellers;
