import Slider from "components/Slider";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import CardSlider from "components/CardSlider";
import NewSlider from "components/NewSlider";

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
      {/* <Slider /> */}
      <NewSlider />
      <center className="box-border bg-gradient-to-r from-cyan-100 to-blue-100">
        <div className="relative box-border h-64 ">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ">
            <p className="my-0 box-border whitespace-nowrap text-4xl tracking-[3.2px] text-[rgba(112,112,112,1)]">
              คอร์สใหม่
            </p>
          </div>
        </div>
        <hr className="my-6 box-content h-0 overflow-visible border-solid" />
      </center>
      <CardSlider />
      <div className="relative top-[-90px] box-border flex w-full max-w-full flex-col items-center">
        <div className="box-border ">
          <Link
            className="box-border min-w-[140px] rounded-3xl border border-[rgba(200,0,114,1)] px-6 py-2 text-center font-[inherit] text-sm font-medium normal-case leading-[inherit] tracking-normal text-[rgba(200,0,114,1)] open:cursor-pointer"
            href="/courses"
          >
            ดูทั้งหมด
          </Link>
        </div>
      </div>
      <div className="flow-root">
        <h2 className="float-left mb-11 mt-0 box-border table pl-10 text-3xl font-medium leading-[normal] tracking-wide  text-[rgba(17,17,17,1)] underline decoration-sky-500 underline-offset-8 xl:text-3xl">
          คอร์สที่กำลังเปิด
        </h2>
        <div className="float-right box-border pr-10 pt-3">
          <Link
            className="box-border w-[140px] rounded-3xl border border-[rgba(200,0,114,1)] px-6 py-2 text-center font-[inherit] text-sm font-medium normal-case leading-[inherit] tracking-normal text-[rgba(200,0,114,1)] open:cursor-pointer"
            href="/courses"
          >
            ดูทั้งหมด
          </Link>
        </div>
      </div>
      <div className="mx-5 box-border grid grid-cols-1 gap-5 md:mx-20 md:grid-cols-2 lg:grid-cols-3 ">
        <Link href="/detail">
          <div className="mb-5 max-w-lg transform cursor-pointer overflow-hidden rounded shadow-lg transition duration-500 hover:scale-105">
            <img
              className="w-full"
              src="https://lawlibrarykku.online/getclassimg/LW011101_กฎหมายกับสังคม"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-base font-bold">กฎหมายกับสังคม</div>
              <div className="box-border flow-root">
                <p className="float-left text-base text-gray-700">LW011101</p>
                <div className="float-right box-border ">
                  <div className="float-right box-border rounded-sm bg-[#4d40f7] p-0.5 text-center text-xs font-medium text-[#ffee00]">
                    66 ที่ว่าง
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 pb-2 pt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #กฎหมาย
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #สังคม
              </span>
            </div>
          </div>
        </Link>
        <Link href="/detail">
          <div className="mb-5 max-w-lg transform cursor-pointer overflow-hidden rounded shadow-lg transition duration-500 hover:scale-105 ">
            <img
              className="w-full"
              src="https://lawlibrarykku.online/getclassimg/LW011201_หลักกฎหมายเอกชน"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-base font-bold">หลักกฎหมายเอกชน</div>
              <div className="box-border flow-root">
                <p className="float-left text-base text-gray-700">LW011201</p>
                <div className="float-right box-border ">
                  <div className="float-right box-border rounded-sm bg-[#4d40f7] p-0.5 text-center text-xs font-medium text-[#ffee00]">
                    166 ที่ว่าง
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 pb-2 pt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #กฎหมาย
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #เอกชน
              </span>
            </div>
          </div>
        </Link>
        <Link href="/detail">
          <div className="mb-5 max-w-lg transform cursor-pointer overflow-hidden rounded shadow-lg transition duration-500 hover:scale-105">
            <img
              className="w-full"
              src="https://lawlibrarykku.online/getclassimg/LW012102_นิติปรัชญา"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-base font-bold">นิติปรัชญา</div>
              <div className="box-border flow-root">
                <p className="float-left text-base text-gray-700">LW012102</p>
                <div className="float-right box-border ">
                  <div className="float-right box-border rounded-sm bg-[#f03b3b] p-0.5 text-center text-xs font-medium text-white">
                    คอร์สเต็ม
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 pb-2 pt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #นิติกรรม
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div className="mb-36 mt-16 box-border bg-[url('https://mooc.chula.ac.th/images/index/categoryBG.jpg')] py-24 ">
        <div className=" box-border flex items-center justify-center pl-[var(--bs-gutter-x,_0.75rem)] pr-[var(--bs-gutter-x,_0.75rem)]">
          <div className="box-border w-[88%]">
            <div className="ml-[calc(1.5rem_/_-2)] mr-[calc(1.5rem_/_-2)] mt-[calc(-0px_*_-1)] box-border flex flex-wrap">
              <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)]">
                <h1 className="mb-11 mt-0 box-border text-center font-[Chulalongkorn-B] text-4xl font-medium leading-[normal] tracking-wide text-[rgba(17,17,17,1)] xl:text-4xl">
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
      <center className="box-border h-64 bg-gradient-to-r from-cyan-300 to-blue-400 md:mr-[55%]"></center>
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
      <main className="flex hidden min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
