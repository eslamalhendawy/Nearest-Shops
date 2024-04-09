import { Link } from "react-router-dom";

import ProductOverlay from "./ProductOverlay";

const ProductsGrid = ({products}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-2">
        {products.map((product, index) => (
          <div key={index}>
            <div className="max-w-[300px] max-h-[366px] relative group">
              <ProductOverlay data={product} />
              <Link to={`/product/${index + 1}`}>
                <img src={product.image} alt="" />
              </Link>
            </div>
            <Link to={`/product/${index + 1}`}>
              <div className="p-2">
                <span className="text-[#b1adad] text-xs">{product.category}</span>
                <h5 className="text-xl font-semibold my-2">{product.name}</h5>
                <p className="text-xs font-semibold text-[#706e6e]">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
  )
}

export default ProductsGrid