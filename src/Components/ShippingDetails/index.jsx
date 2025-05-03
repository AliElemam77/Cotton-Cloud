import React from "react";
import visa from "../../assets/images/visa.png";
import mastercard from "../../assets/images/masterCard.png";

function index() {
  return (
    <section className="w-full mb-8">
      <div className="w-full bg-white rounded-xl mt-9 p-6 shadow-md">
        <p className="text-primary-500 text-lg font-medium mb-[38px]">
          بيانات الشحن
        </p>
        <div className="details-form grid gap-y-8">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-[12px] font-medium text-primary-550"
            >
              الاسم
            </label>
            <input
              type="text"
              id="name"
              placeholder="الاسم"
              className="bg-[#F8F8F8] rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="address"
              className="text-[12px] font-medium text-primary-550"
            >
              العنوان
            </label>
            <input
              type="text"
              id="address"
              placeholder="العنوان"
              className="bg-[#F8F8F8] rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-[12px] font-medium text-primary-550"
            >
              رقم الهاتف
            </label>
            <input
              type="text"
              id="phone"
              placeholder="رقم الهاتف"
              className="bg-[#F8F8F8] rounded-lg p-2"
            />
          </div>
        </div>
      </div>

      <div className="payment-method w-full bg-white rounded-xl mt-9 p-6 shadow-md">
        <p className="text-primary-500 text-lg font-medium mb-[38px]">
          طريقة الدفع
        </p>
        <div className="grid gap-y-6">
          <div className="flex items-center gap-x-[22px]">
            <input
              type="radio"
              name="method"
              className="peer hidden"
              defaultChecked
            />
            <span
              className="w-5 h-5 rounded-full border-2 border-black 
              peer-checked:border-yellow-500 peer-checked:bg-yellow-500 
              peer-checked:scale-110 transition-all duration-200"
            ></span>
            <div className="methods flex items-center">
              <div className="w-[50px] h-[33px] p-2 overflow-hidden ">
                <img
                  src={mastercard}
                  alt="master card"
                  className="w-full object-contain"
                />
              </div>
              <div className="w-[50px] h-[33px] p-2 overflow-hidden rounded-md border border-black">
                <img
                  src={visa}
                  alt="visa"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-4 ">
            <input type="radio" name="method" className="peer hidden" />
            <span
              className="w-5 h-5 rounded-full border-2 border-black 
              peer-checked:border-yellow-500 peer-checked:bg-yellow-500 
              peer-checked:scale-110 transition-all duration-200"
            ></span>
            <p className="font-medium text-[#6A6D70] text-sm">
              كاش عند التوصيل
            </p>
          </div>
        </div>
      </div>

      <div className="payment-details mt-9 grid gap-y-6">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium text-primary-550"
          >
            الاسم
          </label>
          <input
            type="text"
            id="name"
            placeholder="ادخل الاسم"
            className="bg-white w-full rounded-lg mt-3 p-2"
          />
        </div>
        <div>
          <label
            htmlFor="cardNumber"
            className="text-sm font-medium text-primary-550"
          >
            رقم الكارت
          </label>
          <input
            type="number"
            id="cardNumber"
            placeholder="ادخل رقم الكارت"
            className="bg-white w-full rounded-lg mt-3 p-2"
          />
        </div>
        <div className="flex gap-x-4">
          <div className="w-full">
            <label
              htmlFor="expiryDate"
              className="text-sm font-medium text-primary-550"
            >
              تاريخ الانتهاء
            </label>
            <input
              type="number"
              id="expiryDate"
              placeholder="xx-xx-xxxx"
              className="bg-white w-full rounded-lg mt-3 p-2"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="cvv"
              className="text-sm font-medium text-primary-550"
            >
              CVV
            </label>
            <input
              type="number"
              id="cvv"
              placeholder=""
              className="bg-white w-full rounded-lg mt-3 p-2"
            />
          </div>
        </div>
        <div className="buttons flex gap-x-4">
          <button className="bg-secondary-550 w-1/2 py-2 rounded-lg text-[12px] text-primary-900">
            اتمام الدفع
          </button>
          <button className="bg-white w-1/2 py-2 border border-third-800 rounded-lg text-[12px] text-primary-900">
            اضافة بروموكود
          </button>
        </div>
      </div>
    </section>
  );
}

export default index;
