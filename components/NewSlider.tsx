import React from "react";
import * as $ from "jquery";

declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

if (typeof window !== "undefined") {
  window.$ = window.jQuery = $;
}

import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const nextIconX =
  '<button aria-label="slide forward" class="absolute flex items-center justify-center z-30 right-0 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer md:w-14 md:h-14 w-10 h-10 bg-gray-900 opacity-50 hover:bg-gray-500 text-white" id="next"><svg class="dark:text-gray-900" width="14" height="20" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>';
const prevIconX =
  '<button aria-label="slide backward" class="absolute flex items-center justify-center z-30 left-0 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer md:w-14 md:h-14 w-10 h-10 bg-gray-900 opacity-50 hover:bg-gray-500 text-white" id="prev"><svg class="dark:text-gray-900" width="14" height="20" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>';

const NewSlider = () => {
  const options = {
    singleItem: true,
    animateIn: "fadeIn", // add this
    animateOut: "fadeOut", // and this
    items: 1,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 200,
    navClass: ["owl-prevX", "owl-nextX"],
    navText: [prevIconX, nextIconX],
  };

  return (
    <div className="relative ">
      <div
        className="box-border flex h-full w-full items-center justify-center "
        id="owl-carousel-slides"
      >
        <ul
          id="owl-carousel-ul-x"
          className="owl-carousel owl-loaded owl-drag flex "
        >
          <OwlCarousel className="" loop {...options}>
            {/* Item 1 */}
            <div className="w-full font-[Noto_Sans_Thai]">
              <img
                src="https://law.kku.ac.th/wp/wp-content/uploads/2023/05/DSC_1938.jpg"
                className="h-[168px] w-full object-cover object-center md:h-[654px] "
                alt="..."
              />
              <div className="absolute left-[20%] top-[5%] box-border flex w-2/3 flex-wrap content-start bg-gray-800 p-2 opacity-80 md:left-[60%] md:top-[45%] md:w-1/3 md:p-[24px]">
                <div className="relative mb-[1px] box-border w-full text-left md:mb-5">
                  <div className="box-bordera ">
                    <h3 className="mb:mb-2 clear-both mb-[1px] mt-0 box-border text-base font-bold capitalize leading-none tracking-normal text-[rgba(243,239,237,1)] md:text-4xl">
                      Law Student Life
                    </h3>
                  </div>
                </div>
                <div className="leading-0 relative mb-0 box-border w-full text-xs font-light text-[rgba(213,208,208,1)] md:mb-5 md:text-lg md:leading-7">
                  <div className="box-border ">
                    <p className="mb-1 mt-0 box-border md:mb-4 ">
                      <span className="box-border ">
                        มีแหล่งคลังข้อมูลความรู้
                        นักศึกษาสามารถแสวงหาความรู้หรือสามารถเรียนรู้ได้ด้วยตัวเอง
                        ตลอดจนสร้างสรรค์ความรู้ใหม่เพื่อต่อยอดความรู้เดิม
                        สามารถพัฒนาการคิดวิเคราะห์และประยุกต์ใช้ความรู้ให้เกิดประโยชน์ได้เหมาะสมกับตนเองและสถานการณ์ได้มากขึ้น
                        โดยมีเทคโนโลยีที่ทันสมัยเป็นเครื่องมือเชื่อมโยงความรู้และเสริมประสิทธิภาพการเรียนรู้ที่เข้าถึงได้ทุกที่ทุกเวลา
                        (Real Time)
                      </span>
                    </p>
                  </div>
                </div>
                <div className="relative mr-5 box-border w-full text-right ">
                  <div className="box-border ">
                    <div className="box-border ">
                      <a
                        className="box-border inline-block w-auto rounded-none border-2 border-solid border-[rgba(179,149,115,1)] bg-transparent/0 text-center text-xs font-normal uppercase leading-none tracking-[4px] text-[rgba(179,149,115,1)] shadow-[none] md:text-sm"
                        role="button"
                        href="#"
                      >
                        <span className="box-border flex justify-center p-1 md:p-[14px] ">
                          <span className="order-10 box-border inline-block flex-grow ">
                            learn more
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 2 */}

            <img
              src="https://mooc.chula.ac.th/img/upload/PDPA.png"
              className="h-[168px] w-full object-cover object-center md:h-[654px] "
              alt="..."
            />
            {/* Item 3 */}

            <img
              src="https://mooc.chula.ac.th/img/upload/Feed%20Website%20CHULA%20MOOC%20%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99%206.png"
              className="h-[168px] w-full object-cover object-center md:h-[654px] "
              alt="..."
            />
            {/* Item 4 */}

            <img
              src="https://mooc.chula.ac.th/img/upload/หน้าปกที่1.2.png"
              className="h-[168px] w-full object-cover object-center md:h-[654px] "
              alt="..."
            />
            {/* Item 5 */}

            <img
              src="https://lawlibrarykku.online/img/site_bg.353dfaa9.jpg"
              className="h-[168px] w-full object-cover object-center md:h-[654px] "
              alt="..."
            />
          </OwlCarousel>
        </ul>
      </div>
    </div>
  );
};
export default NewSlider;
