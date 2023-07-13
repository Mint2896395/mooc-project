"use client";

import useSWR from "swr";
import React, { FC } from "react";
import CourseItem from "~/types/Course";
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

interface CourseItemProp {
  courses: CourseItem[];
}

interface CardProps {
  className: string;
  column: string;
}

import "~/lib/jquery";
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

// Owlcarosuesl arrow Next
const nextIcon =
  '<button aria-label="slide forward" class="absolute flex items-center justify-center z-30 right-0 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  cursor-pointer md:w-8 md:h-8 w-6 h-6 rounded-full bg-[var(--global-color-primary)] hover:bg-orange-400 text-white" id="next"><svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>';

// Owlcarosuesl arrow Pre
const prevIcon =
  '<button aria-label="slide backward" class="absolute flex items-center justify-center z-30 left-0 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer md:w-8 md:h-8 w-6 h-6 rounded-full bg-[var(--global-color-primary)] hover:bg-orange-400 text-white" id="prev"><svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>';

const CardSlider: FC<CardProps> = ({ className, column }) => {
  const { data, error } = useSWR<CourseItemProp>("/api/course", fetcher);

  // Handle the error state
  if (error) return <div>Failed to load</div>;
  // Handle the loading state
  if (!data) return <div>Loading...</div>;

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
        items: Number(column),
      },
    },
  };

  return (
    <div
      className={cn(
        "relative order-2 mx-auto w-full max-w-[1600px] md:order-1 md:w-[88%]",
        className
      )}
    >
      <div
        className="m-4 box-border flex h-full transition duration-700 ease-out"
        id="owl-carousel-products"
      >
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel loop {...options}>
            {data.courses && data.courses.length > 0
              ? data.courses
                  .filter((course) => course.status == "feature")
                  .map((course) => {
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
