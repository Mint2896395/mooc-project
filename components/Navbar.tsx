import Link from "next/link";
import React, { useState } from 'react';
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
    <nav className="box-border bg-white py-3.5 block overflow-hidden z-50 shadow-md ">
      <div className="box-border pr-[var(--bs-gutter-x,_0.75rem)] pl-[var(--bs-gutter-x,_0.75rem)] ">
        <div className="box-border md:w-[88%] w-full py-0 md:px-[15px] my-0 mx-auto ">
          <div className="box-border flex flex-wrap mt-[calc(-0px_*_-1)] mr-[calc(1.5rem_/_-2)] ml-[calc(1.5rem_/_-2)] items-center justify-center h-full">
            <div className="order-2 box-border max-w-full flex-shrink-0 w-[85%] md:w-1/3 lg:w-1/4 pr-[calc(var(--bs-gutter-x)_/_2)] pl-[calc(var(--bs-gutter-x)_/_2)] mt-[var(--bs-gutter-y)] ">
              <Link
                className="box-border flex justify-center items-center mx-5 md:float-left"
                title="หน้าแรก"
                href="/"
              >
                <Image
                  className="box-border mx-0 w-14 align-middle"
                  src="/LOGO_law-kku1.png"
                  width={100}
                  height={100}
                  alt="Law-KKU-Logo"
                />
                <span className="pl-3 text-black leading-3 ">
                  <h6 className="text-2xl font-semibold tracking-[0.1px]">School of Law</h6>
                  <p className="text-[#949494] text-[15px] tracking-[0.5px] ">Khon Kaen University</p>
                </span>
              </Link>
            </div>
            <div className="order-3 flex box-border max-w-full flex-shrink-0 md:w-2/3 lg:w-3/4 pr-[calc(var(--bs-gutter-x)_/_2)] pl-[calc(var(--bs-gutter-x)_/_2)] mt-[var(--bs-gutter-y)]  ">
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
              <div className="md:border-l border-gray-300 h-[26px] flex justify-center my-auto">
                <div className="md:block hidden pr-[15px]"></div>

                <input type="checkbox" name="toggle" id="toggle_search" checked={isOpen} onChange={toggleOpen} className="absolute left-[-100%] top-[-100%]" />
                <label htmlFor="toggle_search" className="box-border not-italic max-w-full flex-shrink-0 order-3 align-middle my-auto md:pl-2 md:pr-0 pr-2 mx-auto cursor-pointer">
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#c3c6cb", width: "19px" }} />
                </label>

              </div>
            </div>
            {/* MOBILE - Menu */}
            <div className="order-1 hamburger-menu md:hidden block">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
              </label>
              <label className="m-menu__overlay" htmlFor="menu__toggle"></label>

              <ul className="menu__box">
                <div id="accordion-flush" data-accordion="collapse" data-active-classes="border-b border-gray-200" data-inactive-classes="">

                  {navItems.map((item: any) => (
                    <MobileNavLink key={item.id} item={item} />
                  ))}

                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className={`bg-transparent ${isOpen ? 'h-2 z-[-1]' : 'h-0'}`}></div>
    <div className={`relative bg-white w-full px-5 transition-all duration-300 ease-in-out overflow-hidden box-border ${isOpen ? 'h-15 md:py-5 py-3' : 'h-0'}`}>
      <div className="text-[var(--global-color-primary)] bg-white flex items-center justify-center z-10">
        <div className="border rounded-full overflow-hidden flex">
          <input type="search" className="px-4 py-2 placeholder-[var(--global-color-primary)] border-transparent focus:border-transparent focus:ring-0 !outline-none" placeholder="ค้นหาคอร์ส" />
          <button className="flex items-center justify-center px-4 ">
            <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
