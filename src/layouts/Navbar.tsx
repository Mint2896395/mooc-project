"use client";
import Link from "next/link";
import React, { useState } from "react";
// import the library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { navItems } from "../constant";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="z-50 box-border block overflow-hidden bg-white py-3.5 shadow-md ">
        <div className="box-border pl-[var(--bs-gutter-x,_0.75rem)] pr-[var(--bs-gutter-x,_0.75rem)] ">
          <div className="mx-auto my-0 box-border w-full py-0 md:w-[88%] md:px-[15px] ">
            <div className="ml-[calc(1.5rem_/_-2)] mr-[calc(1.5rem_/_-2)] mt-[calc(-0px_*_-1)] box-border flex h-full flex-wrap items-center justify-center">
              <div className="order-2 mt-[var(--bs-gutter-y)] box-border w-[85%] max-w-full flex-shrink-0 pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)] md:w-1/3 lg:w-1/4 ">
                <Link
                  className="mx-5 box-border flex items-center justify-center md:float-left"
                  title="หน้าแรก"
                  href="/"
                >
                  <Image
                    className="mx-0 box-border w-14 align-middle"
                    src="/LOGO_law-kku1.png"
                    width={100}
                    height={100}
                    alt="Law-KKU-Logo"
                  />
                  <span className="pl-3 leading-3 text-black ">
                    <h6 className="text-2xl font-semibold tracking-[0.1px]">
                      School of Law
                    </h6>
                    <p className="text-[15px] tracking-[0.5px] text-[#949494] ">
                      Khon Kaen University
                    </p>
                  </span>
                </Link>
              </div>
              <div className="order-3 mt-[var(--bs-gutter-y)] box-border flex max-w-full flex-shrink-0 pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)] md:w-2/3 lg:w-3/4  ">
                {/* MAIN - MENU :: PC & IPAD PRO */}
                {/* ENG */}
                {/* THAI */}
                <div className="box-border hidden md:block md:w-[95%] ">
                  <ul className="float-right my-0 box-border pl-0 ">
                    {/* Classic list */}
                    {navItems.map((item: any) => (
                      <NavLink key={item.id} item={item} />
                    ))}
                  </ul>
                </div>
                <div className="my-auto flex h-[26px] justify-center border-gray-300 md:border-l">
                  <div className="hidden pr-[15px] md:block"></div>

                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle_search"
                    checked={isOpen}
                    onChange={toggleOpen}
                    className="absolute left-[-100%] top-[-100%]"
                  />
                  <label
                    htmlFor="toggle_search"
                    className="order-3 mx-auto my-auto box-border max-w-full flex-shrink-0 cursor-pointer pr-2 align-middle not-italic md:pl-2 md:pr-0"
                  >
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ color: "#c3c6cb", width: "19px" }}
                    />
                  </label>
                </div>
              </div>
              {/* MOBILE - Menu */}
              <div className="hamburger-menu order-1 block md:hidden">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                  <span></span>
                </label>
                <label
                  className="m-menu__overlay"
                  htmlFor="menu__toggle"
                ></label>

                <ul className="menu__box">
                  <div
                    id="accordion-flush"
                    data-accordion="collapse"
                    data-active-classes="border-b border-gray-200"
                    data-inactive-classes=""
                  >
                    {/* {navItems.map((item: any) => (
                      <MobileNavLink key={item.id} item={item} />
                    ))} */}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={`bg-transparent ${isOpen ? "z-[-1] h-2" : "h-0"}`}></div>
      <div
        className={`relative box-border w-full overflow-hidden bg-white px-5 transition-all duration-300 ease-in-out ${
          isOpen ? "h-15 py-3 md:py-5" : "h-0"
        }`}
      >
        <div className="z-10 flex items-center justify-center bg-white text-[var(--global-color-primary)]">
          <div className="flex overflow-hidden rounded-full border">
            <input
              type="search"
              className="border-transparent px-4 py-2 placeholder-[var(--global-color-primary)] !outline-none focus:border-transparent focus:ring-0"
              placeholder="ค้นหาคอร์ส"
            />
            <button className="flex items-center justify-center px-4 ">
              <svg
                className="text-grey-dark h-4 w-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
