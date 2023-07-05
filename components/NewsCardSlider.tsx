import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from 'types/News';

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
import Link from "next/link";

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

// Owlcarosuesl arrow Next
const nextIcon =
  '<button aria-label="slide forward" class="absolute flex items-center justify-center z-30 right-0 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  cursor-pointer md:w-8 md:h-8 w-6 h-6 rounded-full bg-[var(--global-color-primary)] hover:bg-orange-400 text-white opacity-90" id="next"><svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>';

// Owlcarosuesl arrow Pre 
const prevIcon =
  '<button aria-label="slide backward" class="absolute flex items-center justify-center z-30 left-0 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer md:w-8 md:h-8 w-6 h-6 rounded-full bg-[var(--global-color-primary)] hover:bg-orange-400 text-white opacity-90" id="prev"><svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>';

interface NewsItemProp {
  newses: NewsItem[];
}

// const baseUrl = process.env.API_BASE_URL || "http://localhost:3000";

const NewsCardSlider = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {

    // const fetchData = () => {
    //   const xhr = new XMLHttpRequest();
    //   xhr.open('GET', `${baseUrl}/api/news`);
    //   xhr.onreadystatechange = () => {
    //     if (xhr.readyState === XMLHttpRequest.DONE) {
    //       if (xhr.status === 200) {
    //         const data = JSON.parse(xhr.responseText) as NewsItemProp;
    //         setNewsItems(data.newses || []);
    //       } else {
    //         console.error('Failed to fetch news data');
    //       }
    //     }
    //   };
    //   xhr.send();
    // };
    
    // fetchData();    

    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get<NewsItemProp>(`/api/news`);
    //     const data = response.data.newses;
    //     setNewsItems(data || []);
    //   } catch (error) {
    //     console.error('Error fetching news data:', error);
    //   }
    // };

    // fetchData();

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/news`);
        const data = await response.json();
        setNewsItems(data.newses || []);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchData();
  }, []);
  
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
        margin: 10,
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
    <div className="relative w-full mx-auto md:hidden block">
      <div
        className="box-border flex h-full transition duration-700 ease-out"
        id="owl-carousel-products"
      >
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel loop {...options}>
            {newsItems && newsItems.length > 0
              ? newsItems.slice(0, 5).map((news) => {
                  return (
                    <>
                      <Link href={`/news/${news.source.id}`} key={news.source.id}>
                        <div className="box-border block md:block lg:hidden ">
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
                                            <div className="float-left mb-1 box-border text-xs font-medium tracking-normal text-[var(--global-color-primary)]">20 มิถุนายน 2566</div>
                                          </div>
                                        </div>
                                        <div className="box-border flex flex-wrap ">
                                          <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 ">
                                            <div className="mb-0 box-border ">
                                              <p className="my-0 box-border overflow-hidden text-sm font-medium tracking-normal text-[rgba(37,37,37,1)]"> {news.title}</p>
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
export default NewsCardSlider;
