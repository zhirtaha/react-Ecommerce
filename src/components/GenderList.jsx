import React from "react";
import GenderCard from "./GenderCard";
function GenderList() {
  return <div>
    <div className="container py-3">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-secondary mt-3 fw-bolder">Choose By Gender</h1>
            <hr/>
            <div className="row justify-content-center">
                <GenderCard/>
            </div>
          </div>
        </div>
      </div>
  </div>
}

export default GenderList;
