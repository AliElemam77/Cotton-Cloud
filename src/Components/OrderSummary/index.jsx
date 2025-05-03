import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function index() {
  const { t, i18n } = useTranslation();
  const navigator = useNavigate();
  return (
    <>
      <div className="order-summary w-full md:w-1/4  flex flex-col">
        <p className="font-semibold text-[24px] mb-8">{t("orderSummary")}</p>
        <div className="details">
          <div className="price flex justify-between">
            <p className="font-bold text-third-700 text-[16px]">السعر</p>
            <p className="font-bold text-third-700 text-[16px]">1000</p>
          </div>
          <hr
            className="hidden lg:block lg:border-t lg:border-third-300 md:block md:border-t
           md:border-third-550 mb-5"
          />
          <div className="sale flex justify-between">
            <p className="font-bold text-third-700 text-[16px]">الخصم</p>
            <p className="font-bold text-third-700 text-[16px]">25%</p>
          </div>
          <hr
            className="hidden lg:block lg:border-t lg:border-third-300 md:block md:border-t
            md:border-third-550 mb-5"
          />
          <div className="delivry flex justify-between">
            <p className="font-bold text-third-700 text-[16px]">التوصيل</p>
            <p className="font-bold text-third-700 text-[16px]">1000</p>
          </div>
          <hr
            className="hidden lg:block lg:border-t lg:border-third-300 md:block md:border-t
            md:border-third-550 mb-8"
          />
          <div className="final-price flex justify-between">
            <p className="font-bold text-lg text-primary-500">السعر النهائي</p>
            <p className="font-bold text-lg text-primary-500">100 ر.س</p>
          </div>
          <div className="grid">
            <button
              onClick={() => {
                navigator("/ckeckout");
              }}
              className="bg-secondary-500 text-white text-sm py-2 rounded-lg mt-4"
            >
              {t("CompleteTheOrder")}
            </button>
            <button className="border border-third-800  text-sm text-primary-550 py-2 rounded-lg mt-4">
              {t("add_to_cart")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
