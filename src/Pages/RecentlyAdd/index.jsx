import React from "react";
import Breadcrumb from "../../Components/BreadCrumb";
import Product from "../../Components/Product";

function index() {
  return (
    <div className="container-fluid">
      <Breadcrumb />
      <div className="content grid grid-cols-2 justify-center items-center md:grid-cols-4 mt-6 md:mt-16 mb-9 md:mb-28 gap-x-4 md:gap-x-8 gap-y-5 md:gap-y-3 ">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default index;
