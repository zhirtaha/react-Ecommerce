import React from "react";
import CategoryCard from "./CategoryCard";
function CategoriesList() {
  return <div>
    <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-secondary mt-4">Choose from categories</h1>
            <hr/>
            <div className="row justify-content-center">
                <CategoryCard/>
            </div>
          </div>
        </div>
      </div>
  </div>
}

export default CategoriesList;
