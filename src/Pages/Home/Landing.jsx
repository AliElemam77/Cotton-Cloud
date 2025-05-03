import React from "react";
import landing from "../../assets/images/landing.png";
import { useTranslation } from "react-i18next";

function Landing() {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full h-[251px] md:h-[430px] relative overflow-hidden mb-9 md:mb-[112px]">
      <img
        src={landing}
        alt=""
        className="w-full h-full object-fill md:object-cover"
      />
      <div className=" p-2 md:p-0 md:px-7 md:py-7 w-[234px] md:w-[823px] h-[196px] md:h-[362px] absolute top-[21px] rounded-xl right-4 backdrop-blur-[10px] backdrop-brightness-75">
        <p className="font-semibold md:font-bold md:leading-tight text-[20px] md:text-[48px] text-white mb-3 md:mb-8">
          {t("landingTitle")}
        </p>
        <p className="font-light md:font-medium text-xs md:text-[16px] md:leading-6  text-third-500 mb-3 md:mb-[42px]">
          {t("landingSubTitle")}
        </p>
        <button className="bg-secondary-550 rounded-lg text-primary-900 px-[14.5px] md:px-[39px] py-[7px] md:py-[16px] text-sm md:text-xl">
          {t("landingButton")}
        </button>
      </div>
    </div>
  );
}

export default Landing;
