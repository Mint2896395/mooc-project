"use client";
import { useState, useEffect } from "react";

// Scroll to top function
const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const GotoTop = () => {
  const [showButton, setShowButton] = useState(false);

  // On scroll event, toggle button visibility based on scroll position
  const handleScroll = () => {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <button
          id="to-top-button"
          onClick={goToTop}
          title="Go To Top"
          className="fixed bottom-10 right-10 z-50 flex h-10 w-10 select-none items-center justify-center rounded-full border-2 border-solid border-orange-200 bg-[color:var(--global-color-primary)] p-2 text-lg font-semibold text-white shadow-md transition-colors duration-300 hover:bg-orange-400"
        >
          <svg
            className=" h-2.5 w-6 rotate-180 overflow-hidden fill-white"
            xmlSpace="preserve"
            enableBackground="new 57 35.171 26 16.043"
            viewBox="57 35.171 26 16.043"
            height="16.043px"
            width="26px"
            y="0px"
            x="0px"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className=""
              d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"
            ></path>
          </svg>
          <span className="sr-only">Go to top</span>
        </button>
      )}
    </div>
  );
};

export default GotoTop;
