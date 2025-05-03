import React from "react";
import logo from "../../assets/images/navLogo.png";
export default function Index() {
  return (
    <section className="my-8 container-fluid">
      <div className="relative min-h-[90dvh] rounded-lg lg:grid lg:grid-cols-2 md:rounded-2xl lg:before:bg-primary-550 lg:before:absolute lg:before:inset-0 lg:before:z-[-1] lg:before:rounded-3xl  lg:before:transform lg:before:rotate-3 ">
        <div className="flex flex-col justify-around p-4 lg:bg-main lg:shadow-inner lg:-translate-x-5 rounded-3xl md:justify-center ">
          <div className="md:mx-auto md:w-96">
            <div className="mx-auto w-fit mb-14 md:mb-20">
              <img src={logo} alt="Logo" />
            </div>
            <h3 className="mb-10 text-xl font-semibold text-center text-primary-600 md:mb-12 md:text-3xl">
              تسجيل الدخول
            </h3>
            <form className="flex flex-col gap-y-2 md:gap-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 md:text-base"
                >
                  ادخل الاسم{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="ادخل الاسم"
                  className="block w-full p-2 text-xs text-gray-900 outline-none md:py-3 rounded-xl focus:ring-1 focus:ring-secondary-550"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 md:text-base"
                >
                  رقم الجوال
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="ادخل رقم الجوال"
                  className="block w-full p-2 text-xs text-gray-900 outline-none md:py-3 rounded-xl focus:ring-1 focus:ring-secondary-550"
                />
              </div>
              <div>
                <button className="block mx-auto rounded-lg my-4 bg-secondary-550 p-[8px] w-32 md:w-full hover:bg-secondary-600">
                  تسجيل دخول
                </button>
              </div>
              <div className="inline-flex items-center justify-center w-full gap-x-2">
                <hr className="w-64 h-px my-4 border-0 bg-third-600" />
                <span className="absolute px-2 text-xs -translate-x-1/2 bg-main text-third-800 left-1/2 ">
                  {" "}
                  لا يوجد لدي حساب{" "}
                  <a
                    href="#"
                    className="underline text-secondary-500 hover:text-secondary-600 "
                  >
                    {" "}
                    انشاء حساب جديد
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className='hidden lg:visible lg:h-[700px] p-4 lg:bg-[url("https://s3-alpha-sig.figma.com/img/e29a/635c/456aa0a2570f51817b41679a1d3404a1?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=o~CBo~aw9vvKp~3gyUgKdF7WWK-uR0scWJ5lEpD65kapjDRF33AymuyvDMIV4a-owgqTcEt22PVcRCnugxnWzzu5ot7XnT1pwU6oEeMiuPnN1lViKQMLrExVhMP2Ve-QaZCHkuK6zK3O8L0mekpL6s1zJFfgqaPOwHXK6pw6wsuckTB4iqOeLoQb-x7d0E4Ug4hRXPA6~sS9A~hLOnUaes4NprCOvPWK8ooAwiN5FTTipcofgZJDU~BGcRstcNe85KVWHBgS7NjkZWeDqgu89LQlunl04h8hnhmdunt9elk5UlhfEXItzlkzWLF9WYP2RkNvfInnEnx8PvCtzrU4eQ__")] lg:flex lg:justify-center lg:items-end lg:bg-cover lg:bg-center lg:rounded-e-3xl'>
          <div className="p-10 text-center text-white bg-white bg-opacity-20 rounded-3xl backdrop-blur-xl">
            <h3 className="font-semibold">اهلا بكم في متجرنا</h3>
            <p>احصل علي افضل العروض والخصومات الخاصة بالمتجر</p>
            {/* slider here */}
          </div>
        </div>
      </div>
    </section>
  );
}
