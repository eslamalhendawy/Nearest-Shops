import { Link } from "react-router-dom";

import ProductOverlay from "./ProductOverlay";

const ProductsGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-2">
      {products.map((product, index) => (
        <div className="group" key={index}>
          <div className="w-[300px] h-[366px] relative group">
            <ProductOverlay data={product} />
            <Link className="block h-full" to={`/product/${product.slug}`}>
              <img className="w-full h-full opacity-80 group-hover:opacity-100 duration-200" src={product.images[0]} alt={product.name} />
            </Link>
          </div>
          <Link to={`/product/${index + 1}`}>
            <div className="p-2">
              <span className="text-[#b1adad] text-xs group-hover:text-accent duration-200">{product.category.name}</span>
              <h5 className="text-xl font-semibold my-2 group-hover:text-accent duration-200">{product.name}</h5>
              <p className="text-xs font-semibold text-[#706e6e] group-hover:text-accent duration-200">${product.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
