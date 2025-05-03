import React from "react";
import Breadcrumd from "../../Components/BreadCrumb";
import FavoraiteCard from "../../Components/FavoraiteCard";
import Product from "../../Components/Product";
import { useTranslation } from "react-i18next";

function index() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container-fluid">
      <Breadcrumd />
      <div className="content mt-6 md:mt-16 mb-9 md:mb-28  ">
        <div className="card grid gap-4 md:gap-[34px] mb-9 md:mb-[104px]">
          <FavoraiteCard />
          <FavoraiteCard />
          <FavoraiteCard />
          <FavoraiteCard />
          <FavoraiteCard />
        </div>
        <div className="recommended-products">
          <p className="heading font-semibold md:font-bold text-xl md:text-[28px] text-primary-550 mb-6 md:mb-8">
            {t("ProductsYouMayLike")}
          </p>
          <div className="content grid grid-cols-2 md:grid-cols-4 gap-y-5 md:gap-x-5">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
