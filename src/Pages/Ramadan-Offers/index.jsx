import React from "react";
import BreadCrumbs from "../../Components/BreadCrumb/index";
import Product from "../../Components/Product/index";
import bannerImageOne from "../../assets/images/ramadanOne.jpeg";
import bannerImageTwo from "../../assets/images/ramadanTwo.jpeg";
import overlay from "../../assets/images/ramadanOfferOverlay.png";
import { useTranslation } from "react-i18next";
import decoration from "../../assets/images/ramadan-kareem-religious-banner-with-islamic-decoration.png";

function index() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="container-fluid">
        <div className="heading flex items-center justify-between mb-6">
          <BreadCrumbs />
        </div>
        <div className="products grid grid-cols-2 md:grid-cols-4  md:gap-x-5 md:gap-y-7">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      {/* Banner */}
      <div className="offer-bannr w-full h-[203px] md:h-[360px] relative overflow-hidden flex  justify-center mb-9 md:mb-28">
        <img src={overlay} alt="" className="w-full h-full opacity-30" />
        <div className="border-8 md:border-[12px] border-primary-550 w-[230px] md:[410px] h-[203px] md:h-[360px] rounded-s-full  absolute left-[-157px] md:left-[-30px] overflow-hidden">
          <img
            src={bannerImageOne}
            alt=""
            className="w-full h-full object-cover scale-150 "
          />
        </div>
        {/* <div className="absolute md:w-[129px] top-0 right-14">
          <img src={decoration} alt="" className="w-full" />
        </div> */}
        <div className="flex flex-col justify-center items-center mt-8 md:mt-[72px] gap-5 md:gap-10 absolute ">
          <p className="font-bold text-xl md:text-[40px] text-primary-550">
            {t("ramadanOffer")}
          </p>
          <p className="font-medium text-[10px] md:text-[16px] w-[163px] md:w-[620px] text-third-800 text-center">
            نص تجريب يمكن استبداله في هذه المساحة.نص تجريب يمكن استبداله في هذه
            المساحة.نص تجريب يمكن استبداله في هذه المساحة.نص تجريب يمكن استبداله
            في هذه المساحة.نص تجريب يمكن استبداله في هذه المساحة
          </p>
        </div>
        {/* <div className="absolute top-0 left-14">
          <img src={decoration} alt="" />
        </div> */}
        <div className="border-8 md:border-[12px] border-primary-550 w-[230px] md:[410px] h-[203px] md:h-[360px] rounded-e-full absolute right-[-157px] md:right-[-30px] overflow-hidden">
          <img
            src={bannerImageTwo}
            alt=""
            className="w-full h-full object-cover scale-150 "
          />
        </div>
      </div>
      <div className="container-fluid flex flex-col items-center ">
        <p className="mb-6 md:mb-16 text-primary-550 text-[16px] md:text-[28px] font-semibold">
          {t("offerOnBestProducts")}
        </p>
        <div className="products grid grid-cols-2 md:grid-cols-4 gap-x-4  gap-y-5 mb-9 md:mb-28">
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
