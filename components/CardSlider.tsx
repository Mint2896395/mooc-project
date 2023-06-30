import React from "react";
import Image from "next/image";
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

import Link from "next/link";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const productsp = [
  {
    id: 1,
    name: "การระงับและการไกล่เกลี่ยข้อพิพาท",
    src: "/images/_LW014112_การระงับและการไกล่เกลี่ยข้อพิพาท.jpeg",
    code: "LW014112",
    url: "detail",
    category: "กฎหมาย",
    seat: "56 ที่ว่าง",
  },
  {
    id: 2,
    name: "พระธรรมนูญศาลยุติธรรม",
    src: "/images/_LW013215_พระธรรมนูญศาลยุติธรรม.jpeg",
    code: "LW013215",
    url: "detail",
    category: "กฎหมาย",
    seat: "199 ที่ว่าง",
  },
  {
    id: 3,
    name: "กฎหมายระหว่างประเทศแผนกคดีบุคคล",
    src: "/images/_LW013401_กฎหมายระหว่างประเทศแผนกคดีบุคคล.jpeg",
    code: "LW013401",
    url: "detail",
    category: "กฎหมาย",
    seat: "99 ที่ว่าง",
  },
  {
    id: 4,
    name: "พระธรรมนูญศาลยุติธรรม",
    src: "/images/_LW013215_พระธรรมนูญศาลยุติธรรม.jpeg",
    code: "LW013215",
    url: "detail",
    category: "กฎหมาย",
    seat: "56 ที่ว่าง",
  },
  {
    id: 5,
    name: "พระธรรมนูญศาลยุติธรรม",
    src: "/images/_LW013215_พระธรรมนูญศาลยุติธรรม.jpeg",
    code: "LW013215",
    url: "detail",
    category: "กฎหมาย",
    seat: "56 ที่ว่าง",
  },
  {
    id: 6,
    name: "พระธรรมนูญศาลยุติธรรม",
    src: "/images/_LW013215_พระธรรมนูญศาลยุติธรรม.jpeg",
    code: "LW013215",
    url: "detail",
    category: "กฎหมาย",
    seat: "56 ที่ว่าง",
  },
];

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const nextIcon =
  '<button aria-label="slide forward" class="absolute flex items-center justify-center z-30 right-0 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  cursor-pointer md:w-8 md:h-8 w-6 h-6 rounded-full bg-[var(--global-color-primary)] hover:bg-orange-400 text-white" id="next"><svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>';
const prevIcon =
  '<button aria-label="slide backward" class="absolute flex items-center justify-center z-30 left-0 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer md:w-8 md:h-8 w-6 h-6 rounded-full bg-[var(--global-color-primary)] hover:bg-orange-400 text-white" id="prev"><svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>';

const CardSlider = () => {
  const options = {
    margin: 5,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: [prevIcon, nextIcon],
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
    <div className="md:order-1 order-2 relative top-[-120px] max-w-[1600px] md:w-[88%] w-full mx-auto ">
      <div
        className="m-5 box-border flex h-full transition duration-700 ease-out md:m-10"
        id="owl-carousel-products"
      >
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel className="" loop {...options}>
            {productsp && productsp.length > 0
              ? productsp.map((product) => {
                  return (
                    <>
                      <Link href={product.url} key={product.id}>
                        <div className="group w-full scale-95 transform cursor-pointer overflow-hidden border-0 border-b-2 border-solid border-[var(--global-color-primary)] transition duration-500 hover:scale-100 md:h-full md:max-w-lg ">
                          <Image
                            className="w-full rounded-xl"
                            src={product.src}
                            width={640}
                            height={360}
                            alt={product.name}
                          />
                          <div className="md:py-4">
                            <div className="mb-5 h-10 min-h-0 md:text-2xl text-lg font-semibold md:font-bold md:mb-0 md:min-h-full group-hover:text-gray-500">
                              {product.name}
                            </div>
                            <p className="md:mb-5 mb-2 md:text-lg text-sm text-gray-700">
                              {product.code}
                            </p>
                            <div className="mb-2 box-border grid grid-cols-1 md:grid-cols-2">
                              <div className="pb-2 text-center text-xs md:text-left">
                                <span className="mr-2 inline-block rounded-full border border-orange-400 px-2 py-0.5 text-orange-400 ">
                                  {product.category}
                                </span>
                              </div>
                              <div className="box-border text-center md:text-right ">
                                <span className="rounded-sm bg-[#4d40f7] px-2 py-0.5 text-xs font-medium text-[#ffee00]">
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
