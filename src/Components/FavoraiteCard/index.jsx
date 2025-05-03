import React from "react";
import product from "../../assets/images/Rectangle 10.png";
import CartButton from "../CartButton/index";

export default function index() {
  return (
    <>
      <section className="container flex bg-white shadow-lg">
        <div className="image md:w-[407px] md:h-[221px] ">
          <img src={product} alt="product" className="w-full h-full" />
        </div>
        <div className="w-full p-3 content md:p-6">
          <div className="text">
            <p className="text-[12px] text-third-900 mb-3 md:mb-4">الفئة</p>
            <p className="mb-2 text-sm font-medium md:text-base md:font-bold">
              اسم المنتج
            </p>
            <p className="text-[12px] md:text-sm  text-third-700 mb-3 md:mb-6">
              نص تجريبي يمكن استبداله في هذه المساحة.
              <br /> نص تجريبي يمكن استبداله في هذه المساحة.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-primary-400  text-[12px] md:text-sm font-medium">
              100 ر.س
            </p>

            <CartButton />
          </div>
        </div>
      </section>
    </>
  );
}
