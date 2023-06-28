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
    animateIn: 'fadeIn', // add this
    animateOut: 'fadeOut', // and this
    items: 1,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    navClass: ["owl-prevX", "owl-nextX"],
    navText: [prevIconX, nextIconX],
  };

  return (
    <div className="relative ">
      <div
        className="box-border flex h-full w-full justify-center items-center "
        id="owl-carousel-slides"
      >
        <ul id="owl-carousel-ul-x" className="owl-carousel owl-loaded owl-drag flex ">
          <OwlCarousel className="" loop {...options}>
            {/* Item 1 */}

                <img
                src="https://law.kku.ac.th/wp/wp-content/uploads/2023/05/DSC_1938.jpg"
                className="w-full h-[654px] object-cover object-center "
                alt="..."
                />
            {/* Item 2 */}

                <img
                src="https://mooc.chula.ac.th/img/upload/PDPA.png"
                className="w-full h-[654px] object-cover object-center "
                alt="..."
                />
            {/* Item 3 */}

                <img
                src="https://mooc.chula.ac.th/img/upload/Feed%20Website%20CHULA%20MOOC%20%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99%206.png"
                className="w-full h-[654px] object-cover object-center "
                alt="..."
                />
            {/* Item 4 */}

                <img
                src="https://mooc.chula.ac.th/img/upload/หน้าปกที่1.2.png"
                className="w-full h-[654px] object-cover object-center "
                alt="..."
                />
            {/* Item 5 */}

                <img
                src="https://lawlibrarykku.online/img/site_bg.353dfaa9.jpg"
                className="w-full h-[654px] object-cover object-center "
                alt="..."
                />
          </OwlCarousel>
        </ul>
      </div>
    </div>
  );
};
export default NewSlider;
