import React, { useState } from 'react';
import Link from "next/link";

function Carousel() {
  const [defaultTransform, setDefaultTransform] = useState(0);

  const goNext = () => {
    setDefaultTransform(prevTransform => prevTransform - 398);
  };

  const goPrev = () => {
    setDefaultTransform(prevTransform => prevTransform + 398);
  };

  return (
    <div>
      <div className="relative flex items-center justify-center overflow-auto h-full md:pt-24 p-4 md:top-[-220px] top-[-120px]">
        <button onClick={goPrev} aria-label="slide backward" className="absolute flex items-center justify-center z-30 left-0 md:ml-10 ml-5 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer w-6 h-6 rounded-full bg-blue-500 hover:bg-sky-500 text-white" id="prev">
            <svg className="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>       
        
        <div className="w-full h-full mx-auto ">
            <div id="slider" className="lg:w-[90%] md:w-[110%] w-[140%] flex h-full lg:gap-8 md:gap-6 gap-4 items-center justify-start transition ease-out duration-700 box-border md:mx-20 mx-auto" style={{ transform: `translateX(${defaultTransform}px)` }}>
              {/* Your slider content goes here */}
              <Link href="/detail">
                  <div className="md:max-w-lg w-full md:h-full h-64 rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer ">
                      <img className="w-full" src="https://lawlibrarykku.online/getclassimg/_LW013215_พระธรรมนูญศาลยุติธรรม" alt="Sunset in the mountains" />
                      <div className="md:px-6 md:py-4 p-2">
                          <div className="font-bold text-sm mb-2">พระธรรมนูญศาลยุติธรรม</div>
                          <div className="box-border flow-root">
                              <p className="text-gray-700 text-sm float-left">
                              LW013215
                              </p>
                              <div className="box-border float-right ">
                                  <div className="float-right box-border rounded-sm text-center md:text-xs text-[9px] font-medium bg-[#4d40f7] text-[#ffee00] p-0.5">
                                      56 ที่ว่าง
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="px-6 pt-4 pb-2 text-xs hidden md:block">
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2">#พระธรรมนูญ</span>
                      </div>
                  </div>
              </Link>
              <Link href="/detail">
                  <div className="md:max-w-lg w-full md:h-full h-64 rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer ">
                      <img className="w-full" src="https://lawlibrarykku.online/getclassimg/_LW014112_การระงับและการไกล่เกลี่ยข้อพิพาท" alt="Sunset in the mountains" />
                      <div className="md:px-6 md:py-4 p-2">
                          <div className="font-bold text-sm mb-2">การระงับและการไกล่เกลี่ยข้อพิพาท</div>
                          <div className="box-border flow-root">
                              <p className="text-gray-700 text-sm float-left">
                              LW014112
                              </p>
                              <div className="box-border float-right ">
                                  <div className="float-right box-border rounded-sm text-center md:text-xs text-[9px] font-medium bg-[#4d40f7] text-[#ffee00] p-0.5">
                                      199 ที่ว่าง
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="px-6 pt-4 pb-2 text-xs hidden md:block">
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2">#ข้อพิพาท</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2">#ไกล่เกลี่ย</span>
                      </div>
                  </div>
              </Link>
              <Link href="/detail">
                <div className="md:max-w-lg w-full md:h-full h-64 rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer ">
                    <img className="w-full" src="https://lawlibrarykku.online/getclassimg/LW013401 กฎหมายระหว่างประเทศแผนกคดีบุคคล" alt="Sunset in the mountains" />
                    <div className="md:px-6 md:py-4 p-2">
                        <div className="font-bold text-sm mb-2">กฎหมายระหว่างประเทศแผนกคดีบุคคล</div>
                        <div className="box-border flow-root">
                            <p className="text-gray-700 text-sm float-left">
                            LW013401
                            </p>
                            <div className="box-border float-right ">
                              <div className="float-right box-border rounded-sm text-center md:text-xs text-[9px] font-medium bg-[#4d40f7] text-[#ffee00] p-0.5">
                                    999 ที่ว่าง
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-2 text-xs hidden md:block">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2">#ระหว่างประเทศ</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2">#แผนกคดีบุคคล</span>
                    </div>
                </div>
            </Link>
            </div>
        </div>  

        <button onClick={goNext} aria-label="slide forward" className="absolute flex items-center justify-center z-30 right-0 md:mr-10 mr-5 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  cursor-pointer w-6 h-6 rounded-full bg-blue-500 hover:bg-sky-500 text-white" id="next">
            <svg className="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
        </div>
    </div>
  );
}

export default Carousel;
