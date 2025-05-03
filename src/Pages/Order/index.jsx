import React from "react";
import Breadcrumb from "../../Components/BreadCrumb";
import OrderCard from "../../Components/OrderCard";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import OrderSummary from "../../Components/OrderSummary";

function index() {
  const { t, i18n } = useTranslation();
  const navigator = useNavigate();
  return (
    <div className="container-fluid">
      <Breadcrumb />
      <div className="md:flex mt-6 md:mt-9 justify-between ">
        <div className="w-full md:w-2/3 ">
          <div className="hidden md:flex justify-between items-center mb-4">
            <div className="w-[111px] text-center bg-secondary-300 text-sm py-2 rounded-lg font-medium">
              المنتجات
            </div>
            <div className="w-[111px] text-center bg-secondary-300 text-sm py-2 rounded-lg font-medium">
              الوصف
            </div>
            <div className="w-[111px] text-center bg-secondary-300 text-sm py-2 rounded-lg font-medium">
              الكمية
            </div>
            <div className="w-[111px] text-center bg-secondary-300 text-sm py-2 rounded-lg font-medium">
              السعر
            </div>
          </div>
          <div className="flex flex-col md:gap-8">
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}

export default index;
