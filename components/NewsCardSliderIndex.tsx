import useSWR from 'swr'
import React from "react";
import NewsItem from 'types/News';

// Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

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

import Link from "next/link";

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

// Owlcarosuesl arrow Next
const nextIcon =
  '<button aria-label="slide forward" class="absolute top-1/2 md:-left-[44%] flex items-center justify-center right-0 z-30 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  cursor-pointer md:w-14 md:h-14 w-6 h-6 rounded-full bg-[var(--global-color-primary)] hover:bg-orange-400 text-white opacity-90" id="next"><svg class="dark:text-gray-900" md:width="14" md:height="19" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>';

// Owlcarosuesl arrow Pre 
const prevIcon =
  '<button aria-label="slide backward" class="absolute top-1/2 md:-left-[50%] flex items-center justify-center z-30 left-0 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer md:w-14 md:h-14 w-6 h-6 rounded-full bg-[var(--global-color-primary)] hover:bg-orange-400 text-white opacity-90" id="prev"><svg class="dark:text-gray-900" md:width="14" md:height="19" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>';

interface NewsItemProp {
  newses: NewsItem[];
}

// const baseUrl = process.env.API_BASE_URL || "http://localhost:3000";

const NewsCardSliderIndex = () => {

  // Set up SWR to run the fetcher function when calling "/api/staticdata"
  // There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR<NewsItemProp>('/api/news', fetcher);

  // Handle the error state
  if (error) return <div>Failed to load</div>;
  // Handle the loading state
  if (!data) return <div>Loading...</div>;

  
  const options = {
    margin: 15,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: [prevIcon, nextIcon],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        margin: 3,
        items: 2,
        nav: false,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  return (
    <div className="relative w-full mx-auto">
      <div
        className="box-border flex h-full transition duration-700 ease-out"
        id="owl-carousel-news"
      >
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel loop {...options}>
            {data.newses && data.newses.length > 0
              ? data.newses.slice(0, 5).map((news) => {
                  return (
                    <>
                      <Link href={`/news/${news.source.id}`} key={news.source.id}>
                        <div className="box-border block group w-full scale-95 transform cursor-pointer transition duration-500 hover:scale-100">
                            <div className="relative box-border ">
                              <div className="relative box-border block w-full z-[1]">
                                <div className="relative box-border overflow-hidden ">
                                  <div className="relative box-border touch-manipulation ">
                                    <div className="relative box-border min-h-[1px]">
                                      <div className="box-border ">
                                        <div className="box-border flex flex-wrap ">
                                          <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 ">
                                            <div className="mb-3 box-border overflow-hidden rounded-xl ">
                                              <div className="relative box-border overflow-hidden rounded-xl pt-[78%]">
                                                <img className="mx-auto absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[100%] align-middle " src={news.urlToImage} />
                                                {/* <Image
                                                  className="w-full rounded-xl"
                                                  src={news.urlToImage}
                                                  width={640}
                                                  height={360}
                                                  alt={news.source.name}
                                                /> */}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="box-border flex flex-wrap ">
                                          <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 ">
                                            <div className="float-left mb-1 box-border md:text-base text-sm font-medium tracking-normal text-[var(--global-color-primary)]">20 มิถุนายน 2566</div>
                                          </div>
                                        </div>
                                        <div className="box-border flex flex-wrap ">
                                          <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 ">
                                            <div className="mb-0 box-border ">
                                              <p className="my-0 box-border overflow-hidden md:text-xl text-sm font-medium tracking-normal text-[rgba(37,37,37,1)] group-hover:text-[var(--global-color-primary)]"> {news.title}</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="box-border flex flex-wrap ">
                                          <div className="box-border w-full max-w-full flex-shrink-0 ">
                                            <div className="mb-0 box-border ">
                                              <p className="mt-0 mb-5 box-border overflow-hidden md:text-sm text-xs md:leading-6 leading-5 text-[rgba(99,99,99,1)]"></p>
                                              <p className="mt-0 mb-5 box-border overflow-hidden md:text-sm text-xs md:leading-6 leading-5 text-[rgba(99,99,99,1)]"> {news.content}</p>
                                              <p className="mt-0 mb-5 box-border overflow-hidden md:text-sm text-xs md:leading-6 leading-5 last:mb-0 text-[rgba(99,99,99,1)]"></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bottom-0 left-1/2 mt-0 box-border hidden text-center "></div>
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
export default NewsCardSliderIndex;
