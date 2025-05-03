import React from "react";
import image from "../../assets/images/NotFound.png";
import { useTranslation } from "react-i18next";

export default function Notfound() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-screen md:flex-row">
      <div className="w-full md:w-1/2">
        <img className="w-full" loading="lazy" src={image} alt="Notfound" />
      </div>
      <h5 className="text-2xl text-center md:3xl">{t("notfound")}</h5>
    </div>
  );
}
