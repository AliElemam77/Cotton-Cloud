import React from "react";
import Product from "../../Components/Product";
import tawol from "../../assets/images/Rectangle 10.png";

export default function RecentlyAdded() {
  return (
    <section className="mb-9 md:mb-28">
      <div className="grid justify-center mb-9">
        <p className="text-start mb-6 md:mb-16 text-[16px] md:text-[28px] font-semibold ">
          المضافة حديثا
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
      </div>
      <div className=" bg-secondary-100">
        <div className="container flex justify-between">
        <div className="flex flex-col justify-center gap-3 p-3 text-center md:w-3/4">
          <p className="text-[14px] md:text-[28px] font-semibold text-primary-550 ">
            من السلة إلى باب منزلك – تجربة تسوق سلسة <br />
            مع قطن كلاود.
          </p>
          <p className="text-[10px] md:text-[16px] text-third-800">
            "نوفر لك تجربة تسوق سلسة مع منتجات قطنية عالية الجودة. اختر منتجاتك،
            <br />
            أضفها إلى السلة، واستلمها بسرعة عند باب منزلك. مع هيرو سيشكن، الجودة
            <br />
            والراحة تلتقيان في تجربة تسوق لا تُنسى!"
          </p>
        </div>
        <img
          src={tawol}
          alt=""
          className="w-[180px] h-[204px] md:w-[709px] md:h-[430px]"
        />
        </div>
      </div>
    </section>
  );
}
