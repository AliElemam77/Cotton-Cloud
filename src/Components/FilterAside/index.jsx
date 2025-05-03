import React, { useState } from "react";
import { Slider, Checkbox, CheckboxGroup } from "@heroui/react";
// import { Checkbox, CheckboxGroup } from "@heroui/react";

export default function index() {
  return (
    // <section className="flex flex-col items-center justify-center grow">
      <aside className="p-4 bg-white border rounded-lg">
        <h4 className="mb-4 text-3xl">تصنيف</h4>
        <div className="flex flex-col gap-y-4">
          <div>
            <h5 className="mb-3 font-semibold">الفئة</h5>
            <div className="flex flex-col gap-y-2 text-third-700">
              {/* should be edited */}
              <input
                id="test7"
                type="checkbox"
                className="hidden w-4 h-4 p-4 peer"
              />
              <label
                htmlFor="test7"
                className="cursor-pointer peer-checked:text-secondary-550"
              >
                فئة 1
              </label>
              <input
                id="test5"
                type="checkbox"
                className="hidden w-4 h-4 p-4 peer"
              />
              <label
                htmlFor="test5"
                className="cursor-pointer peer-checked:text-secondary-550"
              >
                فئة 1
              </label>
              <input
                id="test4"
                type="checkbox"
                className="hidden w-4 h-4 p-4 peer"
              />
              <label
                htmlFor="test4"
                className="cursor-pointer peer-checked:text-secondary-550"
              >
                فئة 1
              </label>
              <input
                id="test20"
                type="checkbox"
                className="hidden w-4 h-4 p-4 peer"
              />
              <label
                htmlFor="test20"
                className="cursor-pointer peer-checked:text-secondary-550"
              >
                فئة 1
              </label>
              <input
                id="test05"
                type="checkbox"
                className="hidden w-4 h-4 p-4 peer"
              />
              <label
                htmlFor="test05"
                className="cursor-pointer peer-checked:text-secondary-550"
              >
                فئة 1
              </label>
              <div>
                {/* shoul be like this */}
                <input
                  id="test80"
                  type="checkbox"
                  className="hidden w-4 h-4 p-4 peer"
                />
                <label
                  htmlFor="test80"
                  className="cursor-pointer peer-checked:text-secondary-550"
                >
                  فئة 1
                </label>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mb-4 font-semibold">السعر</h5>
            <div className="flex flex-col gap-y-4 text-third-700">
              <Slider
                className="max-w-md my-4"
                classNames={{
                  track: "bg-third-550 h-[6px]",
                  thumb: "bg-secondary-550 w-[18px] h-[18px] ",
                  filler: "bg-secondary-550",
                  startContent: "text-third-700",
                  endContent: "text-third-700",
                }}
                defaultValue={[100, 500]}
                formatOptions={{
                  style: "currency",
                  currency: "sar",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }}
                aria-label="Price Range"
                reversed
                maxValue={1000}
                minValue={0}
                step={50}
                showTooltip={true}
              />
            </div>
          </div>
          <div>
            <h5 className="mb-4 font-semibold">المقاس</h5>
            <div className="flex flex-col gap-y-4 text-third-700">
              <CheckboxGroup
                hiddenInput
                color="warning"
                aria-label="Select cities"
              >
                <Checkbox
                  classNames={{
                    label: "text-third-700",
                    base: "text-secondary-550",
                    wrapper: "hover:bg-secondary-550",
                  }}
                  value="buenos-aires"
                  color="secondary"
                >
                  مقاس
                </Checkbox>
                <Checkbox
                  classNames={{
                    label: "text-third-700",
                    base: "text-secondary-550",
                  }}
                  value="buenos"
                  color="secondary"
                >
                  مقاس
                </Checkbox>
                <Checkbox
                  classNames={{
                    label: "text-third-700",
                    base: "text-secondary-550",
                  }}
                  value="aires"
                  color="secondary"
                >
                  مقاس
                </Checkbox>
              </CheckboxGroup>
            </div>
            <div className="flex flex-col my-3 gap-y-4">
              <h5 className="mb-2 font-semibold">اللون</h5>
              <div className="flex items-center gap-x-4">
                {/* should be edited */}
                <input id="test" type="checkbox" className="hidden peer" />
                <label
                  htmlFor="test"
                  className="relative w-4 p-3 bg-red-400 rounded-full peer-checked:ring-2 peer-checked:ring-green-400 "
                ></label>
                <input id="test2" type="checkbox" className="hidden peer" />
                <label
                  htmlFor="test2"
                  className="relative w-4 p-3 bg-red-400 rounded-full peer-checked:ring-2 peer-checked:ring-green-400 "
                ></label>
                <input id="test12" type="checkbox" className="hidden peer" />
                <label
                  htmlFor="test12"
                  className="relative w-4 p-3 bg-red-400 rounded-full peer-checked:ring-2 peer-checked:ring-green-400 "
                ></label>
                <input id="test14" type="checkbox" className="hidden peer" />
                <label
                  htmlFor="test14"
                  className="relative w-4 p-3 bg-red-400 rounded-full peer-checked:ring-2 peer-checked:ring-green-400 "
                ></label>
              </div>
            </div>
          </div>
        </div>
      </aside>
    // </section>
  );
}
