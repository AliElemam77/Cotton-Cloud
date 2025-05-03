import React from "react";
import Product from "../../Components/Product";
// import Product from "../Product";

export default function BestSellers() {
  return (
    <section className="grid justify-center mb-9 md:mb-40">
      <p className="text-start mb-6 md:mb-16 text-[16px] md:text-[28px] font-semibold ">
        المنتجات الأكثر مبيعا
      </p>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  </section>
  )
}

