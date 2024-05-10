import { useEffect, useState } from "react";
import { getData } from "../Services/apiCalls";
import ProductsGrid from "./ProductsGrid";
import SkeletonGrid from "./SkeletonGrid";

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCollection = async () => {
      const response = await getData("products");
      if (response.status === "success") {
        setProducts(response.data.products);
        setLoading(false);
      }
    };
    fetchCollection();
  }, []);
  return (
    <section className="container mx-auto px-6 py-20 minHeight">
      <h1 className="text-4xl font-[500] mb-8">Collection</h1>
      {loading ? (
        <SkeletonGrid />
      ) : (
        <>
          <p className="mb-6">Showing {products.length} Items</p>
          <ProductsGrid products={products} />
        </>
      )}
    </section>
  );
};

export default Collection;
