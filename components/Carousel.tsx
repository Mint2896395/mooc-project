import React, { useState } from "react";
import Link from "next/link";

function Carousel() {
  const [defaultTransform, setDefaultTransform] = useState(0);

  const goNext = () => {
    setDefaultTransform((prevTransform) => prevTransform - 398);
  };

  const goPrev = () => {
    setDefaultTransform((prevTransform) => prevTransform + 398);
  };

  return (
    <div>
      <div className="relative top-[-120px] flex h-full items-center justify-center overflow-auto p-4 md:top-[-220px] md:pt-24">
        <button
          onClick={goPrev}
          aria-label="slide backward"
          className="absolute left-0 z-30 ml-5 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-blue-500 text-white hover:bg-sky-500 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 md:ml-10"
          id="prev"
        >
          <svg
            className="dark:text-gray-900"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div className="mx-auto h-full w-full ">
          <div
            id="slider"
            className="mx-auto box-border flex h-full w-[140%] items-center justify-start gap-4 transition duration-700 ease-out md:mx-20 md:w-[110%] md:gap-6 lg:w-[90%] lg:gap-8"
            style={{ transform: `translateX(${defaultTransform}px)` }}
          >
            {/* Your slider content goes here */}
            <Link href="/detail">
              <div className="h-64 w-full transform cursor-pointer overflow-hidden rounded shadow-lg transition duration-500 hover:scale-105 md:h-full md:max-w-lg ">
                <img
                  className="w-full"
                  src="https://lawlibrarykku.online/getclassimg/_LW013215_พระธรรมนูญศาลยุติธรรม"
                  alt="Sunset in the mountains"
                />
                <div className="p-2 md:px-6 md:py-4">
                  <div className="mb-2 text-sm font-bold">
                    พระธรรมนูญศาลยุติธรรม
                  </div>
                  <div className="box-border flow-root">
                    <p className="float-left text-sm text-gray-700">LW013215</p>
                    <div className="float-right box-border ">
                      <div className="float-right box-border rounded-sm bg-[#4d40f7] p-0.5 text-center text-[9px] font-medium text-[#ffee00] md:text-xs">
                        56 ที่ว่าง
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden px-6 pb-2 pt-4 text-xs md:block">
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 font-semibold text-gray-700">
                    #พระธรรมนูญ
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/detail">
              <div className="h-64 w-full transform cursor-pointer overflow-hidden rounded shadow-lg transition duration-500 hover:scale-105 md:h-full md:max-w-lg ">
                <img
                  className="w-full"
                  src="https://lawlibrarykku.online/getclassimg/_LW014112_การระงับและการไกล่เกลี่ยข้อพิพาท"
                  alt="Sunset in the mountains"
                />
                <div className="p-2 md:px-6 md:py-4">
                  <div className="mb-2 text-sm font-bold">
                    การระงับและการไกล่เกลี่ยข้อพิพาท
                  </div>
                  <div className="box-border flow-root">
                    <p className="float-left text-sm text-gray-700">LW014112</p>
                    <div className="float-right box-border ">
                      <div className="float-right box-border rounded-sm bg-[#4d40f7] p-0.5 text-center text-[9px] font-medium text-[#ffee00] md:text-xs">
                        199 ที่ว่าง
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden px-6 pb-2 pt-4 text-xs md:block">
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 font-semibold text-gray-700">
                    #ข้อพิพาท
                  </span>
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 font-semibold text-gray-700">
                    #ไกล่เกลี่ย
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/detail">
              <div className="h-64 w-full transform cursor-pointer overflow-hidden rounded shadow-lg transition duration-500 hover:scale-105 md:h-full md:max-w-lg ">
                <img
                  className="w-full"
                  src="https://lawlibrarykku.online/getclassimg/LW013401 กฎหมายระหว่างประเทศแผนกคดีบุคคล"
                  alt="Sunset in the mountains"
                />
                <div className="p-2 md:px-6 md:py-4">
                  <div className="mb-2 text-sm font-bold">
                    กฎหมายระหว่างประเทศแผนกคดีบุคคล
                  </div>
                  <div className="box-border flow-root">
                    <p className="float-left text-sm text-gray-700">LW013401</p>
                    <div className="float-right box-border ">
                      <div className="float-right box-border rounded-sm bg-[#4d40f7] p-0.5 text-center text-[9px] font-medium text-[#ffee00] md:text-xs">
                        999 ที่ว่าง
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden px-6 pb-2 pt-4 text-xs md:block">
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 font-semibold text-gray-700">
                    #ระหว่างประเทศ
                  </span>
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 font-semibold text-gray-700">
                    #แผนกคดีบุคคล
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <button
          onClick={goNext}
          aria-label="slide forward"
          className="absolute right-0 z-30 mr-5 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-blue-500 text-white  hover:bg-sky-500 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 md:mr-10"
          id="next"
        >
          <svg
            className="dark:text-gray-900"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
