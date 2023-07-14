import Link from "next/link";
import Image from "next/image";
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
import CardSlider from "~/components/CardSlider";
import BackButton from "./ui/BackButton";
import Course from "~/types/Course";

interface CourseProps {
  course: Course;
}

const Detail = ({ course }: CourseProps) => {
  return (
    <>
      <div className="relative box-border " key={course?.id}>
        <div className="box-border w-full bg-gradient-to-r from-[#b39569] to-[#ecd5b4] p-3 py-[35px] md:p-5 md:py-[75px]">
          <div className="mx-auto box-border w-full md:w-[88%]">
            <div className="box-border flex flex-wrap justify-center ">
              <div className="box-border w-full max-w-full flex-shrink-0 pr-5 md:w-5/6 lg:w-1/2 ">
                <div className="box-border ">
                  <div className="box-border flex flex-wrap ">
                    <div className="box-border w-full max-w-full flex-shrink-0 ">
                      <h4 className="mb-2 mt-0 box-border text-lg font-medium leading-[normal] tracking-wide text-white md:text-2xl">
                        {course?.name}
                      </h4>
                    </div>
                  </div>
                  <div className="box-border flex flex-wrap ">
                    <div className="box-border w-full max-w-full flex-shrink-0 ">
                      <ul className="float-left mb-6 mt-0 box-border w-full pl-0 ">
                        <li className="float-left mb-1 box-border w-full text-sm font-normal tracking-normal text-white md:text-base md:leading-7">
                          <strong className="float-left box-border pr-3 font-semibold text-white">
                            โดย :{" "}
                          </strong>
                          ทีมคณาจารย์จาก CHULA ARi
                        </li>
                        <li className="float-left mb-1 box-border w-full text-sm font-normal tracking-normal text-white md:text-base md:leading-7">
                          <strong className="float-left box-border pr-3 font-semibold text-white">
                            รหัส :{" "}
                          </strong>
                          {course?.code}
                        </li>
                        <li className="float-left box-border flex w-full items-center text-sm font-normal tracking-normal text-white md:text-base md:leading-7">
                          <strong className="float-left box-border pr-3.5 font-semibold text-white">
                            หมู่ :{" "}
                          </strong>
                          <div className="float-left mt-0.5 box-border min-w-[55px] rounded-2xl border-[rgba(244,149,34,1)] bg-[rgba(244,149,34,1)] text-center text-xs font-medium leading-4 tracking-wide text-white">
                            {course?.category}
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
                      <h6 className="mb-2 mt-0 box-border text-center text-base font-semibold leading-[normal] tracking-normal text-white md:mb-5 md:text-left md:text-lg">
                        ลงทะเบียนเรียน
                      </h6>
                    </div>
                  </div>
                  <div className="box-border flex flex-wrap ">
                    <div className="box-border flex w-full max-w-full flex-shrink-0 justify-center md:justify-start ">
                      <ul className="my-0 mb-5 box-border pl-0 ">
                        <li className="float-left mr-3.5 box-border last:mr-0 ">
                          <Link
                            className="float-left box-border rounded-[25px] border-2 border-white bg-yellow-400 px-[13px] pb-[8px] pt-[6px] text-center text-sm font-normal text-white hover:block md:text-base"
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
              <div className="mt-0 box-border w-full max-w-full flex-shrink-0 md:w-5/6 md:pl-5 lg:w-1/2">
                {/* IMAGE */}
                {/*<div className="img-width"><img src="images/course/courseIT-01.jpg"></div>*/}
                {/* VDO */}
                <div className="relative box-border w-full overflow-hidden">
                  <iframe
                    className="aspect-video w-full"
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

      <div className="mx-auto w-full md:w-[88%]">
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
        <div className="relative box-border flex w-full max-w-full flex-shrink-0 flex-col pl-0 md:flex-row">
          <div className="absolute left-2/4 top-2/4 h-[calc(100%_-_14px)] w-[calc(100%_-_14px)] -translate-x-2/4 -translate-y-2/4 border-2 border-solid border-[white] content-['']"></div>
          <div className="z-[-1] box-border md:w-1/2">
            <Image
              className="w-full"
              src={course.src || "/fallback-image.jpg"}
              width={640}
              height={360}
              alt={course.name ?? "Fallback Name"}
            />
          </div>
          <div className="relative z-[-1] w-full bg-gray-100 md:w-1/2">
            <div className="box-border w-[calc(100%_-_12px)] px-[50px] py-[25px] tracking-[0.01rem] md:absolute md:top-[45%] md:-translate-y-2/4 ">
              <div className="ml-[calc(1.5rem_/_-2)] mr-[calc(1.5rem_/_-2)] mt-[calc(-0px_*_-1)] box-border flex flex-wrap">
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)] text-lg font-bold leading-8 text-[rgba(37,37,37,1)] md:w-1/3 lg:w-1/3">
                  เนื้อหา
                </div>
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-0 pr-[calc(var(--bs-gutter-x)_/_2)] text-base leading-8 md:w-2/3 lg:w-2/3">
                  8 บทเรียน
                </div>
              </div>
              <div className="ml-[calc(1.5rem_/_-2)] mr-[calc(1.5rem_/_-2)] mt-[calc(-0px_*_-1)] box-border flex flex-wrap">
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)] text-lg font-bold leading-8 text-[rgba(37,37,37,1)]  md:w-1/3 lg:w-1/3">
                  กลุ่มเป้าหมาย
                </div>
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-0 pr-[calc(var(--bs-gutter-x)_/_2)] text-base leading-8 md:w-2/3 lg:w-2/3">
                  นักเรียน นิสิต นักศึกษา และบุคคลทั่วไป จำนวน 5,000 คน
                </div>
              </div>
              <div className="ml-[calc(1.5rem_/_-2)] mr-[calc(1.5rem_/_-2)] mt-[calc(-0px_*_-1)] box-border flex flex-wrap">
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)] text-lg font-bold leading-8 text-[rgba(37,37,37,1)]  md:w-1/3 lg:w-1/3">
                  เกณฑ์การเรียนจบ
                </div>
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-0 pr-[calc(var(--bs-gutter-x)_/_2)] text-base leading-8 md:w-2/3 lg:w-2/3">
                  ผู้เรียนต้องทำคะแนนรวมทั้งหมดให้ได้ร้อยละ 60 ขึ้นไป
                </div>
              </div>
              <div className="ml-[calc(1.5rem_/_-2)] mr-[calc(1.5rem_/_-2)] mt-[calc(-0px_*_-1)] box-border flex flex-wrap">
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0  pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)] text-lg font-bold leading-8 text-[rgba(37,37,37,1)]  md:w-1/3 lg:w-1/3">
                  แพลตฟอร์ม
                </div>
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-0 pr-[calc(var(--bs-gutter-x)_/_2)] text-base leading-8 md:w-2/3 lg:w-2/3">
                  myCourseVille
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 pt-5 md:flex md:px-10 md:pt-10">
          <span className="box-border w-1/2 space-y-3.5 p-5">
            <div className="box-border flex w-full max-w-full flex-shrink-0 flex-col pb-5">
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
              และการตระหนักรู้ตนเองด้านสุขภาพ กิจกรรมทางกาย
              โภชนาการเพื่อสุขภาพดี การได้ยิน และการมองเห็น
              การดูแลตนเองเพื่อชะลอสมองเสื่อม การดูแลสุขภาพช่องปาก
              และการดูแลสุขภาพจิต เป็นต้น
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
        <div className="px-5 pt-5 md:flex md:px-10 md:pt-10">
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
        <div className="px-5 pt-5 md:flex md:px-10 md:pt-10">
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
      <div className="relative py-[45px] before:absolute before:left-0 before:top-0 before:z-[-2] before:h-[45%] before:w-full before:bg-gradient-to-r before:from-[#ecd5b4] before:to-[#b39569] md:pb-[120px] md:pt-[75px]">
        <center className="box-border">
          <div className="relative box-border ">
            <p className="fonnt-semibold my-0 mb-[15px] box-border whitespace-nowrap text-2xl tracking-[3.2px] text-white md:mb-[35px] md:text-4xl">
              คอร์สแนะนำ
            </p>
          </div>
        </center>
        <CardSlider className="pb-[35px] md:pb-[85px]" column="4" />
        <BackButton href="/courses" label="ย้อนกลับ" className="" icon={true} />
      </div>
    </>
  );
};

export default Detail;
