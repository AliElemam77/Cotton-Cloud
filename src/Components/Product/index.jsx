import React from "react";
import img from "../../../public/placeholder.png";
import { useTranslation } from "react-i18next";
import CartButton from "../CartButton/index";
import ColorSelector from "../ColorsSelector";

function index() {
  const { t, i18n } = useTranslation();

  return (
    <article className="group overflow-hidden w-[163px] h-[289px] rtl:text-start shadow-lg sm:h-[442px] sm:w-[300px] ">
      <div className="overflow-hidden relative h-[117px] sm:h-[200px]">
        <div className="absolute flex justify-between left-2 right-2 top-3">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 0C17.5376 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.35997 0 9 1 10 2C11 1 12.64 0 14.5 0ZM10.9339 15.6038C11.8155 15.0485 12.61 14.4955 13.3549 13.9029C16.3337 11.533 18 8.9435 18 6C18 3.64076 16.463 2 14.5 2C13.4241 2 12.2593 2.56911 11.4142 3.41421L10 4.82843L8.5858 3.41421C7.74068 2.56911 6.5759 2 5.5 2C3.55906 2 2 3.6565 2 6C2 8.9435 3.66627 11.533 6.64514 13.9029C7.39 14.4955 8.1845 15.0485 9.0661 15.6038C9.3646 15.7919 9.6611 15.9729 10 16.1752C10.3389 15.9729 10.6354 15.7919 10.9339 15.6038Z"
              fill="#1D1E3D"
            />
          </svg>

          <div className=" bg-info text-white text-[10px] px-2 py-[2px] rounded ">
            {t("new")}
          </div>
        </div>

        <img src={img} alt="image" className="h-[100%] w-[100%] object-cover" />
      </div>

      <div className=" h-[143px] p-2 text-primary-400 text-[12px] flex flex-col justify-between md:p-6 md:text-[16px] md:h-[224px]">
        <h4>{t("category")}</h4>

        <h3 className="font-semibold text-primary-550">اسم المنتج</h3>

        <div className="overflow-hidden mt-[-4px] mb-2">
          <p> نص تجريبي يمكن استبداله في هذه المساحة</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-[0.75rem] font-semibold text-third-900 md:text-[20px] ">
            100 ر.س
          </p>
          <CartButton />
        </div>
      </div>
    </article>
  );
}

export default index;
