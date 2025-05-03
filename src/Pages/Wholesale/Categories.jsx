import React from "react";
import ProductOne from "../../assets/images/placeholder.png";
import ProductTwo from "../../assets//images/Rectangle 10.png";

function Categories() {
  return (
    <div className="md:mt-[142px] hidden md:visible container-fluid md:flex flex-col justify-center items-center gap-y-12">
      <p className="text-center text-primary-550 text-[28px] font-semibold">الفئات</p>
      <div className="flex gap-x-40">
        <div className="">
          <img
            src={ProductOne}
            alt="Product"
            className="w-[193px] h-[172px] rounded-lg object-cover"
          />
          <p className="text-center font-semibold mt-4">أرواب ومناشف</p>
        </div>
        <div className="">
          <img
            src={ProductTwo}
            alt="Product"
            className="w-[193px] h-[172px] rounded-lg object-cover"
          />
          <p className="text-center font-semibold mt-4">أرواب ومناشف</p>
        </div>
        <div className="">
          <img
            src={ProductOne}
            alt="Product"
            className="w-[193px] h-[172px] rounded-lg object-cover"
          />
          <p className="text-center font-semibold mt-4">أرواب ومناشف</p>
        </div>
        <div className="">
          <img
            src={ProductTwo}
            alt="Product"
            className="w-[193px] h-[172px] rounded-lg object-cover"
          />
          <p className="text-center font-semibold mt-4">أرواب ومناشف</p>
        </div>
      </div>
      <div className="flex gap-x-40">
        <div className="">
          <img
            src={ProductOne}
            alt="Product"
            className="w-[193px] h-[172px] rounded-lg object-cover"
          />
          <p className="text-center font-semibold mt-4">أرواب ومناشف</p>
        </div>
        <div className="">
          <img
            src={ProductTwo}
            alt="Product"
            className="w-[193px] h-[172px] rounded-lg object-cover"
          />
          <p className="text-center font-semibold mt-4">أرواب ومناشف</p>
        </div>
        <div className="">
          <img
            src={ProductOne}
            alt="Product"
            className="w-[193px] h-[172px] rounded-lg object-cover"
          />
          <p className="text-center font-semibold mt-4">أرواب ومناشف</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
