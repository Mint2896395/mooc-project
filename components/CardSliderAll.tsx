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

import { coursesp, nextIcon, prevIcon } from "../constant/course"

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const CardSliderAll = () => {
  const options = {
    margin: 5,
    responsiveClass: true,
    nav: false,
    dots: true,
    center: true,
    autoplay: true,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: [prevIcon, nextIcon],
    responsive: {
      0: {
        items: 1.5,
      },
      400: {
        margin: 0,
        items: 1.5,
      },
      600: {
        items: 2.5,
      },
      700: {
        items: 3.5,
      },
      1000: {
        items: 3.5,
      },
    },
  };

  return (
    <div className="md:order-1 order-2 relative w-full mx-0 ">
      <div
        className="box-border flex h-full transition duration-700 ease-out"
        id="owl-carousel-products"
      >
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel loop {...options}>
            {coursesp && coursesp.length > 0
              ? coursesp.map((course) => {
                  return (
                    <>
                      <Link href={course.url} key={course.id}>
                        <div className="group w-full scale-95 transform cursor-pointer overflow-hidden border-0 border-b-2 border-solid border-[var(--global-color-primary)] transition duration-500 hover:scale-100 md:h-full md:max-w-lg ">
                          <Image
                            className="w-full rounded-xl"
                            src={course.src}
                            width={640}
                            height={360}
                            alt={course.name}
                          />
                          <div className="md:py-4">
                            <div className="mb-5 md:h-10 h-5 min-h-0 md:text-2xl text-base font-semibold md:font-bold md:mb-0 md:min-h-full group-hover:text-gray-500">
                              {course.name}
                            </div>
                            <p className="md:mb-5 mb-2 md:text-lg text-sm text-gray-700">
                              {course.code}
                            </p>
                            <div className="mb-2 box-border grid grid-cols-1 md:grid-cols-2">
                              <div className="pb-2 text-center text-xs md:text-left">
                                <span className="mr-2 inline-block rounded-full border border-orange-400 px-2 py-0.5 text-orange-400 ">
                                  {course.category}
                                </span>
                              </div>
                              <div className="box-border text-center md:text-right ">
                                <span className="rounded-sm bg-[#4d40f7] px-2 py-0.5 text-xs font-medium text-[#ffee00]">
                                  {course.seat}
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
export default CardSliderAll;
