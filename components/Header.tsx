import Link from "next/link";
import { useRouter } from 'next/router';
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [menuState, setMenuState] = useState("menu");
  const [navLinksClass, setNavLinksClass] = useState("hidden");

  const onToggleMenu = () => {
    const updatedState = menuState === "menu" ? "close" : "menu";
    setMenuState(updatedState);
    setNavLinksClass(updatedState === "close" ? "" : "hidden");
  };

  return (
    <header className="box-border bg-white py-3.5 block">
      <div className="box-border pr-[var(--bs-gutter-x,_0.75rem)] pl-[var(--bs-gutter-x,_0.75rem)] ">
        <div className="box-border w-[88%] py-0 px-[15px] my-0 mx-auto ">
          <div className="box-border flex flex-wrap mt-[calc(-0px_*_-1)] mr-[calc(1.5rem_/_-2)] ml-[calc(1.5rem_/_-2)] items-center justify-center h-full">
            <div className="box-border w-2/3 max-w-full flex-shrink-0 md:w-1/3 lg:w-1/4 pr-[calc(var(--bs-gutter-x)_/_2)] pl-[calc(var(--bs-gutter-x)_/_2)] mt-[var(--bs-gutter-y)] flex ">
              <Link
                className="float-left box-border hover:block "
                title="หน้าแรก"
                href="/"
              >
                <img
                  className="box-border mx-auto w-14 align-middle"
                  width="100%"
                  src="https://lawlibrarykku.online/LOGO_law-kku1.png"
                />
              </Link>
              <span className="w-full pl-3 text-black leading-3 ">
                <h6 className="text-2xl font-semibold tracking-[0.1px]">School of Law</h6>
                <p className="text-[#949494] text-[15px] tracking-[0.5px] ">Khon Kaen University</p>
              </span>
            </div>
            <div className="box-border w-1/3 max-w-full flex-shrink-0 md:w-2/3 lg:w-3/4 pr-[calc(var(--bs-gutter-x)_/_2)] pl-[calc(var(--bs-gutter-x)_/_2)] mt-[var(--bs-gutter-y)]  ">
              {/* MAIN - MENU :: PC & IPAD PRO */}
              {/* ENG */}
              {/* THAI */}
              <div className="box-border hidden lg:block ">
                <ul className="float-right my-0 box-border pl-0 ">
                  {/* Classic list */}
                  <li className="float-left mr-7 box-border ">
                    <Link
                      className={`${router.pathname == "/" ? "font-normal text-[#d1693a]" : "font-light text-[#949494]"} box-border text-lg hover:block font-[Noto_Sans_Thai] leading-[50px]`} 
                      href="/"
                    >
                      หน้าแรก
                    </Link>
                  </li>
                  <li className="dropdown float-left mr-7 box-border">
                    <Link
                      className={`${router.pathname == "/courses" ? "font-normal text-[#d1693a]" : "font-light text-[#949494]"} box-border text-lg hover:block font-[Noto_Sans_Thai] leading-[50px]`}
                      href="/courses"
                    >
                      หมวดวิชา
                      <b className="ml-0.5 inline-block h-0 w-0 border-x-4 border-t-4 border-dashed border-x-transparent border-t-[\9] align-middle text-[#ffc74c]" />
                    </Link>
                    <ul className="dropdown-menu absolute z-50 hidden pt-1 text-gray-700">
                      <li className="">
                        <Link
                          className="whitespace-no-wrap block rounded-t bg-orange-200 px-4 py-2 hover:bg-orange-400"
                          href="#"
                        >
                          ภาษา
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="whitespace-no-wrap block bg-orange-200 px-4 py-2 hover:bg-orange-400"
                          href="#"
                        >
                          เทคโนโลยี
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="whitespace-no-wrap block bg-orange-200 px-4 py-2 hover:bg-orange-400"
                          href="#"
                        >
                          การจัดการ
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="whitespace-no-wrap block bg-orange-200 px-4 py-2 hover:bg-orange-400"
                          href="#"
                        >
                          ศิลปะและการพัฒนาตนเอง
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="whitespace-no-wrap block bg-orange-200 px-4 py-2 hover:bg-orange-400"
                          href="#"
                        >
                          สุขภาพ
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="whitespace-no-wrap block rounded-b bg-orange-200 px-4 py-2 hover:bg-orange-400"
                          href="#"
                        >
                          คอร์สทั้งหมด
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown float-left mr-7 box-border">
                    <Link
                      className={`${router.pathname == "/1" ? "font-normal text-[#d1693a]" : "font-light text-[#949494]"} box-border text-lg hover:block font-[Noto_Sans_Thai] leading-[50px]`}
                      href="/1"
                    >
                      ประเภทผู้เรียน
                      <b className="ml-0.5 inline-block h-0 w-0 border-x-4 border-t-4 border-dashed border-x-transparent border-t-[\9] align-middle text-[#ffc74c]" />
                    </Link>
                    <ul className="dropdown-menu absolute z-50 hidden pt-1 text-gray-700">
                      <li className="">
                        <Link
                          className="whitespace-no-wrap block rounded-t bg-orange-200 px-4 py-2 hover:bg-orange-400"
                          href="#"
                        >
                          นิสิตและบุคลากรจุฬาฯ
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="whitespace-no-wrap block bg-orange-200 px-4 py-2 hover:bg-orange-400"
                          href="#"
                        >
                          บุคคลทั่วไป
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="whitespace-no-wrap block rounded-b bg-orange-200 px-4 py-2 hover:bg-orange-400"
                          href="#"
                        >
                          Partner
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-7 box-border">
                    <Link
                      className={`${router.pathname == "/2" ? "font-normal text-[#d1693a]" : "font-light text-[#949494]"} box-border text-lg hover:block font-[Noto_Sans_Thai] leading-[50px]`}
                      href="/2"
                    >
                      คลังความรู้
                    </Link>
                  </li>
                  <li className="float-left mr-7 box-border">
                    <Link
                      className={`${router.pathname == "/3" ? "font-normal text-[#d1693a]" : "font-light text-[#949494]"} box-border text-lg hover:block font-[Noto_Sans_Thai] leading-[50px]`}
                      href="/3"
                    >
                      ข่าวประชาสัมพันธ์
                    </Link>
                  </li>
                  <li className="float-left mr-7 box-border">
                    <Link
                      className={`${router.pathname == "/4" ? "font-normal text-[#d1693a]" : "font-light text-[#949494]"} box-border text-lg hover:block font-[Noto_Sans_Thai] leading-[50px]`}
                      href="/4"
                    >
                      คำถามที่พบบ่อย
                    </Link>
                  </li>
                  <li className="dropdown float-left mr-7 box-border">
                    <Link
                      className={`${router.pathname == "/5" ? "font-normal text-[#d1693a]" : "font-light text-[#949494]"} box-border text-lg hover:block font-[Noto_Sans_Thai] leading-[50px]`}
                      href="/5"
                    >
                      เกี่ยวกับเรา
                      <b className="ml-0.5 inline-block h-0 w-0 border-x-4 border-t-4 border-dashed border-x-transparent border-t-[\9] align-middle text-[#ffc74c]" />
                    </Link>
                    <ul className="dropdown-menu absolute z-50 hidden pt-1 text-gray-700">
                      <li className="">
                        <Link
                          className="whitespace-no-wrap block rounded-t bg-orange-200 px-4 py-2 hover:bg-orange-400"
                          href="#"
                        >
                          เกี่ยวกับเรา
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="whitespace-no-wrap block bg-orange-200 px-4 py-2 hover:bg-orange-400"
                          href="#"
                        >
                          ติดต่อเรา
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="whitespace-no-wrap block rounded-b bg-orange-200 px-4 py-2 hover:bg-orange-400"
                          href="#"
                        >
                          คลิปอื่น
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* MAIN - MENU :: IPAD & MOBILE */}
              <div className="box-border block md:block lg:hidden ">
                <ul className="float-right my-0 box-border pl-0 ">
                  <li className="block first:mr-6 ">
                    <div className="relative box-border flex w-full flex-wrap items-stretch overflow-hidden rounded-2xl ">
                      <input
                        className="relative box-border block rounded bg-white bg-clip-padding text-sm font-normal open:rounded-r-none font-[inherit] leading-[normal] w-[1%] text-[rgba(219,95,142,1)] min-w-[200px] shadow-[none]"
                        placeholder="ค้นหาคอร์ส"
                        type="search"
                      />
                      <div className="-ml-px box-border rounded-l-none ">
                        <button
                          className="relative box-border inline-block cursor-pointer rounded-none bg-transparent text-center align-middle text-base font-normal normal-case open:cursor-pointer font-[inherit] leading-[normal] z-[2] text-[rgba(219,95,142,1)] min-h-[30px]"
                          type="button"
                        >
                          <i className="absolute box-border " />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="float-left box-border ">
                    {/* HAMBURGER - MENU */}
                    <button
                      className="float-right box-border inline-block cursor-pointer rounded-none bg-transparent text-center align-middle text-xl font-normal normal-case leading-7 open:cursor-pointer font-[inherit] text-[rgba(219,95,142,1)]"
                      type="button"
                    >
                      <i className="box-border " />
                    </button>
                  </li>
                  {/* Modal */}
                  <div
                    className="fixed top-0 left-0 box-border hidden h-full w-full overflow-hidden open:opacity-0 z-[9999]"
                    aria-hidden="true"
                    aria-labelledby="myModalLabel"
                    role="dialog"
                    tabIndex={-1}
                  >
                    <div className=" max-w-[500px]" role="document">
                      <div className="relative float-left box-border flex w-full flex-shrink-0 items-center justify-between rounded-none bg-white ">
                        <a
                          className="absolute top-1/2 float-left mb-5 box-border hover:block text-[rgba(13,110,253,1)]"
                          href="https://mooc.chula.ac.th/index"
                        >
                          <img
                            className="box-border h-8 w-auto align-middle "
                            src="https://mooc.chula.ac.th/images/cumooc-logo.svg"
                          />
                        </a>
                        <button
                          className="absolute top-1/2 box-border inline-block cursor-pointer rounded-none bg-transparent text-center align-middle text-base font-normal normal-case leading-normal opacity-100 open:cursor-pointer font-[inherit] text-[rgba(33,37,41,1)] z-[99]"
                          aria-label="Close"
                          type="button"
                        >
                          <i className="box-border text-base text-[rgba(149,149,149,1)]" />
                        </button>
                      </div>
                      <div className="pointer-events-auto relative box-border flex h-full w-full flex-col overflow-y-auto rounded-none bg-white bg-clip-padding pt-0 ">
                        {/* MAINMENU */}
                        <div className="relative box-border ">
                          <div className="fixed box-border h-full w-full bg-white z-[100] shadow-[rgba(50,_50,_50,_0.1)_0px_2px_2px_0px]">
                            <div className="relative box-border h-full overflow-auto ">
                              <div className="box-border ">
                                <div className="relative box-border overflow-x-hidden ">
                                  <div className="relative left-0 box-border w-[2000px]">
                                    <div className="float-left box-border w-80 ">
                                      <ul className="my-0 box-border pl-0 ">
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-base tracking-normal hover:block text-[#949494] font-[Noto_Sans_Thai] leading-[normal]"
                                              href="https://mooc.chula.ac.th/home"
                                            >
                                              หน้าแรก
                                            </a>
                                          </div>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-base tracking-normal hover:block text-[#949494] font-[Noto_Sans_Thai] leading-[normal]"
                                              href="#"
                                            >
                                              หมวดหมู่คอร์ส
                                              <img
                                                className="absolute top-1/2 mr-0 box-border h-auto w-5 cursor-pointer align-middle "
                                                src="https://mooc.chula.ac.th/images/icon/icon-chevronR.svg"
                                              />
                                            </a>
                                          </div>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-base tracking-normal hover:block text-[#949494] font-[Noto_Sans_Thai] leading-[normal]"
                                              href="#"
                                            >
                                              ประเภทผู้เรียน
                                              <img
                                                className="absolute top-1/2 mr-0 box-border h-auto w-5 cursor-pointer align-middle "
                                                src="https://mooc.chula.ac.th/images/icon/icon-chevronR.svg"
                                              />
                                            </a>
                                          </div>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-base tracking-normal hover:block text-[#949494] font-[Noto_Sans_Thai] leading-[normal]"
                                              href="https://mooc.chula.ac.th/knowledge"
                                            >
                                              คลังความรู้
                                            </a>
                                          </div>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-base tracking-normal hover:block text-[#949494] font-[Noto_Sans_Thai] leading-[normal]"
                                              href="https://mooc.chula.ac.th/news"
                                            >
                                              ข่าวสารประชาสัมพันธ์
                                            </a>
                                          </div>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-base tracking-normal hover:block text-[#949494] font-[Noto_Sans_Thai] leading-[normal]"
                                              href="https://mooc.chula.ac.th/faq/1"
                                            >
                                              คำถามที่พบบ่อย
                                            </a>
                                          </div>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-base tracking-normal hover:block text-[#949494] font-[Noto_Sans_Thai] leading-[normal]"
                                              href="#"
                                            >
                                              เกี่ยวกับเรา
                                              <img
                                                className="absolute top-1/2 mr-0 box-border h-auto w-5 cursor-pointer align-middle "
                                                src="https://mooc.chula.ac.th/images/icon/icon-chevronR.svg"
                                              />
                                            </a>
                                          </div>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-base tracking-normal hover:block text-[#949494] font-[Noto_Sans_Thai] leading-[normal]"
                                              href=""
                                            >
                                              การใช้งาน
                                            </a>
                                          </div>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-base tracking-normal hover:block text-[#949494] font-[Noto_Sans_Thai] leading-[normal]"
                                              href="https://mooc.chula.ac.th/privacy-policy"
                                            >
                                              นโยบายความเป็นส่วนตัว
                                            </a>
                                          </div>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-base tracking-normal hover:block text-[#949494] font-[Noto_Sans_Thai] leading-[normal]"
                                              href="https://mooc.chula.ac.th/cookies-policy"
                                            >
                                              นโยบายคุกกี้
                                            </a>
                                          </div>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block pt-4 text-sm leading-5 tracking-normal hover:block text-[rgba(70,70,70,1)] font-[Sarabun,_sans-serif]"
                                              href="#"
                                            >
                                              <img
                                                className="mr-3 box-border w-5 align-middle leading-5 mt-[-3px]"
                                                src="https://mooc.chula.ac.th/images/icon/flag-th.svg"
                                              />
                                              TH
                                              <img
                                                className="absolute top-1/2 mr-0 box-border h-auto w-5 cursor-pointer align-middle "
                                                src="https://mooc.chula.ac.th/images/icon/icon-chevronR.svg"
                                              />
                                            </a>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* LANG */}
                                    <div className="float-left box-border hidden w-80 ">
                                      <div className="box-border text-right ">
                                        <div className="relative float-left box-border w-full bg-neutral-100 ">
                                          <a
                                            className="relative box-border block text-sm font-normal leading-6 tracking-normal hover:block text-[rgba(85,85,85,1)] font-[Sarabun,_sans-serif]"
                                            href="#"
                                          >
                                            ย้อนกลับ
                                            <img
                                              className="absolute top-1/2 right-auto mr-0 box-border h-auto w-5 cursor-pointer align-middle "
                                              src="https://mooc.chula.ac.th/images/icon/icon-chevronL.svg"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                      <ul className="float-left my-0 box-border w-full pl-0 ">
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-sm leading-5 tracking-normal hover:block text-[#949494] font-[Sarabun,_sans-serif]"
                                              href="https://mooc.chula.ac.th/lang_th"
                                            >
                                              <img
                                                className="mr-3 box-border w-5 align-middle leading-5 mt-[-3px]"
                                                src="https://mooc.chula.ac.th/images/icon/flag-th.svg"
                                              />
                                              TH
                                            </a>
                                          </div>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-sm leading-5 tracking-normal hover:block text-[#949494] font-[Sarabun,_sans-serif]"
                                              href="https://mooc.chula.ac.th/lang_en"
                                            >
                                              <img
                                                className="mr-3 box-border w-5 align-middle leading-5 mt-[-3px]"
                                                src="https://mooc.chula.ac.th/images/icon/flag-en.svg"
                                              />
                                              EN
                                            </a>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* COURSE */}
                                    <div className="float-left box-border hidden w-80 ">
                                      <div className="box-border text-right ">
                                        <div className="relative float-left box-border w-full bg-neutral-100 ">
                                          <a
                                            className="relative box-border block text-sm font-normal leading-6 tracking-normal hover:block text-[rgba(85,85,85,1)] font-[Sarabun,_sans-serif]"
                                            href="#"
                                          >
                                            ย้อนกลับ
                                            <img
                                              className="absolute top-1/2 right-auto mr-0 box-border h-auto w-5 cursor-pointer align-middle "
                                              src="https://mooc.chula.ac.th/images/icon/icon-chevronL.svg"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                      <ul className="float-left my-0 box-border w-full pl-0 ">
                                        <li className="float-left box-border w-full ">
                                          <a
                                            className="box-border hover:block text-[rgba(13,110,253,1)]"
                                            href="https://mooc.chula.ac.th/course/1"
                                          >
                                            ภาษา
                                          </a>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <a
                                            className="box-border hover:block text-[rgba(13,110,253,1)]"
                                            href="https://mooc.chula.ac.th/course/2"
                                          >
                                            เทคโนโลยี
                                          </a>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <a
                                            className="box-border hover:block text-[rgba(13,110,253,1)]"
                                            href="https://mooc.chula.ac.th/course/3"
                                          >
                                            การจัดการ
                                          </a>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <a
                                            className="box-border hover:block text-[rgba(13,110,253,1)]"
                                            href="https://mooc.chula.ac.th/course/4"
                                          >
                                            ศิลปะและการพัฒนาตนเอง
                                          </a>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <a
                                            className="box-border hover:block text-[rgba(13,110,253,1)]"
                                            href="https://mooc.chula.ac.th/course/5"
                                          >
                                            สุขภาพ
                                          </a>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <a
                                            className="box-border hover:block text-[rgba(13,110,253,1)]"
                                            href="https://mooc.chula.ac.th/course-all"
                                          >
                                            คอร์สทั้งหมด
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* LEARNER TYPE */}
                                    <div className="float-left box-border hidden w-80 ">
                                      <div className="box-border text-right ">
                                        <div className="relative float-left box-border w-full bg-neutral-100 ">
                                          <a
                                            className="relative box-border block text-sm font-normal leading-6 tracking-normal hover:block text-[rgba(85,85,85,1)] font-[Sarabun,_sans-serif]"
                                            href="#"
                                          >
                                            ย้อนกลับ
                                            <img
                                              className="absolute top-1/2 right-auto mr-0 box-border h-auto w-5 cursor-pointer align-middle "
                                              src="https://mooc.chula.ac.th/images/icon/icon-chevronL.svg"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                      <ul className="float-left my-0 box-border w-full pl-0 ">
                                        <li className="float-left box-border w-full ">
                                          <a
                                            className="box-border hover:block text-[rgba(13,110,253,1)]"
                                            href="https://mooc.chula.ac.th/learner/Chula"
                                          >
                                            นิสิตและบุคลากรจุฬาฯ
                                          </a>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <a
                                            className="box-border hover:block text-[rgba(13,110,253,1)]"
                                            href="https://mooc.chula.ac.th/learner/Guest"
                                          >
                                            บุคคลทั่วไป
                                          </a>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-base tracking-normal hover:block text-[#949494] font-[Noto_Sans_Thai] leading-[normal]"
                                              href="https://mooc.chula.ac.th/learner-partner"
                                            >
                                              Partner
                                            </a>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* ABOUT */}
                                    <div className="float-left box-border hidden w-80 ">
                                      <div className="box-border text-right ">
                                        <div className="relative float-left box-border w-full bg-neutral-100 ">
                                          <a
                                            className="relative box-border block text-sm font-normal leading-6 tracking-normal hover:block text-[rgba(85,85,85,1)] font-[Sarabun,_sans-serif]"
                                            href="#"
                                          >
                                            ย้อนกลับ
                                            <img
                                              className="absolute top-1/2 right-auto mr-0 box-border h-auto w-5 cursor-pointer align-middle "
                                              src="https://mooc.chula.ac.th/images/icon/icon-chevronL.svg"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                      <ul className="float-left my-0 box-border w-full pl-0 ">
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-base tracking-normal hover:block text-[#949494] font-[Noto_Sans_Thai] leading-[normal]"
                                              href="https://mooc.chula.ac.th/about"
                                            >
                                              เกี่ยวกับเรา
                                            </a>
                                          </div>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-base tracking-normal hover:block text-[#949494] font-[Noto_Sans_Thai] leading-[normal]"
                                              href="https://mooc.chula.ac.th/contact"
                                            >
                                              ติดต่อเรา
                                            </a>
                                          </div>
                                        </li>
                                        <li className="float-left box-border w-full ">
                                          <div className="relative float-left box-border w-full ">
                                            <a
                                              className="relative box-border block text-base tracking-normal hover:block text-[#949494] font-[Noto_Sans_Thai] leading-[normal]"
                                              target="_blank"
                                              href=""
                                            >
                                              คลิปอื่น
                                            </a>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-0 box-border">
        {/*header1*/}
        <div className="navbar-header ">
          <button
            onClick={onToggleMenu}
            className="relative z-10 float-right mr-3.5 box-border h-0 cursor-pointer overflow-visible rounded bg-transparent bg-none normal-case leading-[inherit] text-inherit md:hidden"
            aria-expanded="true"
            type="button"
          >
            <h2 className="mb-2.5 mt-5 box-border text-3xl font-medium text-inherit">
              <FontAwesomeIcon
                icon={faBars}
                style={{ width: "40px" }}
                className="box-border inline-block not-italic leading-none text-white"
              />
            </h2>
          </button>
        </div>
      </div>
    </header>

  );
};

export default Header;
