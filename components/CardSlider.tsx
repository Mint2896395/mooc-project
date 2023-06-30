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

import { coursesp } from "../constant/course"
import CardCourse from "./Card";

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

// Owlcarosuesl arrow Next
const nextIcon =
  '<button aria-label="slide forward" class="absolute flex items-center justify-center z-30 right-0 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  cursor-pointer md:w-8 md:h-8 w-6 h-6 rounded-full bg-[var(--global-color-primary)] hover:bg-orange-400 text-white" id="next"><svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>';

// Owlcarosuesl arrow Pre 
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
        margin: 0,
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
        className="m-4 box-border flex h-full transition duration-700 ease-out md:m-10"
        id="owl-carousel-products"
      >
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel loop {...options}>
            {coursesp && coursesp.length > 0
              ? coursesp.filter((course) => course.status == 'feature').map((course) => {
                  return (
                    <>
                      <CardCourse key={course.id} course={course} />
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
