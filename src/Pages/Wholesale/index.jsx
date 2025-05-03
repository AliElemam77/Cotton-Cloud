import React from "react";
import Landing from "./Landing";
import Silder from "./Slider";
import Categories from "./Categories";
import Product from "../../Components/Product";
import tabby from "../../assets/tabby.png";
import tamara from "../../assets/tamara.png";
import flower from "../../assets/images/cotton-flower.png";
import product from "../../assets/images/Rectangle 10.png";

function index() {
  return (
    <div className="">
      <Landing />
      <Silder />
      <Categories />
      {/* المضافة حديثا */}
      <div className="container-fluid mb-9 md:mb-28">
        <div className="flex justify-between items-center  mt-9 md:mt-32">
          <p className="font-semibold text-[16px] md:text-[28px] text-primary-550">
            المضافة حديثا
          </p>
          <p className="font-light text-secondary-550 text-xs md:text-xl">
            عرض المزيد
          </p>
        </div>
        <div className="flex flex-wrap md:grid md:grid-cols-4 gap-y-3 gap-x-3 justify-center mt-6 md:mt-16 ">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <div className="bg-[#F4EDDB] mt-9 py-4 md:py-[54px]">
        <div className="container-fluid gap-y-5 flex flex-col md:flex-row justify-center md:justify-between">
          <p className="font-bold text-xl md:text-4xl text-center">
            قسّط مشترياتك بسهولة مع تابي أو تمارا
          </p>
          <div className="flex items-center justify-center gap-x-3 ">
            <div className="w-[70px] md:w-[133px]">
              <img src={tabby} alt="tabby" className="w-full" />
            </div>
            <div className="w-[70px] md:w-[133px]">
              <img src={tamara} alt="tamara" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* الأكثر مبيعا */}
      <div className="container-fluid mb-9 md:mb-28">
        <div className="flex  items-center  mt-9 md:mt-32">
          <p className="font-semibold text-[16px] md:text-[28px] text-primary-550">
            الأكثر مبيعا
          </p>
        </div>
        <div className="flex flex-wrap md:grid md:grid-cols-4 gap-y-3 gap-x-3 justify-center mt-6 md:mt-16 ">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      {/* banner */}
      <div className="h-[370px] md:h-[430px] relative mb-9 md:mb-28">
        <img src={flower} alt="" className="h-full md:w-full md:object-cover" />
        <div
          className="absolute 
        w-full h-full top-0 bg-gradient-to-r 
        from-[#1D1E3D] to-[#1D1E3D4D] flex flex-col md:flex-row 
        justify-center items-center gap-y-3 md:gap-x-3"
        >
          <p className="font-bold text-white text-[16px] md:text-4xl  text-center">
            جودة عالية + خصومات جملة
            <br /> مذهلة! وفر مع كل كمية
          </p>
          <div className="md:h-full overflow-hidden">
            <img src={product} alt="منتج" className="md:h-full " />
          </div>
          <p className="text-center text-xs md:text-[18px] text-white leading-snug ">
            منتجات عالية الجودة بخصومات جملة مذهلة!
            <br /> كلما اشتريت أكثر، وفرت أكثر. اكتشف العروض الآن
            <br className="hidden md:block" /> واستمتع بالتوفير
          </p>
        </div>
      </div>
      {/* منتجات قد تعجبك */}
      <div className="container-fluid mb-6">
        <div className="flex  items-center  mt-9 md:mt-32">
          <p className="font-semibold text-[16px] md:text-[28px] text-primary-550">
            منتجات قد تعجبك
          </p>
        </div>
        <div className="flex flex-wrap md:grid md:grid-cols-4 gap-y-3 gap-x-3 justify-center mt-6 md:mt-16 ">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default index;
