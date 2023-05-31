import Link from "next/link";
import Script from 'next/script'

const Footer = () => {
    return (
        <div className="flex flex-col mx-0 box-border bg-[#403f3f] text-[#d8d7cf] text-[13px]">
        <br className="box-border " />
        <br />
        <br className="box-border " />
        <br />
        <div className="w-full mx-auto justify-center md:w-[768px] xl:w-[1200px]">
            <div className="relative float-left box-border w-1/2 px-3.5 md:float-left md:w-1/6 lg:float-left lg:w-1/6 min-h-[1px] text-right border-r-[rgba(165,163,159,0.5)] border-r border-solid">
            <ul className="mt-0 mb-2.5 box-border ">
                <span className="box-border">
                    <span className="box-border text-sm underline decoration-sky-500 underline-offset-8">
                        LAW KKU
                    </span>
                </span>
                <br/>
                <br/>
                <li className="box-border">
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="send.php?a_id=1682"
                >
                     เกี่ยวกับเรา{" "}
                </Link>
                </li>
                <li className="box-border">
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="send.php?a_id=1683"
                >
                    คำถามที่พบบ่อย{" "}
                </Link>
                </li>
                <li className="box-border">
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="send.php?a_id=1684"
                >
                    การใช้งาน{" "}
                </Link>
                </li>
                <li className="box-border">
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="send.php?a_id=1685"
                >
                   ติดต่อเรา{" "}
                </Link>
                </li>
                <li className="box-border">
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="send.php?a_id=1717"
                >
                    นโยบายความเป็นส่วนตัว{" "}
                </Link>
                </li>
                <li className="box-border">
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="send.php?a_id=1718"
                >
                    นโยบายคุกกี้{" "}
                </Link>
                </li>
            </ul>
            </div>
            <div className="relative float-left box-border w-1/2 px-3.5 md:float-left md:w-1/6 lg:float-left lg:w-1/6 min-h-[1px] text-right border-r-[rgba(165,163,159,0.5)] border-r border-solid mb-5">
            <ul className="mt-0 mb-2.5 box-border ">
                <span className="box-border">
                    <span className="box-border text-sm underline decoration-sky-500 underline-offset-8">
                        หมวดวิชา
                    </span>
                </span>
                <br/>
                <br/>
                <li className="box-border">
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="send.php?a_id=1687"
                >
                    ภาษา{" "}
                </Link>
                </li>
                <li className="box-border">
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="send.php?a_id=1688"
                >
                    เทคโนโลยี{" "}
                </Link>
                </li>
                <li className="box-border">
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="send.php?a_id=1689"
                >
                    การจัดการ{" "}
                </Link>
                </li>
                <li className="box-border">
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="send.php?a_id=1690"
                >
                    ศิลปะและการพัฒนาตนเอง{" "}
                </Link>
                </li>
                <li className="box-border">
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="send.php?a_id=1691"
                >
                    สุขภาพ{" "}
                </Link>
                </li>
                <li className="box-border">
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="send.php?a_id=1719"
                >
                    คอร์สทั้งหมด{" "}
                </Link>
                </li>
            </ul>
            </div>
            <div className="relative float-left box-border w-1/2 px-3.5 md:float-left md:w-1/3 lg:float-left lg:w-1/3 min-h-[1px]">
            <Link
                className="box-border bg-transparent "
                target="_blank"
                href="send.php?a_id=60"
            >
                <img
                    className="box-border mx-auto align-middle w-[50%]"
                    src="https://lawlibrarykku.online/LOGO_law-kku1.png"
                />
            </Link>
            </div>
            <div className="relative float-left box-border w-1/2 px-3.5 md:float-left md:w-1/6 lg:float-left lg:w-1/6 min-h-[1px] md:text-left text-right border-l-[rgba(165,163,159,0.5)] border-l border-solid">
            <ul className="mt-0 mb-2.5 box-border ">
                <span className="box-border">
                    <span className="box-border text-sm underline decoration-sky-500 underline-offset-8">
                        ประเภทผู้เรียน
                    </span>
                </span>
                <br/>
                <br/>
                <li className="box-border">
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="send.php?a_id=1693"
                >
                    <i className="box-border inline-block not-italic leading-none  text-[inherit]" />
                    นิสิตและบุคลากรมหาวิทยาลัยขอนแก่น
                </Link>
                </li>
                <li className="box-border">
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="send.php?a_id=1694"
                >
                    <i className="box-border inline-block not-italic leading-none  text-[inherit]" />
                    บุคคลทั่วไป
                </Link>
                </li>
                <li className="box-border">
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="send.php?a_id=1695"
                >
                    <i className="box-border inline-block not-italic leading-none  text-[inherit]" />
                    Partner
                </Link>
                </li>
            </ul>
            </div>
            <div className="relative float-left box-border w-1/2 px-3.5 md:float-left md:w-1/6 lg:float-left lg:w-1/6 min-h-[1px] text-left border-l-[rgba(165,163,159,0.5)] border-l border-solid leading-5 text-white-100 ">
            <p className="box-border ">
                <b className="box-border font-bold">
                    <span className="box-border text-xs">
                        <span className="box-border text-sm leading-3">
                        คณะนิติศาสตร์ มหาวิทยาลัยขอนแก่น
                        </span>
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
                <Link
                    className="box-border bg-transparent "
                    href="tel:043-203588"
                >
                    <span className="box-border ">
                        (+66) 43-203588
                    </span>
                </Link>
                <span className="box-border "> </span>
                <br />
                <b className="box-border font-bold">
                    <span className="box-border ">โทรสาร:</span>
                </b>
                <span className="box-border "> </span>
                <Link
                    className="box-border bg-transparent "
                    href="tel:043-203588"
                >
                    <span className="box-border ">
                        (+66) 43-203588
                    </span>
                </Link>
                <br />
                <span className="box-border ">e-mail:</span>
                <span className="box-border ">&nbsp;</span>
                <Link
                    className="box-border bg-transparent "
                    target="_blank"
                    href="mailto:law@kku.ac.th"
                >
                    <span className="box-border ">
                        law@kku.ac.th
                    </span>
                </Link>
                <Link
                    className="box-border bg-transparent "
                    href="tel:04320 3875"
                />
                <br className="box-border " />
                <br />
            </p>
            </div>
        </div>
        <br className="box-border " />
        <br />
        <div className="h-[0.4px] bg-[#1d1d1d]"></div>
        <div className="h-[0.6px] bg-[#4e4e4e]"></div>
        <div className="bg-[#403f3f] text-xs">
            <div className="text-center text-white">
                <br/><p className="box-border ">© 2023 LAW KKU. ALL RIGHTS RESERVED</p>
                <br/>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" defer />
        </div>
        
    );
}


export default Footer