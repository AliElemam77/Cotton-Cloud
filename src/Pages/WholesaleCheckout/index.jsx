import React from "react";
import OrderCard from "../../Components/OrderCard";
import Breadcrumb from "../../Components/BreadCrumb";
import Details from "../../Components/ShippingDetails";
import OrderSummary from "../../Components/OrderSummary";

function index() {
  return (
    <div className="container-fluid ">
      <Breadcrumb />

      <div className="md:flex gap-x-9">
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
          <div className="flex flex-col  md:gap-8">
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
        </div>
        <Details />
      </div>
    </div>
  );
}

export default index;
