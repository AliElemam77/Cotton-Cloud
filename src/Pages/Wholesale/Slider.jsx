import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductOne from "../../assets/images/placeholder.png";
import ProductTwo from "../../assets//images/ps5-slim-goedkope-playstation_large 1.png";

function Slider() {
  const categories = [
    {
      name: "واقي مراتب",
      image: ProductTwo,
    },
    {
      name: "مخدات",
      image: ProductOne,
    },
    {
      name: "لباد",
      image: ProductTwo,
    },
    {
      name: "أرواب ومناشف",
      image: ProductOne,
    },
  ];
  return (
    <div className="categories-slider visible md:hidden mt-9">
      <p className="text-center mb-6 font-semibold text-[16px] text-primary-550">الفئات</p>

      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3.2}
        dir="rtl"
        className="px-4"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center gap-2">
              <div className="w-[90px] h-[90px] rounded-xl overflow-hidden shadow-md">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-[14px] font-bold text-[#0B1033]">
                {cat.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
