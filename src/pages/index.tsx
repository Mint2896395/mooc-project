import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import CardSlider from "components/CardSlider";
import NewSlider from "components/NewSlider";
import CardSliderAll from "components/CardSliderAll";
import NewsCardSliderIndex from "components/NewsCardSliderIndex";


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
      <div className="relative md:pt-[75px] pt-[45px] before:bg-gradient-to-r before:from-[#ecd5b4] before:to-[#b39569] before:absolute before:h-[45%] before:z-[-2] before:top-0 before:left-0 before:w-full">
        <div className="flex flex-col mx-auto px-1">
          <center className="box-border">
            <div className="relative box-border ">
              <p className="my-0 box-border whitespace-nowrap md:text-4xl text-2xl fonnt-semibold tracking-[3.2px] text-white mb-[15px]">
                คอร์สใหม่
              </p>
            </div>
          </center>
          <CardSlider />
          <div className="md:order-2 relative box-border flex w-full max-w-full flex-col items-center">
            <div className="box-border ">
              <Link
                className="box-border min-w-[140px] rounded-3xl border border-[var(--global-color-primary)] md:px-6 px-5 py-1 text-center font-[inherit] md:text-base text-sm font-medium normal-case leading-[inherit] tracking-normal text-[var(--global-color-primary)] cursor-pointer mb-5"
                href="/courses"
              >
                ดูทั้งหมด
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:py-20 py-[50px]">
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
      </div>
      <div className="md:mb-36 box-border bg-[url('https://mooc.chula.ac.th/images/index/categoryBG.jpg')] pt-[45px] pb-[65px] ">
        <div className="box-border flex items-center justify-center pl-[var(--bs-gutter-x,_0.75rem)] pr-[var(--bs-gutter-x,_0.75rem)]">
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
      <div className="relative pt-[45px] pb-[60px] before:bg-gradient-to-r before:from-[#ecd5b4] before:to-[#b39569] before:absolute before:md:h-[40%] before:h-[30%] before:z-[-2] before:top-0 before:left-0 before:w-full before:md:w-[48%]">
        <div className="items-top relative mx-3 box-border md:mx-20 flex flex-wrap ">
          <div className="text-white md:w-1/3 w-full">
            <p className="md:block hidden text-start text-5xl">ข่าวสาร</p>
            <p className="md:block hidden text-4xl">และบทความ</p>
            <p className="md:hidden block text-3xl text-center">ข่าวสาร และบทความ</p>
          </div>
          <div className="text-white md:w-2/3 w-full ">
            <NewsCardSliderIndex />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
