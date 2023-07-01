import Footer from "components/Footer";
import Header from "components/Navbar";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import {
  faCalendar,
  faBook,
  faPenToSquare,
  faFilePen,
  faBullseye,
  faThumbtack,
  faLaptop,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "components/Carousel";
import CardSlider from "components/CardSlider";

const Detail = () => {
  return (
    <>
      <Head>
        <title>Lawlibrarykku</title>
        <meta name="description" content="Generated by create-LawKKU-app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="relative box-border ">
        <div className="box-border w-full bg-gradient-to-r from-[#b39569] to-[#ecd5b4] md:py-[75px] py-[35px] md:p-5 p-3">
          <div className="box-border md:w-[88%] w-full mx-auto">
            <div className="box-border flex flex-wrap justify-center ">
              <div className="box-border w-full max-w-full flex-shrink-0 pr-5 md:w-5/6 lg:w-1/2 ">
                <div className="box-border ">
                  <div className="box-border flex flex-wrap ">
                    <div className="box-border w-full max-w-full flex-shrink-0 ">
                      <h4 className="mb-2 mt-0 box-border text-lg font-medium leading-[normal] tracking-wide text-white md:text-2xl">
                        การดูแลตนเองเพื่อการเป็นผู้สูงวัยสุขภาพดีมีความสุข
                      </h4>
                    </div>
                  </div>
                  <div className="box-border flex flex-wrap ">
                    <div className="box-border w-full max-w-full flex-shrink-0 ">
                      <ul className="float-left mb-6 mt-0 box-border w-full pl-0 ">
                        <li className="mb-1 float-left box-border w-full md:text-base text-sm font-normal md:leading-7 tracking-normal text-white">
                          <strong className="float-left box-border pr-3 font-semibold text-white">
                            โดย :{" "}
                          </strong>
                          ทีมคณาจารย์จาก CHULA ARi
                        </li>
                        <li className="mb-1 float-left box-border w-full md:text-base text-sm font-normal md:leading-7 tracking-normal text-white">
                          <strong className="float-left box-border pr-3 font-semibold text-white">
                            รหัส :{" "}
                          </strong>
                          MOOC5021
                        </li>
                        <li className="float-left box-border w-full md:text-base text-sm font-normal md:leading-7 tracking-normal text-white flex items-center">
                          <strong className="float-left box-border pr-3.5 font-semibold text-white">
                            หมู่ :{" "}
                          </strong>
                          <div className="float-left mt-0.5 box-border min-w-[55px] rounded-2xl border-[rgba(244,149,34,1)] bg-[rgba(244,149,34,1)] text-center text-xs font-medium leading-4 tracking-wide text-white">
                            กฏหมาย
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-border flex flex-wrap ">
                    <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)]"></div>
                  </div>
                  <div className="box-border flex flex-wrap ">
                    <div className="box-border w-full max-w-full flex-shrink-0 ">
                      <h6 className="md:mb-5 mb-2 mt-0 box-border md:text-lg text-base font-semibold leading-[normal] tracking-normal text-white md:text-left text-center">
                        ลงทะเบียนเรียน
                      </h6>
                    </div>
                  </div>
                  <div className="box-border flex flex-wrap ">
                    <div className="box-border w-full max-w-full flex-shrink-0 flex md:justify-start justify-center ">
                      <ul className="my-0 mb-5 box-border pl-0 ">
                        <li className="float-left mr-3.5 box-border last:mr-0 ">
                          <Link
                            className="float-left box-border rounded-[25px] bg-yellow-400 text-center md:text-base text-sm font-normal text-white hover:block border-2 border-white px-[13px] pt-[6px] pb-[8px]"
                            target="_blank"
                            href="https://www.mycourseville.com/?q=onlinecourse/course/34730"
                          >
                            บุคคลทั่วไป
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-0 box-border w-full max-w-full flex-shrink-0 md:pl-5 md:w-5/6 lg:w-1/2">
                {/* IMAGE */}
                {/*<div className="img-width"><img src="images/course/courseIT-01.jpg"></div>*/}
                {/* VDO */}
                <div className="relative box-border w-full overflow-hidden">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/ukZNOXnKvs8"
                    title="CHULA MOOC | การดูแลตนเองเพื่อการเป็นผู้สูงวัยสุขภาพดีมีความสุข"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:w-[88%] w-full mx-auto">
        <div className="box-border flex w-full max-w-full flex-shrink-0 flex-col items-center py-10">
          <div className="flex w-fit items-center space-x-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 px-1 py-1 drop-shadow-md">
            <div className="box-border flex h-10 w-10 items-center justify-center rounded-[50%] bg-white">
              <FontAwesomeIcon
                icon={faCalendar}
                style={{ width: "20px" }}
                className="box-border inline-block not-italic leading-none text-blue-400"
              />
            </div>
            <span className="pr-2 text-xl font-bold text-white">
              ช่วงเวลาเรียนสำหรับบุคคลทั่วไป
            </span>
          </div>
        </div>
        <div className="relative box-border w-full max-w-full flex-shrink-0 pl-0 flex flex-col md:flex-row">
          <div className="content-[''] w-[calc(100%_-_14px)] h-[calc(100%_-_14px)] absolute -translate-x-2/4 -translate-y-2/4 border-2 border-solid border-[white] left-2/4 top-2/4"></div>
          <div className="z-[-1] box-border md:w-1/2">
            <img src="https://mooc.chula.ac.th/img/upload/การดูแลตนเองเพื่อการเป็นผู้สูงวัยสุขภาพ.png" />
          </div>
          <div className="relative md:w-1/2 bg-gray-100 z-[-1] w-full">
            <div className="box-border w-[calc(100%_-_12px)] tracking-[0.01rem] md:absolute md:-translate-y-2/4 px-[50px] py-[25px] md:top-[45%] ">
              <div className="ml-[calc(1.5rem_/_-2)] mr-[calc(1.5rem_/_-2)] mt-[calc(-0px_*_-1)] box-border flex flex-wrap">
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)] text-lg leading-8 text-[rgba(37,37,37,1)] md:w-1/3 lg:w-1/3 font-bold">
                  เนื้อหา
                </div>
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-0 pr-[calc(var(--bs-gutter-x)_/_2)] text-base leading-8 md:w-2/3 lg:w-2/3">
                  8 บทเรียน
                </div>
              </div>
              <div className="ml-[calc(1.5rem_/_-2)] mr-[calc(1.5rem_/_-2)] mt-[calc(-0px_*_-1)] box-border flex flex-wrap">
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)] text-lg leading-8 text-[rgba(37,37,37,1)] md:w-1/3  lg:w-1/3 font-bold">
                  กลุ่มเป้าหมาย
                </div>
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-0 pr-[calc(var(--bs-gutter-x)_/_2)] text-base leading-8 md:w-2/3 lg:w-2/3">
                  นักเรียน นิสิต นักศึกษา และบุคคลทั่วไป จำนวน 5,000 คน
                </div>
              </div>
              <div className="ml-[calc(1.5rem_/_-2)] mr-[calc(1.5rem_/_-2)] mt-[calc(-0px_*_-1)] box-border flex flex-wrap">
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)] text-lg leading-8 text-[rgba(37,37,37,1)] md:w-1/3  lg:w-1/3 font-bold">
                  เกณฑ์การเรียนจบ
                </div>
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-0 pr-[calc(var(--bs-gutter-x)_/_2)] text-base leading-8 md:w-2/3 lg:w-2/3">
                  ผู้เรียนต้องทำคะแนนรวมทั้งหมดให้ได้ร้อยละ 60 ขึ้นไป
                </div>
              </div>
              <div className="ml-[calc(1.5rem_/_-2)] mr-[calc(1.5rem_/_-2)] mt-[calc(-0px_*_-1)] box-border flex flex-wrap">
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0  pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)] text-lg leading-8 text-[rgba(37,37,37,1)] md:w-1/3  lg:w-1/3 font-bold">
                  แพลตฟอร์ม
                </div>
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-0 pr-[calc(var(--bs-gutter-x)_/_2)] text-base leading-8 md:w-2/3 lg:w-2/3">
                  myCourseVille
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-10 md:pt-10 px-5 pt-5 md:flex">
          <span className="box-border w-1/2 space-y-3.5 p-5">
            <div className="box-border flex w-full max-w-full flex-shrink-0 flex-col  pb-5">
              <div className="flex w-fit items-center space-x-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 px-1 py-1 drop-shadow-md">
                <div className="box-border flex h-10 w-10 items-center justify-center rounded-[50%] bg-white">
                  <FontAwesomeIcon
                    icon={faBook}
                    style={{ width: "20px" }}
                    className="box-border inline-block not-italic leading-none text-blue-400"
                  />
                </div>
                <span className="pr-2 text-xl font-bold text-white">
                  เกี่ยวกับรายวิชา
                </span>
              </div>
            </div>
            <p>
              วิชา การดูแลตนเองเพื่อการเป็นผู้สูงวัยสุขภาพดีมีความสุข (Aging
              Society and The Oral Health Care)
              เป็นการนำเสนอความรู้เรื่องการดูแลสุขภาพตนเองซึ่งเป็นเรื่องที่สำคัญ
              เพื่อให้ประชาชนมีสุขภาพดีและมีความสุขในทุกช่วงวัย
              โดยจะมุ่งเน้นการสร้างความรอบรู้ด้านสุขภาพในมิติต่าง ๆ
              ตามแนวทางการบูรณาการดูแลผู้สูงอายุขององค์การอนามัยโลก
              ซึ่งเป็นผลผลิตจากการประชุมผู้เชี่ยวชาญ และความร่วมมือกับกรมอนามัย
              กรมการแพทย์ สำนักอนามัย สสส.
              ภายใต้โครงการบูรณาการสหศาสตร์เพื่อรองรับสังคมสูงวัย (จุฬาอารี)
              เพื่อให้ผู้เรียนมีความรู้และทักษะที่จำเป็นก่อนเข้าสู่วัยผู้สูงอายุ
              สำหรับเนื้อหาวิชาจะประกอบด้วย ความรอบรู้
              และการตระหนักรู้ตนเองด้านสุขภาพ กิจกรรมทางกาย โภชนาการเพื่อสุขภาพดี
              การได้ยิน และการมองเห็น การดูแลตนเองเพื่อชะลอสมองเสื่อม
              การดูแลสุขภาพช่องปาก และการดูแลสุขภาพจิต เป็นต้น
            </p>
          </span>

          <span className="> * + * w-1/2 space-y-3.5 p-5">
            <div className="box-border flex w-full max-w-full flex-shrink-0 flex-col pb-5">
              <div className="flex w-fit items-center space-x-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 px-1 py-1 drop-shadow-md">
                <div className="box-border flex h-10 w-10 items-center justify-center rounded-[50%] bg-white">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    style={{ width: "20px" }}
                    className="box-border inline-block not-italic leading-none text-blue-400"
                  />
                </div>
                <span className="pr-2 text-xl font-bold text-white">
                  เนื้อหารายวิชา
                </span>
              </div>
            </div>
            <p>หัวข้อวิชา การดูแลตนเองเพื่อการเป็นผู้สูงวัยสุขภาพดีมีความสุข</p>
            <p>
              บทที่ 1
              ความรอบรู้และการตระหนักรู้ตนเองด้านสุขภาพตามแนวทางองค์การอนามัยโลก
            </p>
            <p>บทที่ 2 กิจกรรมทางกายเพื่อสุขภาพดีมีความสุข</p>
            <p>บทที่ 3 โภชนาการเพื่อสุขภาพดีมีความสุข</p>
            <p>บทที่ 4 การได้ยินและการมองเห็นเพื่อสุขภาพดีมีความสุข</p>
            <p>บทที่ 5 การดูแลตนเองเพื่อชะลอสมองเสื่อมเพื่อสุขภาพดีมีความสุข</p>
            <p>บทที่ 6 การดูแลสุขภาพจิตเพื่อสุขภาพดีมีความสุขและสุขภาวะ</p>
          </span>
        </div>
        <div className="md:px-10 md:pt-10 px-5 pt-5 md:flex">
          <span className="> * + * box-border w-1/2 space-y-3.5 p-5">
            <div className="box-border flex w-full max-w-full flex-shrink-0 flex-col  pb-5">
              <div className="flex w-fit items-center space-x-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 px-1 py-1 drop-shadow-md">
                <div className="box-border flex h-10 w-10 items-center justify-center rounded-[50%] bg-white">
                  <FontAwesomeIcon
                    icon={faFilePen}
                    style={{ width: "20px" }}
                    className="box-border inline-block not-italic leading-none text-blue-400"
                  />
                </div>
                <span className="pr-2 text-xl font-bold text-white">
                  เกณฑ์การวัดและประเมินผล
                </span>
              </div>
            </div>
            <p>
              การวัดและประเมินผลผ่านแบบทดสอบย่อย (Quiz) และแบบทดสอบหลังเรียน
              (Posttest) โดยจะแบ่งเป็นคะแนนจาก Quiz เท่ากับ 50 คะแนน และคะแนนจาก
              Posttest เท่ากับ 50 คะแนน
              ทั้งนี้ผู้เรียนต้องทำคะแนนรวมทั้งหมดให้ได้ร้อยละ 60
              ขึ้นไปจึงจะสามารถขอรับ Certificate of Completion ได้
            </p>
          </span>

          <span className="> * + * w-1/2 space-y-3.5 p-5">
            <div className="box-border flex w-full max-w-full flex-shrink-0 flex-col pb-5">
              <div className="flex w-fit items-center space-x-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 px-1 py-1 drop-shadow-md">
                <div className="box-border flex h-10 w-10 items-center justify-center rounded-[50%] bg-white">
                  <FontAwesomeIcon
                    icon={faBullseye}
                    style={{ width: "20px" }}
                    className="box-border inline-block not-italic leading-none text-blue-400"
                  />
                </div>
                <span className="pr-2 text-xl font-bold text-white">
                  วัตถุประสงค์
                </span>
              </div>
            </div>
            <p>
              1.เพื่อให้ผู้เรียนสามารถนำความรู้ที่ได้จากบทเรียนไปใช้ในการดูแลตนเองเพื่อเตรียมพร้อมสู่การเป็นผู้สูงวัยสุขภาพดีมีความสุข
            </p>
            <p>
              2.เพื่อให้ผู้เรียนสามารถถ่ายทอดความรู้และทักษะในการดูแลสุขภาพตนเองแก่ประชาชนทั่วไปและผู้ที่สนใจการดูแลตนเองสู่การเป็นผู้สูงวัยสุขภาพดีมีความสุข
            </p>
          </span>
        </div>
        <div className="md:px-10 md:pt-10 px-5 pt-5 md:flex">
          <span className="> * + * box-border w-1/2 space-y-3.5 p-5">
            <div className="box-border flex w-full max-w-full flex-shrink-0 flex-col  pb-5">
              <div className="flex w-fit items-center space-x-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 px-1 py-1 drop-shadow-md">
                <div className="box-border flex h-10 w-10 items-center justify-center rounded-[50%] bg-white">
                  <FontAwesomeIcon
                    icon={faThumbtack}
                    style={{ width: "20px" }}
                    className="box-border inline-block not-italic leading-none text-blue-400"
                  />
                </div>
                <span className="pr-2 text-xl font-bold text-white">
                  หมายเหตุ
                </span>
              </div>
            </div>
            <p>
              1. ผู้เรียนจะมีสิทธิ์ทำแบบทดสอบหลังเรียน (Posttest)
              เมื่อเข้าร่วมกิจกรรมการเรียน (Course Progress) มากกว่า 80% ขึ้นไป
            </p>
            <p>
              2. แบบทดสอบหลังเรียน (Posttest)
              ในแต่ละวิชาจะสามารถทำได้แค่ครั้งเดียวเท่านั้น
            </p>
          </span>
        </div>
        <div className="mb-10 box-border flex w-full max-w-full flex-shrink-0 flex-col items-center py-10">
          <div className="mb-10 flex w-fit items-center space-x-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 px-1 py-1 drop-shadow-md">
            <div className="box-border flex h-10 w-10 items-center justify-center rounded-[50%] bg-white">
              <FontAwesomeIcon
                icon={faLaptop}
                style={{ width: "20px" }}
                className="box-border inline-block not-italic leading-none text-blue-400"
              />
            </div>
            <span className="pr-2 text-xl font-bold text-white">
              อาจารย์ผู้สอน
            </span>
          </div>
          <img
            className="box-border h-44 w-auto pb-5 align-middle"
            src="https://mooc.chula.ac.th/img/upload/ผศ. ดร.ทรงศักดิ์ หมัดสะและ.png"
          ></img>
          <span className="box-border pb-5 text-base underline decoration-sky-500 underline-offset-8">
            ผศ. ดร.ทรงศักดิ์ หมัดสะ
          </span>
          <p className="text-sm">ภาควิชาภาษาตะวันออก คณะนิติศาสตร์</p>
          <p className="text-sm">มหาวิทยาลัยขอนแก่น</p>
        </div>
      </div>
      <center className="box-border bg-gradient-to-r from-[#ecd5b4] to-[#b39569]">
        <div className="relative box-border h-48 md:h-64 ">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ">
            <p className="my-0 box-border whitespace-nowrap text-4xl tracking-[3.2px] text-white">
              คอร์สแนะนำ
            </p>
          </div>
        </div>
        <hr className="my-6 box-content h-0 overflow-visible border-solid" />
      </center>

      <CardSlider />

      <div className="relative top-[-90px] box-border flex w-full max-w-full flex-col items-center">
        <div className="box-border ">
          <Link
            className="box-border min-w-[140px] rounded-3xl border border-[#b39569] px-6 py-2 text-center font-[inherit] text-sm font-medium normal-case leading-[inherit] tracking-normal text-[#b39569] open:cursor-pointer"
            href="/courses"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ width: "10px" }}
              className="box-border inline-block not-italic leading-none text-[#b39569]"
            />
            &nbsp;&nbsp;ย้อนกลับ
          </Link>
        </div>
      </div>
    </>
  );
};

export default Detail;
