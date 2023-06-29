import Link from "next/link";
import { useRouter } from 'next/router';
// import the library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { navItems } from "../constant";
import NavLink from "./NavLink";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="box-border bg-white py-3.5 block overflow-hidden z-50 shadow-md ">
      <div className="box-border pr-[var(--bs-gutter-x,_0.75rem)] pl-[var(--bs-gutter-x,_0.75rem)] ">
        <div className="box-border md:w-[88%] w-full py-0 md:px-[15px] my-0 mx-auto ">
          <div className="box-border flex flex-wrap mt-[calc(-0px_*_-1)] mr-[calc(1.5rem_/_-2)] ml-[calc(1.5rem_/_-2)] items-center justify-center h-full">
            <div className="order-2 box-border max-w-full flex-shrink-0 w-[85%] md:w-1/3 lg:w-1/4 pr-[calc(var(--bs-gutter-x)_/_2)] pl-[calc(var(--bs-gutter-x)_/_2)] mt-[var(--bs-gutter-y)] flex justify-center items-center">
              <Link
                className="md:float-left box-border hover:block "
                title="หน้าแรก"
                href="/"
              >
                <Image
                  className="box-border mx-auto w-14 align-middle"
                  src="/LOGO_law-kku1.png"
                  width={100}
                  height={100}
                  alt="Law-KKU-Logo"
                />
              </Link>
              <span className="pl-3 text-black leading-3 ">
                <h6 className="text-2xl font-semibold tracking-[0.1px]">School of Law</h6>
                <p className="text-[#949494] text-[15px] tracking-[0.5px] ">Khon Kaen University</p>
              </span>
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
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#c3c6cb", width: "24px" }}
                className="box-border not-italic leading-none max-w-full flex-shrink-0 order-3 align-middle my-auto md:border-l border-gray-300 pl-2 mx-auto"
              />
            </div>
            {/* MOBILE - Menu */}
            <div className="order-1 hamburger-menu md:hidden block">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
              </label>

              <ul className="menu__box">
                <div id="accordion-flush" data-accordion="collapse" data-active-classes="border-b border-gray-200" data-inactive-classes="">
                  <li className="border-b border-gray-200">
                    <Link  className={`${router.pathname == "/" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-[#949494]"} font-[Noto_Sans_Thai] flex items-center justify-between w-full py-5 text-left  pl-5 pr-2`}  href="/"> 
                      <span>หน้าแรก</span>
                    </Link>
                  </li>
                  <li id="accordion-flush-heading-1">
                    <button type="button" className={`${router.pathname == "/courses" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300 border-b-gray-200" : "font-light text-[#949494]"} font-[Noto_Sans_Thai] flex items-center justify-between w-full py-5 text-left pl-5 pr-2 border-b border-gray-200`} data-accordion-target="#accordion-flush-body-1" aria-expanded="false" aria-controls="accordion-flush-body-1">
                      <span>หมวดวิชา</span>
                      <svg data-accordion-icon className="w-6 h-6 shrink-0 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                  </li>
                  <div id="accordion-flush-body-1" className="hidden " aria-labelledby="accordion-flush-heading-1">
                    <ul className="py-5 border-b border-gray-200 dark:border-gray-700">
                      <li className="pb-5">
                        <Link  className={`${router.pathname == "/2-1" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-blue-600"} font-[Noto_Sans_Thai] flex items-center justify-between w-full text-left pl-10 pr-2`}  href="/2-1"> 
                          <span>ภาษา</span>
                        </Link>
                      </li>
                      <li className="pb-5">
                        <Link  className={`${router.pathname == "/2-2" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-blue-600"} font-[Noto_Sans_Thai] flex items-center justify-between w-full text-left pl-10 pr-2`}  href="/2-2"> 
                          <span>เทคโนโลยี</span>
                        </Link>
                      </li>
                      <li className="pb-5">
                        <Link  className={`${router.pathname == "/2-3" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-blue-600"} font-[Noto_Sans_Thai] flex items-center justify-between w-full text-left pl-10 pr-2`}  href="/2-3"> 
                          <span>การจัดการ</span>
                        </Link>
                      </li>
                      <li className="pb-5">
                        <Link  className={`${router.pathname == "/2-4" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-blue-600"} font-[Noto_Sans_Thai] flex items-center justify-between w-full text-left pl-10 pr-2`}  href="/2-1"> 
                          <span>ศิลปะและการพัฒนาตนเอง</span>
                        </Link>
                      </li>
                      <li className="pb-5">
                        <Link  className={`${router.pathname == "/2-4" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-blue-600"} font-[Noto_Sans_Thai] flex items-center justify-between w-full text-left pl-10 pr-2`}  href="/2-1"> 
                          <span>สุขภาพ</span>
                        </Link>
                      </li>
                      <li className="pb-5">
                        <Link  className={`${router.pathname == "/courses" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-blue-600"} font-[Noto_Sans_Thai] flex items-center justify-between w-full text-left pl-10 pr-2`}  href="/courses"> 
                          <span>คอร์สทั้งหมด</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <li id="accordion-flush-heading-2">
                    <button type="button" className={`${router.pathname == "/3" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-[#949494]"} font-[Noto_Sans_Thai] flex items-center justify-between w-full py-5 text-left pl-5 pr-2 border-b border-gray-200`} data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                      <span>ประเภทผู้เรียน</span>
                      <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                  </li>
                  <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                    <ul className="py-5 border-b border-gray-200 dark:border-gray-700">
                      <li className="pb-5">
                        <Link  className={`${router.pathname == "/3-1" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-blue-600"} font-[Noto_Sans_Thai] flex items-center justify-between w-full text-left pl-10 pr-2`}  href="/3-1"> 
                          <span>นิสิตและบุคลากรจุฬาฯ</span>
                        </Link>
                      </li>
                      <li className="pb-5">
                        <Link  className={`${router.pathname == "/3-2" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-blue-600"} font-[Noto_Sans_Thai] flex items-center justify-between w-full text-left pl-10 pr-2`}  href="/3-2"> 
                          <span>บุคคลทั่วไป</span>
                        </Link>
                      </li>
                      <li className="pb-5">
                        <Link  className={`${router.pathname == "/3-3" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-blue-600"} font-[Noto_Sans_Thai] flex items-center justify-between w-full text-left pl-10 pr-2`}  href="/3-3"> 
                          <span>Partner</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <li className="border-b border-gray-200">
                    <Link  className={`${router.pathname == "/4" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-[#949494]"} font-[Noto_Sans_Thai] flex items-center justify-between w-full py-5 text-left  pl-5 pr-2`}  href="/4"> 
                      <span>คลังความรู้</span>
                    </Link>
                  </li>
                  <li className="border-b border-gray-200">
                    <Link  className={`${router.pathname == "/5" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-[#949494]"} font-[Noto_Sans_Thai] flex items-center justify-between w-full py-5 text-left  pl-5 pr-2`}  href="/5"> 
                      <span>ข่าวประชาสัมพันธ์</span>
                    </Link>
                  </li>
                  <li className="border-b border-gray-200">
                    <Link  className={`${router.pathname == "/6" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-[#949494]"} font-[Noto_Sans_Thai] flex items-center justify-between w-full py-5 text-left  pl-5 pr-2`}  href="/6"> 
                      <span>คำถามที่พบบ่อย</span>
                    </Link>
                  </li>
                  <li id="accordion-flush-heading-3">
                    <button type="button" className={`${router.pathname == "/3" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-[#949494]"} font-[Noto_Sans_Thai] flex items-center justify-between w-full py-5 text-left pl-5 pr-2 border-b border-gray-200`} data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                      <span>เกี่ยวกับเรา</span>
                      <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                  </li>
                  <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                  <ul className="py-5 border-b border-gray-200 dark:border-gray-700">
                      <li className="pb-5">
                        <Link  className={`${router.pathname == "/6-1" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-blue-600"} font-[Noto_Sans_Thai] flex items-center justify-between w-full text-left pl-10 pr-2`}  href="/6-1"> 
                          <span>เกี่ยวกับเรา</span>
                        </Link>
                      </li>
                      <li className="pb-5">
                        <Link  className={`${router.pathname == "/6-2" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-blue-600"} font-[Noto_Sans_Thai] flex items-center justify-between w-full text-left pl-10 pr-2`}  href="/6-2"> 
                          <span>ติดต่อเรา</span>
                        </Link>
                      </li>
                      <li className="pb-5">
                        <Link  className={`${router.pathname == "/6-3" ? "font-normal text-[var(--global-color-primary)] border-l-4 border-orange-300" : "font-light text-blue-600"} font-[Noto_Sans_Thai] flex items-center justify-between w-full text-left pl-10 pr-2`}  href="/6-3"> 
                          <span>คลิปอื่น</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
