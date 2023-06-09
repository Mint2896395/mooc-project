"use client";

import useSWR from "swr";
import React from "react";
import CourseItem from "~/types/Course";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

interface CourseItemProp {
  courses: CourseItem[];
}

import "@/lib/jquery";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import CardCourse from "./Card";

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const CardSliderAll = () => {
  const { data, error } = useSWR<CourseItemProp>("/api/course", fetcher);

  // Handle the error state
  if (error) return <div>Failed to load</div>;
  // Handle the loading state
  if (!data) return <div>Loading...</div>;

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
    <div className="relative order-2 mx-0 w-full md:order-1 ">
      <div
        className="box-border flex h-full transition duration-700 ease-out"
        id="owl-carousel-products"
      >
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel loop {...options}>
            {data.courses && data.courses.length > 0
              ? data.courses.slice(0, 9).map((course) => {
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
