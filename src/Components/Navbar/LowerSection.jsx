import React from "react";
// import { BsChevronDown } from "react-icons/bs";
import { NavLink } from "react-router-dom";
function LowerSection() {
  //routes
  return (
    <div className="flex container-fluid items-center justify-between px-4 py-3">
      {/* روابط الناف بار */}
      <div className="items-center justify-center hidden gap-8 md:flex">
        <div className="items-center justify-center hidden gap-8 md:flex">
          <NavLink
            to={""}
            className={({ isActive }) =>
              `transition-all duration-300 ease-in-out hover:text-[#CAA34E] ${
                isActive ? "text-[#CAA34E] font-semibold" : ""
              }`
            }
          >
            الرئيسية
          </NavLink>
          <NavLink
            to={"categories"}
            className={({ isActive }) =>
              `flex items-center transition-all duration-300 ease-in-out hover:text-[#CAA34E] ${
                isActive ? "text-[#CAA34E] font-semibold" : ""
              }`
            }
          >
            الفئات
          </NavLink>
          <NavLink
            to={"ramadan-offers"}
            className={({ isActive }) =>
              `transition-all duration-300 ease-in-out hover:text-[#CAA34E] ${
                isActive ? "text-[#CAA34E] font-semibold" : ""
              }`
            }
          >
            عروض رمضان
          </NavLink>
          <a
            href=""
            className="navbar-ul transition-all duration-300 ease-in-out hover:text-[#CAA34E]"
          >
            الأكثر مبيعا
          </a>
          <NavLink
            to={"recently-added"}
            className={({ isActive }) =>
              `transition-all duration-300 ease-in-out hover:text-[#CAA34E] ${
                isActive ? "text-[#CAA34E] font-semibold" : ""
              }`
            }
          >
            المضافة حديثا
          </NavLink>
          <NavLink
            to={"wholesale"}
            className={({ isActive }) =>
              `transition-all duration-300 ease-in-out hover:text-[#CAA34E] ${
                isActive ? "text-[#CAA34E] font-semibold" : ""
              }`
            }
          >
            قسم الجملة
          </NavLink>
        </div>
      </div>

      {/* search bar بحجم متوسط */}
      <div className="hidden md:flex items-center bg-[#F8F8F8] rounded-2xl px-4 py-2  shadow-sm gap-2">
        <input
          type="text"
          placeholder="بحث"
          className="text-sm bg-[#F8F8F8] focus:outline-none placeholder-gray-400 w-[513px]"
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-500"
        >
          <path
            d="M11.0194 10.5785L13.8745 13.4337L12.9317 14.3765L10.0766 11.5213C9.04996 12.3427 7.74803 12.834 6.33203 12.834C3.02003 12.834 0.332031 10.146 0.332031 6.83398C0.332031 3.52198 3.02003 0.833984 6.33203 0.833984C9.64403 0.833984 12.332 3.52198 12.332 6.83398C12.332 8.24998 11.8407 9.55192 11.0194 10.5785ZM9.68183 10.0839C10.497 9.24372 10.9987 8.09772 10.9987 6.83398C10.9987 4.25565 8.91037 2.16732 6.33203 2.16732C3.7537 2.16732 1.66536 4.25565 1.66536 6.83398C1.66536 9.41232 3.7537 11.5007 6.33203 11.5007C7.59576 11.5007 8.74177 10.999 9.5819 10.1838L9.68183 10.0839Z"
            fill="#6B6B6B"
          />
        </svg>
      </div>
    </div>
  );
}

export default LowerSection;
