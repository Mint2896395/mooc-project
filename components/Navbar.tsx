import Link from "next/link";
import { useRouter } from 'next/router';
// import the library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { navItems } from "../constant";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";

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

  );
};

export default Navbar;
