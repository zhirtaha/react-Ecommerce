import React from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div>
      <div className="container py-4">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-secondary mt-3 fw-bolder">List of All Products</h1>
            <hr/>
            <div className="row justify-content-center">
                <ProductCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
