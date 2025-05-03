import React from "react";
import product from "../../assets/images/Rectangle 10.png";

function Gallery() {
  return (
    <div className="flex md:flex-col justify-between mb-5">
      <div className="w-[90px] md:w-[193px] h-[51px] md:h-[110px] overflow-hidden rounded-lg ">
        <img src={product} alt="product" className="w-full" />
      </div>
      <div className="w-[90px] md:w-[193px] h-[51px] md:h-[110px] overflow-hidden rounded-lg ">
        <img src={product} alt="product" className="w-full" />
      </div>
      <div className="w-[90px] md:w-[193px] h-[51px] md:h-[110px] overflow-hidden rounded-lg ">
        <img src={product} alt="product" className="w-full" />
      </div>
    </div>
  );
}

export default Gallery;
