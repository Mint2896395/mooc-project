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

import CardCourse from "./Card";
import getAllCourse from "~/pages/lib/helper";

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const CardSliderAll = () => {
  const coursesp = getAllCourse();
  const options = {
    margin: 1,
    responsiveClass: true,
    nav: false,
    dots: true,
    center: true,
    autoplay: true,
    smartSpeed: 1000,
    // navClass: ["owl-prev", "owl-next"],
    // navText: [prevIcon, nextIcon],
    responsive: {
      0: {
        items: 1.5,
      },
      400: {
        margin: 0,
        items: 1.8,
      },
      600: {
        margin: 0,
        items: 2.5,
      },
      700: {
        items: 4,
      },
      1000: {
        items: 4,
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
export default CardSliderAll;
