import Link from "next/link";
import Script from 'next/script'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="mx-0 box-border">
            {/*header1*/}
            <div className="navbar-header ">
                <button className="relative z-10 float-right mr-3.5 box-border cursor-pointer h-0 overflow-visible rounded bg-transparent bg-none normal-case text-inherit md:hidden leading-[inherit]" aria-expanded="true" type="button">
                    <h2 className="mt-5 mb-2.5 box-border text-3xl font-medium text-inherit">
                        <FontAwesomeIcon icon={faBars} style={{width: '40px'}} className='text-white box-border inline-block not-italic leading-none' />
                    </h2>
                </button>
  			 </div>
            <div className="flex items-center justify-center bg-blue-900 pt-20 md:pt-10 pb-[15px] px-[15px]">
            <div className="mx-0 box-border">
                <div className="relative box-border min-h-[1px] px-3.5 md:float-left md:w-1/6 lg:float-left lg:w-1/4" />
                    <div className="flex relative float-left box-border min-h-[1px] w-full px-3.5 md:float-left lg:float-left ">
                        <Link
                            className="box-border bg-transparent text-white"
                            title="home"
                            href="index.php"
                        >
                            <img
                            className="box-border align-middle"
                            width="100%"
                            src="https://lawlibrarykku.online/LOGO_law-kku1.png"
                            />
                        </Link>
                        <span className='text-white w-full pl-5 pt-5'>
                            <h6>คณะนิติศาสตร์ มหาวิทยาลัยขอนแก่น</h6>
                            <p>Faculty of Law, Khon Kaen University</p>
                        </span>
                    </div>
                    <div className="relative box-border min-h-[1px] px-3.5 md:float-left md:w-1/6 lg:float-left lg:w-1/4" />
                    <div className="relative float-left box-border min-h-[1px] w-full px-3.5 md:float-left md:w-full lg:float-left lg:w-full">
                    <div className="box-border font-[Noto_Sans_Thai] float-right text-xs text-[#F2F4F9] mr-[5px] mt-[5px]">
                        <Link
                        className="box-border bg-transparent text-[#F2F4F9] no-underline"
                        title="Change Language"
                        href="../eng/"
                        >
                        TH/EN
                        </Link>
                    </div>
                </div>
            </div>
            </div>
            <div className="mx-0 box-border h-[0.8px] bg-[#0e0e52]" />
            <div className="mx-0 box-border h-[0.8px] bg-[#39399e]" />
            <div className="flex flex-col items-center justify-center bg-blue-900">
                <div className="mx-0 box-border md:h-12">
                    <div className="relative float-left box-border min-h-[1px] w-full px-3.5 md:float-left md:w-full lg:float-left lg:w-full">
                        {/*Main menu*/}
                        <div className="relative mb-0 box-border md:rounded">
                            <div className="static box-border  overflow-x-visible pl-2.5 pr-0 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_0px_inset] md:block md:h-auto md:w-auto md:overflow-visible md:pb-0 md:shadow-[none]">
                                <ul className="static my-0 box-border pl-0 md:float-left py-4 md:py-0">
                                    {/* Classic list */}
                                    <li className="static box-border block font-[Noto_Sans_Thai] text-sm md:float-left mx-2 h-8 md:w-auto w-[80vw]">
                                    <Link
                                        className="relative box-border block bg-transparent leading-5 text-white md:py-3.5 md:text-base xl:text-lg "
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                    </li>
                                    <li className="dropdown static box-border block font-[Noto_Sans_Thai] text-sm md:float-left mx-2 h-8">
                                    <Link
                                        className="relative box-border block bg-transparent leading-5 text-white md:py-3.5 md:text-base xl:text-lg"
                                        href="/courses"
                                    >
                                        หมวดวิชา
                                        <b className="inline-block w-0 h-0 align-middle text-[#ffc74c] ml-0.5 border-t-4 border-t-[\9] border-x-4 border-x-transparent border-dashed" />
                                    </Link>
                                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 z-20">
                                        <li className="">
                                            <Link
                                                className="rounded-t bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            >
                                                ภาษา
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link
                                                className="bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            >
                                                เทคโนโลยี
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link
                                                className="bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            >
                                                การจัดการ
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link
                                                className="bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            >
                                                ศิลปะและการพัฒนาตนเอง
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link
                                                className="bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            >
                                                สุขภาพ
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link
                                                className="rounded-b bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            >
                                                คอร์สทั้งหมด
                                            </Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="dropdown static box-border block font-[Noto_Sans_Thai] text-sm md:float-left mx-2 h-8">
                                    <Link
                                        className="relative box-border block bg-transparent leading-5 text-white md:py-3.5 md:text-base xl:text-lg"
                                        href="#"
                                    >
                                        ประเภทผู้เรียน
                                        <b className="inline-block w-0 h-0 align-middle text-[#ffc74c] ml-0.5 border-t-4 border-t-[\9] border-x-4 border-x-transparent border-dashed" />
                                    </Link>
                                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 z-20">
                                        <li className="">
                                            <Link
                                                className="rounded-t bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            >
                                                นิสิตและบุคลากรจุฬาฯ
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link
                                                className="bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            >
                                                บุคคลทั่วไป
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link
                                                className="rounded-b bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            >
                                                Partner
                                            </Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="static box-border block font-[Noto_Sans_Thai] text-sm md:float-left mx-2 h-8">
                                    <Link
                                        className="relative box-border block bg-transparent leading-5 text-white md:py-3.5 md:text-base xl:text-lg"
                                        href="#"
                                    >
                                        คลังความรู้
                                    </Link>
                                    </li>
                                    <li className="static box-border block font-[Noto_Sans_Thai] text-sm md:float-left mx-2 h-8">
                                    <Link
                                        className="relative box-border block bg-transparent leading-5 text-white md:py-3.5 md:text-base xl:text-lg"
                                        href="#"
                                    >
                                        ข่าวประชาสัมพันธ์
                                    </Link>
                                    </li>
                                    <li className="static box-border block font-[Noto_Sans_Thai] text-sm md:float-left mx-2 h-8">
                                    <Link
                                        className="relative box-border block bg-transparent leading-5 text-white md:py-3.5 md:text-base xl:text-lg"
                                        href="#"
                                    >
                                        คำถามที่พบบ่อย
                                    </Link>
                                    </li>
                                    <li className="dropdown static box-border block font-[Noto_Sans_Thai] text-sm md:float-left mx-2 h-8">
                                    <Link
                                        className="relative box-border block bg-transparent leading-5 text-white md:py-3.5 md:text-base xl:text-lg"
                                        href="#"
                                    >
                                        เกี่ยวกับเรา
                                        <b className="inline-block w-0 h-0 align-middle text-[#ffc74c] ml-0.5 border-t-4 border-t-[\9] border-x-4 border-x-transparent border-dashed" />
                                    </Link>
                                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 z-20">
                                        <li className="">
                                            <Link
                                                className="rounded-t bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            >
                                                เกี่ยวกับเรา
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link
                                                className="bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            >
                                                ติดต่อเรา
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link
                                                className="rounded-b bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            >
                                                คลิปอื่น
                                            </Link>
                                        </li>
                                    </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*END Main menu*/}
                </div>
            </div>
        </div>
    );
}

export default Header