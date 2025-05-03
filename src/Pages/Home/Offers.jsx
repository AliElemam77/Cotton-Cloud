import React from "react";
import image from "../../assets/images/ps5-slim-goedkope-playstation_large 1.png";

function Offers() {
  return (
    <div className="container grid justify-center mb-9">
      <p className=" text-start mb-6 md:mb-16 text-[16px] md:text-[28px] font-semibold ">
        تسوق ووفر مع عروضنا الحصرية
      </p>
      <div className="content grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className=" grid gap-8  ">
          <div className="relative overflow-hidden card flex flex-col bg-gradient-to-b from-[#1D1E3D] to-[#B9F3F6] w-[343px] md:w-[620px] h-[214px] md:h-[284px] ">
            <div className="offer bg-secondary-500 text-white w-[174px] h-6 mx-auto text-center">
              خصم 25%
            </div>
            <img
              src={image}
              alt=""
              className="w-[182.5px] md:w-[432px]  h-[171px] md:h-[286px]  absolute bottom-0 md:bottom-[-50px]"
            />
            <div className="bg-opacity-80 rounded-tr gap-[10px] md:gap-4 text-white w-[161px] md:w-[300px] h-[104px] md:h-[128px] p-2  details flex flex-col justify-start bg-primary-550  absolute bottom-0 left-0">
              <p className="font-bold text-[12px] md:text-sm ">اسم المنتج</p>
              <p className="font-normal text-[10px] md:text-[14px] text-[#FAFAFA]">
                نص تجريبي يمكن استبداله في هذه المساحة
              </p>
              <p className="text-end md:text-start underline text-[12px] md:text-sm">
                تسوق الان
              </p>
            </div>
          </div>
          <div className="md:flex md:gap-5">
            <div className="relative mb-5 md:mb-0 overflow-hidden card flex flex-col bg-gradient-to-b from-[#1D1E3D] to-[#B9F3F6] w-[343px] md:w-[300px] h-[214px] md:h-[284px]">
              <div className="offer bg-secondary-500 text-white w-[174px] h-6 mx-auto text-center">
                خصم 25%
              </div>
              <img
                src={image}
                alt=""
                className="w-[182.5px] md:w-[263px] h-[171px] md:h-[237px] absolute bottom-0  md:left-[-10px]"
              />
              <div className="bg-opacity-80 rounded-tr md:rounded-tr-xl gap-[10px] md:gap-4 text-white w-[161px] md:w-[193px] h-[104px] md:h-[144px] p-2  details flex flex-col justify-start bg-primary-550  absolute bottom-0 left-0">
                <p className="font-bold text-[12px] md:text-sm">اسم المنتج</p>
                <p className="font-normal text-[10px] text-[#FAFAFA] text-sm">
                  نص تجريبي يمكن استبداله في هذه المساحة
                </p>
                <p className="text-end  md:text-start underline text-[12px] md:text-sm">
                  تسوق الان
                </p>
              </div>
            </div>
            <div className="relative mb-5 md:mb-0 overflow-hidden card flex flex-col bg-gradient-to-b from-[#1D1E3D] to-[#B9F3F6] w-[343px] md:w-[300px] h-[214px] md:h-[284px]">
              <div className="offer bg-secondary-500 text-white w-[174px] h-6 mx-auto text-center">
                خصم 25%
              </div>
              <img
                src={image}
                alt=""
                className="w-[182.5px] md:w-[263px] h-[171px] md:h-[237px] absolute bottom-0  md:left-[-10px]"
              />
              <div className="bg-opacity-80 rounded-tr md:rounded-tr-xl gap-[10px] md:gap-4 text-white w-[161px] md:w-[193px] h-[104px] md:h-[144px] p-2  details flex flex-col justify-start bg-primary-550  absolute bottom-0 left-0">
                <p className="font-bold text-[12px] md:text-sm">اسم المنتج</p>
                <p className="font-normal text-[10px] text-[#FAFAFA] text-sm">
                  نص تجريبي يمكن استبداله في هذه المساحة
                </p>
                <p className="text-end  md:text-start underline text-[12px] md:text-sm">
                  تسوق الان
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden card flex flex-col bg-gradient-to-b from-[#1D1E3D] to-[#B9F3F6] w-[343px] md:w-[621px] h-[214px] md:h-[600px] ">
          <div className="offer bg-secondary-500 text-white w-[174px] h-6 mx-auto text-center">
            خصم 25%
          </div>
          <img
            src={image}
            alt=""
            className="w-[182.5px] md:w-[511px] h-[171px] md:h-[479px] absolute bottom-0"
          />
          <div className="bg-opacity-80 rounded-tr gap-[10px] text-white w-[161px] md:w-[300px] h-[104px] md:h-[128px] p-2  details flex flex-col justify-start bg-primary-550  absolute bottom-0 left-0">
            <p className="font-bold text-[12px] md:text-sm">اسم المنتج</p>
            <p className="font-normal text-[10px] text-[#FAFAFA] md:text-[14px]">
              نص تجريبي يمكن استبداله في هذه المساحة
            </p>
            <p className="text-end md:text-start underline text-[12px] md:text-[16px]">
              تسوق الان
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
