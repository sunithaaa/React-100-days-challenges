import React from "react";
import productsData from "../data/challenge1";

const Challenge1 = () => {
  return (
    <>
      <div className="border rounded m-4">
        <h1 className="text-3xl font-bold px-4 py-2">Products List</h1>
        <p className="p-4">Total Products : {productsData.length}</p>
      </div>
      <div>
        {productsData.length === 0
          ? <div className="px-4 font-bold">No Products Available</div>
          : productsData.map((prod) => (
              <div key={prod.id} className="border m-4 flex justify-between">
                <div className="px-4 py-2">
                  <div className="font-bold text-lg">{prod.name}</div>
                  <div>{prod.price}</div>
                </div>

                <div className="flex items-center px-4">
                  {prod.inStock ? "In Stock" : "Out Of Stock"}
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default Challenge1;
