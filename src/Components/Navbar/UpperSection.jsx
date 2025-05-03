import React, { useState } from "react";
import Logo from "../../assets/images/navLogo.png";
import { NavLink } from "react-router-dom";

function UpperSection() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="flex items-stretch justify-between">
        <div className="hidden gap-3 md:flex items-center">
          <NavIcons />
        </div>

        <div className="logo w-[60px] md:w-[84px]">
          <a href="">
            <img className="w-full" src={Logo} alt="لوجو" />
          </a>
        </div>

        <button className="hidden md:block bg-secondary-550 py-2 w-[193px] rounded-lg text-sm text-primary-900">
          تسجيل دخول
        </button>

        <button
          className="w-6 md:hidden"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H18V2H0V0ZM0 7H12V9H0V7ZM0 14H18V16H0V14Z"
              fill="#1D1E3D"
            />
          </svg>
        </button>
      </nav>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-4 flex flex-col gap-4 md:hidden">
          <div className="flex justify-end">
            <button onClick={() => setSidebarOpen(false)}>
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
            </button>
          </div>

          <NavLink
            to=""
            className={({ isActive }) =>
              `transition-all duration-300 ease-in-out hover:text-[#CAA34E] ${
                isActive ? "text-[#CAA34E] font-semibold" : ""
              }`
            }
          >
            الرئيسية
          </NavLink>

          <NavLink
            to="categories"
            className={({ isActive }) =>
              `transition-all duration-300 ease-in-out hover:text-[#CAA34E] ${
                isActive ? "text-[#CAA34E] font-semibold" : ""
              }`
            }
          >
            الفئات
          </NavLink>

          <NavLink
            to="ramadan-offers"
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
            className="transition-all duration-300 ease-in-out hover:text-[#CAA34E]"
          >
            الأكثر مبيعا
          </a>

          <NavLink
            to="recently-added"
            className={({ isActive }) =>
              `transition-all duration-300 ease-in-out hover:text-[#CAA34E] ${
                isActive ? "text-[#CAA34E] font-semibold" : ""
              }`
            }
          >
            المضافة حديثا
          </NavLink>

          <NavLink
            to="wholesale"
            className={({ isActive }) =>
              `transition-all duration-300 ease-in-out hover:text-[#CAA34E] ${
                isActive ? "text-[#CAA34E] font-semibold" : ""
              }`
            }
          >
            قسم الجملة
          </NavLink>

          <div className="flex gap-4 mt-4">
            <NavIcons />
          </div>
        </div>
      )}
    </>
  );
}

function NavIcons() {
  return (
    <>
      <NavLink
        to="notifications"
        className={({ isActive }) =>
          `p-1 transition-all duration-300 ease-in-out ${
            isActive ? "text-[#CAA34E]" : "text-[#1D1E3D]"
          } hover:text-[#CAA34E]`
        }
      >
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 15H20V17H0V15H2V8C2 3.58172 5.58172 0 10 0C14.4183 0 18 3.58172 18 8V15ZM16 15V8C16 4.68629 13.3137 2 10 2C6.68629 2 4 4.68629 4 8V15H16ZM7 19H13V21H7V19Z" />
        </svg>
      </NavLink>

      <NavLink
        to="favoraite-products"
        className={({ isActive }) =>
          `p-1 transition-all duration-300 ease-in-out ${
            isActive ? "text-[#CAA34E]" : "text-[#1D1E3D]"
          } hover:text-[#CAA34E]`
        }
      >
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.5 0C17.5376 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.35997 0 9 1 10 2C11 1 12.64 0 14.5 0ZM10.9339 15.6038C11.8155 15.0485 12.61 14.4955 13.3549 13.9029C16.3337 11.533 18 8.9435 18 6C18 3.64076 16.463 2 14.5 2C13.4241 2 12.2593 2.56911 11.4142 3.41421L10 4.82843L8.5858 3.41421C7.74068 2.56911 6.5759 2 5.5 2C3.55906 2 2 3.6565 2 6C2 8.9435 3.66627 11.533 6.64514 13.9029C7.39 14.4955 8.1845 15.0485 9.0661 15.6038C9.3646 15.7919 9.6611 15.9729 10 16.1752C10.3389 15.9729 10.6354 15.7919 10.9339 15.6038Z" />
        </svg>
      </NavLink>

      <NavLink
        to="order"
        className={({ isActive }) =>
          `p-1 transition-all duration-300 ease-in-out ${
            isActive ? "text-[#CAA34E]" : "text-[#1D1E3D]"
          } hover:text-[#CAA34E]`
        }
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.00436 5.41686L0.761719 2.17422L2.17593 0.76001L5.41857 4.00265H20.6603C21.2126 4.00265 21.6603 4.45037 21.6603 5.00265C21.6603 5.09997 21.6461 5.19678 21.6182 5.29L19.2182 13.29C19.0913 13.713 18.7019 14.0027 18.2603 14.0027H6.00436V16.0027H17.0044V18.0027H5.00436C4.45207 18.0027 4.00436 17.5549 4.00436 17.0027V5.41686ZM6.00436 6.00265V12.0027H17.5163L19.3163 6.00265H6.00436ZM5.50436 22.0027C4.67593 22.0027 4.00436 21.3311 4.00436 20.5027C4.00436 19.6742 4.67593 19.0027 5.50436 19.0027C6.33279 19.0027 7.00436 19.6742 7.00436 20.5027C7.00436 21.3311 6.33279 22.0027 5.50436 22.0027ZM17.5044 22.0027C16.6759 22.0027 16.0044 21.3311 16.0044 20.5027C16.0044 19.6742 16.6759 19.0027 17.5044 19.0027C18.3328 19.0027 19.0044 19.6742 19.0044 20.5027C19.0044 21.3311 18.3328 22.0027 17.5044 22.0027Z" />
        </svg>
      </NavLink>
    </>
  );
}

export default UpperSection;
