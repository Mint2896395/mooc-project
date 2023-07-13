import Link from "next/link";
import "flowbite";
import Image from "next/image";
import React from "react";

import { footerLinks } from "../constant";

type ColumnProps = {
  id: any;
  title: string;
  links: {
    id: number;
    title: string;
    path: string;
  }[];
};

const FooterColumn = ({ title, links }: ColumnProps) => {
  return (
    <ul className="mb-2.5 mt-0 box-border ">
      <span className="box-border">
        <span className="box-border text-sm underline decoration-sky-500 underline-offset-8">
          {title}
        </span>
      </span>
      <br />
      <br />
      {links.map((link: any) => (
        <li className="box-border" key={link.id}>
          <Link
            className="box-border bg-transparent "
            target="_blank"
            href={link.path}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const FooterMobile = ({ id, title, links }: ColumnProps) => (
  <>
    <div id={`#accordion-collapse-heading-${id}`}>
      <button
        type="button"
        className="flex w-full items-center justify-between border-b border-dashed border-gray-200 py-5 text-left font-medium text-[#d8d7cf] dark:border-gray-700 dark:text-gray-400"
        data-accordion-target={`#accordion-collapse-body-${id}`}
        aria-expanded="false"
        aria-controls={`#accordion-collapse-body-${id}`}
      >
        <span>{title}</span>
        <svg
          data-accordion-icon
          className="h-6 w-6 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>

    <div
      id={`accordion-collapse-body-${id}`}
      className="hidden"
      aria-labelledby={`accordion-collapse-heading-${id}`}
    >
      <div className="border-b border-gray-200 py-5 dark:border-gray-700">
        <ul className="mb-2.5 ml-2 mt-0 box-border space-y-2 ">
          {links.map((link: any) => (
            <li className="box-border" key={link.id}>
              <Link
                className="box-border bg-transparent "
                target="_blank"
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
);

const FooterContact = () => (
  <p className="box-border leading-6">
    <b className="box-border font-bold">
      <span className="box-border text-xs">
        <span className="box-border text-sm leading-3">คณะนิติศาสตร์</span>
        <br />
        <span className="box-border text-sm leading-3">มหาวิทยาลัยขอนแก่น</span>
      </span>
    </b>
    <br />
    <span className="box-border ">
      123 หมู่ 16 ถ.มิตรภาพ ต.ในเมือง อ.เมือง จ.ขอนแก่น, ประเทศไทย
    </span>
    <br />
    <b className="box-border font-bold">
      <span className="box-border ">โทรศัพท์:</span>
    </b>
    <span className="box-border "> </span>
    <Link className="box-border bg-transparent " href="tel:043-203588">
      <span className="box-border ">(+66) 43-203588</span>
    </Link>
    <span className="box-border "> </span>
    <br />
    <b className="box-border font-bold">
      <span className="box-border ">โทรสาร:</span>
    </b>
    <span className="box-border "> </span>
    <Link className="box-border bg-transparent " href="tel:043-203588">
      <span className="box-border ">(+66) 43-203588</span>
    </Link>
    <br />
    <span className="box-border ">e-mail:</span>
    <span className="box-border ">&nbsp;</span>
    <Link
      className="box-border bg-transparent "
      target="_blank"
      href="mailto:law@kku.ac.th"
    >
      <span className="box-border ">law@kku.ac.th</span>
    </Link>
    <Link className="box-border bg-transparent " href="tel:04320 3875" />
    <br className="box-border " />
    <br />
  </p>
);

const Footer = () => {
  return (
    <footer className="mx-0 box-border flex flex-col bg-[#403f3f] text-[14px] text-[#d8d7cf]">
      <br className="box-border hidden md:block" />
      <br />
      <br className="box-border hidden md:block" />
      <br />
      <div className="mx-auto hidden w-full justify-center md:block md:w-[768px] xl:w-[1200px]">
        <div className="relative float-left box-border min-h-[1px] w-1/2 border-r border-solid border-r-[rgba(165,163,159,0.5)] px-3.5 text-right md:float-left md:w-1/5 lg:float-left lg:w-1/5">
          <FooterColumn
            id={footerLinks[0]?.id ?? ""}
            title={footerLinks[0]?.title ?? ""}
            links={footerLinks[0]?.links ?? []}
          />
        </div>
        <div className="relative float-left box-border min-h-[1px] w-1/2 border-r border-solid border-r-[rgba(165,163,159,0.5)] px-3.5 text-right md:float-left md:w-1/5 lg:float-left lg:w-1/5">
          <FooterColumn
            id={footerLinks[1]?.id ?? ""}
            title={footerLinks[1]?.title ?? ""}
            links={footerLinks[1]?.links ?? []}
          />
        </div>

        <div className="relative float-left box-border min-h-[1px] w-1/2 px-3.5 md:float-left md:w-1/3 lg:float-left lg:w-1/5">
          <Link className="box-border bg-transparent " target="_blank" href="/">
            <Image
              className="mx-auto box-border max-w-[125px] align-middle"
              src="/LOGO_law-kku1.png"
              width={100}
              height={100}
              alt="Law-KKU-Logo"
            />
          </Link>
        </div>
        <div className="relative float-left box-border min-h-[1px] w-1/2 border-l border-solid border-l-[rgba(165,163,159,0.5)] px-3.5 text-right md:float-left md:w-1/5 md:text-left lg:float-left lg:w-1/5">
          <FooterColumn
            id={footerLinks[2]?.id ?? ""}
            title={footerLinks[2]?.title ?? ""}
            links={footerLinks[2]?.links ?? []}
          />
        </div>
        <div className="text-white-100 relative float-left box-border min-h-[1px] w-1/2 border-l border-solid border-l-[rgba(165,163,159,0.5)] px-3.5 text-left leading-5 md:float-left md:w-1/5 lg:float-left lg:w-1/5 ">
          <FooterContact />
        </div>
      </div>

      <div
        id="accordion-collapse"
        className="block px-5 md:hidden"
        data-accordion="collapse"
        data-active-classes="text-white"
        data-inactive-classes="text-[#d8d7cf]"
      >
        <div className="box-border flex min-h-[1px] w-full items-center justify-center p-5">
          <Link className="box-border bg-transparent " target="_blank" href="/">
            <Image
              className="mx-auto box-border max-w-[125px] align-middle"
              src="/LOGO_law-kku1.png"
              width={100}
              height={100}
              alt="Law-KKU-Logo"
            />
          </Link>
        </div>

        <FooterMobile
          id={footerLinks[0]?.id ?? ""}
          title={footerLinks[0]?.title ?? ""}
          links={footerLinks[0]?.links ?? []}
        />

        <FooterMobile
          id={footerLinks[1]?.id ?? ""}
          title={footerLinks[1]?.title ?? ""}
          links={footerLinks[1]?.links ?? []}
        />

        <FooterMobile
          id={footerLinks[2]?.id ?? ""}
          title={footerLinks[2]?.title ?? ""}
          links={footerLinks[2]?.links ?? []}
        />

        <div className="text-white-100 ml-0.5 box-border min-h-[1px] w-full px-3.5 pt-10 text-center leading-5 ">
          <FooterContact />
        </div>
      </div>

      <br className="box-border " />
      <br />
      <div className="h-[0.4px] bg-[#1d1d1d]"></div>
      <div className="h-[0.6px] bg-[#4e4e4e]"></div>
      <div className="bg-[#403f3f] text-xs">
        <div className="text-center text-white">
          <br />
          <p className="box-border ">© 2023 LAW KKU. ALL RIGHTS RESERVED</p>
          <br />
        </div>
      </div>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"
        defer
      />
    </footer>
  );
};

export default Footer;
