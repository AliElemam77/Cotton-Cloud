import React from "react";
import Breadcrumd from "../../Components/BreadCrumb";
import product from "../../assets/images/Rectangle 10.png";
import Gallery from "./gallery";
import { useTranslation } from "react-i18next";

function index() {
  const { t } = useTranslation();

  return (
    <div className="container-fluid">
      <Breadcrumd />
      <div className="content flex flex-col md:flex-row gap-5 md:h-[539px]">
        {/* صورة المنتج */}
        <div className="product-image w-full md:w-[900px] h-[176px] md:h-[520px] overflow-hidden rounded-lg mb-2">
          <img
            src={product}
            alt="product"
            className="w-full md:h-full object-cover"
          />
        </div>

        {/* معرض الصور */}
        <Gallery />

        {/* التفاصيل */}
        <div className="md:flex">
          <div className="details">
            <p className="title font-medium md:font-bold text-[16px] md:text-xl md:mb-10">
              اسم المنتج
            </p>
            <p className="desc text-third-800 text-[12px] md:text-[16px] mb-5">
              نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في
              هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن
              استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.
            </p>

            {/* السعر وكمية المنتج */}
            <div className="flex flex-col gap-y-3 mb-6">
              <p className="price text-secondary-500 md:text-[16px] font-bold">
                100 ر.س
              </p>
              <div className="flex items-center rounded-lg border">
                <button
                  type="button"
                  className="size-10 border border-gray-600 rounded-s-lg leading-10 text-gray-600 transition hover:opacity-75"
                >
                  +
                </button>
                <input
                  type="number"
                  value="1"
                  className="h-10 w-16 border-transparent text-center sm:text-sm [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />
                <button
                  type="button"
                  className="size-10 border border-gray-600 rounded-e-lg leading-10 text-gray-600 transition hover:opacity-75"
                >
                  -
                </button>
              </div>
            </div>

            {/* المقاسات */}
            <div className="sizing mb-5">
              <p className="font-medium text-sm mb-3">{t("size")}</p>
              <div className="sizes flex flex-wrap gap-3">
                <p className="bg-third-550 rounded-lg px-5 py-2 text-[12px]">
                  المقاس 1
                </p>
                <p className="bg-third-550 rounded-lg px-5 py-2 text-[12px]">
                  المقاس 1
                </p>
                <p className="bg-third-550 rounded-lg px-5 py-2 text-[12px]">
                  المقاس 1
                </p>
              </div>
            </div>

            {/* حالة المنتج */}
            <div className="flex justify-between mb-7 md:mb-14">
              <div className="px-2 py-[6px] bg-[#DBDEE4] text-[12px] text-third-900 rounded-xl">
                تم بيع 100 قطعة
              </div>
              <div className="px-8 py-[6px] bg-[#DBDEE4] text-[12px] text-green-500 rounded-xl">
                متاحة
              </div>
            </div>

            {/* الأزرار */}
            <div className="buttons flex justify-between gap-x-4">
              <button className="bg-secondary-500 font-light w-1/2 px-5 py-1 rounded-lg">
                {t("add_to_cart")}
              </button>
              <button className="border border-third-800 w-1/2 px-5 py-2 rounded-lg">
                {t("buyNow")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
