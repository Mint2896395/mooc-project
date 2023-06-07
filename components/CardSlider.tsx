import React from "react";
declare global {
  interface Window {
      $:any;
      jQuery:any;
  }
}
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import Link from "next/link";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const productsp = [
  {
    id: 1,
    name: "การระงับและการไกล่เกลี่ยข้อพิพาท",
    src: "https://lawlibrarykku.online/getclassimg/_LW014112_การระงับและการไกล่เกลี่ยข้อพิพาท",
    code: "LW014112",
    url: "detail",
    category: "กฎหมาย",
    seat: "56 ที่ว่าง"
  },
  {
    id: 2,
    name: "พระธรรมนูญศาลยุติธรรม",
    src: "https://lawlibrarykku.online/getclassimg/_LW013215_พระธรรมนูญศาลยุติธรรม",
    code: "LW013215",
    url: "detail",
    category: "กฎหมาย",
    seat: "199 ที่ว่าง"
  },
  {
    id: 3,
    name: "กฎหมายระหว่างประเทศแผนกคดีบุคคล",
    src: "https://lawlibrarykku.online/getclassimg/LW013401 กฎหมายระหว่างประเทศแผนกคดีบุคคล",
    code: "LW013401",
    url: "detail",
    category: "กฎหมาย",
    seat: "99 ที่ว่าง"
  },
  {
    id: 4,
    name: "พระธรรมนูญศาลยุติธรรม",
    src: "https://lawlibrarykku.online/getclassimg/_LW013215_พระธรรมนูญศาลยุติธรรม",
    code: "LW013215",
    url: "detail",
    category: "กฎหมาย",
    seat: "56 ที่ว่าง"
  },
  {
    id: 5,
    name: "พระธรรมนูญศาลยุติธรรม",
    src: "https://lawlibrarykku.online/getclassimg/_LW013215_พระธรรมนูญศาลยุติธรรม",
    code: "LW013215",
    url: "detail",
    category: "กฎหมาย",
    seat: "56 ที่ว่าง"
  },
  {
    id: 6,
    name: "พระธรรมนูญศาลยุติธรรม",
    src: "https://lawlibrarykku.online/getclassimg/_LW013215_พระธรรมนูญศาลยุติธรรม",
    code: "LW013215",
    url: "detail",
    category: "กฎหมาย",
    seat: "56 ที่ว่าง"
  },
];


// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const nextIcon = '<button aria-label="slide forward" class="absolute flex items-center justify-center z-30 right-0 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  cursor-pointer md:w-8 md:h-8 w-6 h-6 rounded-full bg-blue-500 hover:bg-sky-500 text-white" id="next"><svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>';
const prevIcon = '<button aria-label="slide backward" class="absolute flex items-center justify-center z-30 left-0 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer md:w-8 md:h-8 w-6 h-6 rounded-full bg-blue-500 hover:bg-sky-500 text-white" id="prev"><svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>';

const CardSlider = () => {
  const options = {
    margin: 5,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: [
      prevIcon,
      nextIcon
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="relative top-[-120px]">
      <div
        className="flex h-full justify-start transition ease-out duration-700 box-border md:m-10 m-5"
        id="owl-carousel-products"
      >
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel
            className=""
            loop
            {...options}
          >
            {productsp && productsp.length > 0
              ? productsp.map((product) => {
                  return (
                    <>
                      <Link href={product.url}>
                        <div className="md:max-w-lg w-full md:h-full border-solid border-0 border-b-2 border-blue-600 overflow-hidden transform transition duration-500 scale-95 hover:scale-100 cursor-pointer ">
                            <img className="w-full rounded-xl" src={product.src} alt={product.name} />
                            <div className="md:py-4">
                                <div className="font-bold text-base md:mb-0 mb-5 h-8 min-h-0 md:min-h-full">{product.name}</div>
                                <p className="text-gray-700 text-sm mb-2">
                                    {product.code}
                                    </p>
                                <div className="box-border grid md:grid-cols-2 grid-cols-1 mb-2">
                                    <div className="pb-2 text-xs md:text-left text-center">
                                        <span className="inline-block border border-orange-400 rounded-full px-2 py-0.5 text-orange-400 mr-2 ">{product.category}</span>
                                    </div>
                                    <div className="box-border md:text-right text-center ">
                                        <span className="rounded-sm text-xs font-medium bg-[#4d40f7] text-[#ffee00] py-0.5 px-2">
                                            {product.seat}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </>
                  );
                })
              : ""}
          </OwlCarousel>
        </ul>
      </div>
    </div>
  );
};
export default CardSlider;
