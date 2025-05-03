import React from "react";
import img from "../../assets/images/Rectangle 10.png";

function index() {
  return (
    <section className="flex items-center text-right  md:gap-x-[52px]">
      <div className="w-[102px] md:w-[210px] h-[95px] md:h-[153px] overflow-hidden rounded-md ml-3 md:ml-0">
        <img src={img} alt="المنتج" className="w-full" />
      </div>

      <div className="flex justify-between">
        <div className="md:w-[140px]">
          <h4 className="font-bold text-sm md:text-lg mb-1">اسم المنتج</h4>
          <p className="text-gray-500 text-[10px] md:text-[12px]">
            نص تجريبي يمكن استبداله في هذه المساحة.
          </p>
        </div>
        <div className="delete md:invisible">
          <svg
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.93996 4.50077L7.80662 1.64077C7.93216 1.51524 8.00269 1.34498 8.00269 1.16744C8.00269 0.989907 7.93216 0.819644 7.80662 0.694108C7.68109 0.568572 7.51083 0.498047 7.33329 0.498047C7.15576 0.498047 6.9855 0.568572 6.85996 0.694108L3.99996 3.56077L1.13996 0.694108C1.01442 0.568572 0.84416 0.498047 0.666626 0.498047C0.489092 0.498047 0.318828 0.568572 0.193293 0.694108C0.0677568 0.819644 -0.00276852 0.989907 -0.00276852 1.16744C-0.00276852 1.34498 0.0677568 1.51524 0.193293 1.64077L3.05996 4.50077L0.193293 7.36077C0.130807 7.42275 0.081211 7.49648 0.0473652 7.57772C0.0135194 7.65896 -0.00390625 7.7461 -0.00390625 7.83411C-0.00390625 7.92212 0.0135194 8.00925 0.0473652 8.09049C0.081211 8.17173 0.130807 8.24546 0.193293 8.30744C0.255268 8.36993 0.329002 8.41952 0.410241 8.45337C0.491481 8.48721 0.578618 8.50464 0.666626 8.50464C0.754634 8.50464 0.841771 8.48721 0.92301 8.45337C1.00425 8.41952 1.07798 8.36993 1.13996 8.30744L3.99996 5.44077L6.85996 8.30744C6.92193 8.36993 6.99567 8.41952 7.07691 8.45337C7.15815 8.48721 7.24528 8.50464 7.33329 8.50464C7.4213 8.50464 7.50844 8.48721 7.58968 8.45337C7.67092 8.41952 7.74465 8.36993 7.80662 8.30744C7.86911 8.24546 7.91871 8.17173 7.95255 8.09049C7.9864 8.00925 8.00382 7.92212 8.00382 7.83411C8.00382 7.7461 7.9864 7.65896 7.95255 7.57772C7.91871 7.49648 7.86911 7.42275 7.80662 7.36077L4.93996 4.50077Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <div className="w-[180px] flex flex-col items-center gap-2">
        <button className="text-gray-400 invisible md:visible text-sm">
          🗑️
        </button>

        <div className="flex items-center gap-2 border rounded px-2 py-1">
          <button className="text-gray-500">-</button>
          <span className="font-semibold">2</span>
          <button className="text-gray-500">+</button>
        </div>
      </div>

      {/* السعر */}
      <div className="w-[130px] text-center">
        <p className="text-lg font-bold text-primary-600">100 رس</p>
        <p className="text-gray-300 line-through invisible md:visible text-sm">
          200 رس
        </p>
      </div>
    </section>
  );
}

export default index;
