import React from "react";
import ProductOne from "../../assets/images/placeholder.png";
import ProductTwo from "../../assets//images/Rectangle 10.png";
import OverlayOne from "../../assets/images/wholesaleOverlayLanding.png";
import OverlayTwo from "../../assets/images/wholesaleOverlayLanding2.png";
import WebOverlay from "../../assets/images/wholesaleOverlayLandingWeb1.png";
function Landing() {
  return (
    <div className="bg-secondary-100 overflow-hidden h-[554px] md:h-[430px] flex flex-col md:flex-row-reverse md:gap-x-16  justify-center items-center relative">
      <div className="overlay absolute top-0 right-0 z-0 md:invisible">
        <img src={OverlayOne} alt="" />
      </div>
      <div className="overlay absolute top-0 right-0 z-0 ">
        <img src={WebOverlay} alt="" />
      </div>
      <div className="overlay absolute bottom-0 md:-bottom-4 w-full md:h-[100px]">
        <img src={OverlayTwo} alt="" className="w-full h-full object-fill" />
      </div>

      <div className="images flex items-end">
        <div className="image-card w-[73px] md:w-[164px]  h-[105px] md:h-[234px] overflow-hidden rounded-lg rotate-12 z-30 shadow-lg shadow-black/40">
          <img
            src={ProductTwo}
            alt="منتج"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="image-card w-[99px] md:w-[195px] h-[141px] md:h-[278px] overflow-hidden rounded-lg z-20 mt-2 shadow-lg shadow-black/40">
          <img
            src={ProductOne}
            alt="منتج"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="image-card w-[73px] md:w-[164px]  h-[105px] md:h-[234px] overflow-hidden rounded-lg -rotate-12 z-10 mt-4 shadow-lg shadow-black/40">
          <img
            src={ProductTwo}
            alt="منتج"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div>
        <div className="text bg-white rounded-lg w-[343px] md:w-[620px]  h-[200px] md:h-[224px] mt-6 p-[26px]">
          <p className="text-primary-550 font-semibold md:font-bold md:text-2xl text-[20px] mb-4">
            وفر مع كل كمية تشتريها! اكتشف قسم الجملة الآن
          </p>
          <p className="text-third-800 font-normal text-[12px] md:text-xl">
            في قسم الجملة، كلما زادت الكمية التي تشتريها، زادت التوفيرات التي
            تحصل عليها! اكتشف مجموعة واسعة من المنتجات بأسعار الجملة المميزة،
            ووفر أكثر مع كل طلبية. ابدأ التسوق الآن واستمتع بخصومات كبيرة تناسب
            احتياجاتك
          </p>
        </div>
        <button className="bg-secondary-550 rounded-lg w-[107px] md:w-[193px] h-[30px] md:h-[56px] md:text-xl mt-4">
          اكتشف المزيد
        </button>
      </div>
    </div>
  );
}

export default Landing;
