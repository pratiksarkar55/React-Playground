import React from "react";
import { Outlet, Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>Products</div>
      <nav>
        {/* doing /feature or /new would take them to localhost:3000/new */}
        <Link to={"featured"}>Featured</Link>
        <Link to={"new"}>New</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
