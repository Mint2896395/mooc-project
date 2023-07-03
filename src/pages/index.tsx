import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import CardSlider from "components/CardSlider";
import NewSlider from "components/NewSlider";
import CardSliderAll from "components/CardSliderAll";


const Home: NextPage = () => {
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
      <NewSlider />
      <center className="box-border bg-gradient-to-r from-[#ecd5b4] to-[#b39569] pt-[45px]">
        <div className="relative box-border md:h-64 h-36">
          <div className="absolute left-1/2 md:top-1/2 top-8 -translate-x-1/2 -translate-y-1/2 transform ">
            <p className="my-0 box-border whitespace-nowrap md:text-4xl text-2xl fonnt-semibold tracking-[3.2px] text-white">
              คอร์สใหม่
            </p>
          </div>
        </div>
        <hr className="my-6 box-content h-0 overflow-visible border-solid" />
      </center>
      <div className="flex flex-col">
        <CardSlider />
        <div className="md:order-2 relative md:top-[-90px] top-[-120px] box-border flex w-full max-w-full flex-col items-center">
          <div className="box-border ">
            <Link
              className="box-border min-w-[140px] rounded-3xl border border-[var(--global-color-primary)] md:px-6 px-5 py-1 text-center font-[inherit] md:text-base text-sm font-medium normal-case leading-[inherit] tracking-normal text-[var(--global-color-primary)] cursor-pointer"
              href="/courses"
            >
              ดูทั้งหมด
            </Link>
          </div>
        </div>
      </div>
      <div className="md:flow-root flex flex-col text-center">
        <h2 className="md:float-left md:mb-11 mt-0 box-border table md:pl-10 md:text-3xl text-xl font-medium leading-[normal] tracking-wide  text-[rgba(17,17,17,1)] md:underline decoration-sky-500 underline-offset-8 xl:text-3xl">
          คอร์สที่กำลังเปิด
        </h2>
        <div className="md:float-right box-border md:pr-10 pt-3 md:py-0 py-5">
            <Link
              className="box-border min-w-[140px] rounded-3xl border border-[var(--global-color-primary)] md:px-6 px-5 py-1 text-center font-[inherit] md:text-base text-sm font-medium normal-case leading-[inherit] tracking-normal text-[var(--global-color-primary)] cursor-pointer"
              href="/courses"
            >
              ดูทั้งหมด
            </Link>
        </div>
      </div>
      <CardSliderAll />
      <div className="mb-36 mt-16 box-border bg-[url('https://mooc.chula.ac.th/images/index/categoryBG.jpg')] py-24 ">
        <div className=" box-border flex items-center justify-center pl-[var(--bs-gutter-x,_0.75rem)] pr-[var(--bs-gutter-x,_0.75rem)]">
          <div className="box-border w-[88%]">
            <div className="ml-[calc(1.5rem_/_-2)] mr-[calc(1.5rem_/_-2)] mt-[calc(-0px_*_-1)] box-border flex flex-wrap">
              <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)]">
                <h1 className="mb-11 mt-0 box-border text-center font-[Noto_Sans_Thai] text-4xl leading-[normal] tracking-wide text-[rgba(17,17,17,1)] xl:text-4xl">
                  หมวดวิชา
                </h1>
              </div>
            </div>
            <div className="ml-[calc(1.5rem_/_-2)] mr-[calc(1.5rem_/_-2)] mt-[calc(-0px_*_-1)] box-border flex flex-wrap justify-center">
              <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)] md:w-5/6 lg:w-3/4">
                <ul className="my-0 box-border flex justify-center gap-5 pl-0">
                  <li className="float-left box-border flex w-[calc(20%)] max-w-[214px] items-center justify-center rounded-md bg-blue-400 hover:bg-[rgba(130,139,196,1)]">
                    <a
                      className="box-border rounded-md text-[rgba(13,110,253,1)] hover:block "
                      href="https://mooc.chula.ac.th/course/1"
                    >
                      <div className="float-none box-border table ">
                        <img
                          className="box-border h-24 w-auto align-middle "
                          src="https://mooc.chula.ac.th/img/upload/c-language.svg"
                        />
                      </div>
                      <div className="box-border table h-12 w-full text-center ">
                        <p className="my-0 box-border table-cell align-middle text-xl leading-6 tracking-wide text-white ">
                          ภาษา
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="float-left box-border flex w-[calc(20%)] max-w-[214px] items-center justify-center rounded-md bg-orange-400 hover:bg-[rgba(130,139,196,1)]">
                    <a
                      className="box-border rounded-md text-[rgba(13,110,253,1)] hover:block "
                      href="https://mooc.chula.ac.th/course/2"
                    >
                      <div className="float-none box-border table ">
                        <img
                          className="box-border h-24 w-auto align-middle "
                          src="https://mooc.chula.ac.th/img/upload/c-technology.svg"
                        />
                      </div>
                      <div className="box-border table h-12 w-full text-center ">
                        <p className="my-0 box-border table-cell align-middle text-xl leading-6 tracking-wide text-white ">
                          เทคโนโลยี
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="float-left box-border flex w-[calc(20%)] max-w-[214px] items-center justify-center rounded-md bg-sky-400 hover:bg-[rgba(130,139,196,1)]">
                    <a
                      className="box-border rounded-md text-[rgba(13,110,253,1)] hover:block "
                      href="https://mooc.chula.ac.th/course/3"
                    >
                      <div className="float-none box-border table ">
                        <img
                          className="box-border h-24 w-auto align-middle "
                          src="https://mooc.chula.ac.th/img/upload/c-management.svg"
                        />
                      </div>
                      <div className="box-border table h-12 w-full text-center ">
                        <p className="my-0 box-border table-cell align-middle text-xl leading-6 tracking-wide text-white ">
                          การจัดการ
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="float-left box-border flex w-[calc(20%)] max-w-[214px] items-center justify-center rounded-md bg-pink-300 hover:bg-[rgba(130,139,196,1)]">
                    <a
                      className="box-border rounded-md text-[rgba(13,110,253,1)] hover:block "
                      href="https://mooc.chula.ac.th/course/3"
                    >
                      <div className="float-none box-border table ">
                        <img
                          className="box-border h-24 w-auto align-middle "
                          src="https://mooc.chula.ac.th/img/upload/c-art.svg"
                        />
                      </div>
                      <div className="box-border table h-12 w-full text-center ">
                        <p className="my-0 box-border table-cell align-middle text-xl leading-6 tracking-wide text-white ">
                          กฎหมาย
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="float-left box-border flex w-[calc(20%)] max-w-[214px] items-center justify-center rounded-md bg-green-400 hover:bg-[rgba(130,139,196,1)]">
                    <a
                      className="box-border rounded-md text-[rgba(13,110,253,1)] hover:block "
                      href="https://mooc.chula.ac.th/course/5"
                    >
                      <div className="float-none box-border table ">
                        <img
                          className="box-border h-24 w-auto align-middle "
                          src="https://mooc.chula.ac.th/img/upload/c-health.svg"
                        />
                      </div>
                      <div className="box-border table h-12 w-full text-center ">
                        <p className="my-0 box-border table-cell align-middle text-xl leading-6 tracking-wide text-white ">
                          สุขภาพ
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <center className="box-border h-64 bg-gradient-to-r from-[#ecd5b4] to-[#b39569] md:mr-[55%]"></center>
      <div className="items-top relative top-[-125px] mx-5 box-border grid grid-cols-1 gap-5 md:mx-20 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="text-white md:w-1/3 ">
          <p className="text-start text-5xl">ข่าวสาร</p>
          <p className="text-4xl">และบทความ</p>
        </div>
        <Link href="/detail">
          <div className="max-w-lg transform cursor-pointer overflow-hidden rounded transition duration-500 hover:scale-105 hover:bg-white ">
            <img
              className="mx-auto h-64 w-[50vw] object-contain"
              src="https://mooc.chula.ac.th/img/upload/341670743_2875385015928843_9040996893728401192_n.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <p className="float-left text-sm text-blue-700">18 เมษายน 2566</p>
              <br />
              <div className="mb-2 text-base font-bold">
                ศูนย์นวัตกรรมการเรียนรู้ จุฬาฯ ขอเชิญเข้าร่วม
              </div>
              <p className="text-xm">
                ศูนย์นวัตกรรมการเรียนรู้ จุฬาลงกรณ์มหาวิทยาลัย
                ขอเชิญผู้ที่สนใจเข้าร่วมกิจกรรมเพื่อพัฒนาทักษะการจำ
              </p>
            </div>
          </div>
        </Link>
        <Link href="/detail">
          <div className="max-w-lg transform cursor-pointer overflow-hidden rounded transition duration-500 hover:scale-105 hover:bg-white ">
            <img
              className="mx-auto h-64 w-[50vw] object-contain"
              src="https://mooc.chula.ac.th/img/upload/Untitled-1.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <p className="float-left text-sm text-blue-700">
                11 พฤษภาคม 2566
              </p>
              <br />
              <div className="mb-2 text-base font-bold">
                ขอเชิญคณาจารย์ นิสิต นักศึกษา และผู้ที่สนใจทุกท่าน
              </div>
              <p className="text-xm">
                ขอเชิญคณาจารย์ นิสิต นักศึกษา
                และผู้ที่สนใจทุกท่านเข้าร่วมกิจกรรมในหัวข้อ Generative AI และ
                ChatGPT
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
