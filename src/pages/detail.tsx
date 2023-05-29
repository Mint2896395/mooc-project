import Header from 'components/Header';
import { GetServerSideProps } from 'next';
import Head from "next/head";
import Link from "next/link";

const Detail = () => {
    return (
        <>
        <Head>
            <title>Lawlibrarykku</title>
            <meta name="description" content="Generated by create-LawKKU-app" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
        </Head>
        <Header />
        <div className="relative box-border ">
            <div className="w-full box-border bg-gradient-to-r from-cyan-100 to-blue-100 p-10 ">
            <div className="box-border ">
                <div className="box-border flex flex-wrap justify-center ">
                <div className="box-border w-full max-w-full flex-shrink-0 pr-5 md:w-5/6 lg:w-1/2 ">
                    <div className="box-border ">
                    <div className="box-border flex flex-wrap ">
                        <div className="box-border w-full max-w-full flex-shrink-0 ">
                        <h4 className="mt-0 mb-2 box-border text-2xl font-medium tracking-wide xl:text-2xl leading-[normal]  text-[rgba(17,17,17,1)]">
                            การดูแลตนเองเพื่อการเป็นผู้สูงวัยสุขภาพดีมีความสุข
                        </h4>
                        </div>
                    </div>
                    <div className="box-border flex flex-wrap ">
                        <div className="box-border w-full max-w-full flex-shrink-0 ">
                        <ul className="float-left mt-0 mb-6 box-border w-full pl-0 ">
                            <li className="float-left mb-0.5 box-border w-full text-base font-normal leading-7 tracking-normal text-[rgba(54,54,54,1)]">
                            <strong className="float-left box-border pr-3 font-semibold text-[rgba(37,37,37,1)]">
                                โดย :{" "}
                            </strong>
                            ทีมคณาจารย์จาก CHULA ARi
                            </li>
                            <li className="float-left mb-0.5 box-border w-full text-base font-normal leading-7 tracking-normal text-[rgba(54,54,54,1)]">
                            <strong className="float-left box-border pr-3 font-semibold text-[rgba(37,37,37,1)]">
                                รหัส :{" "}
                            </strong>
                            MOOC5021
                            </li>
                            <li className="float-left mb-0.5 box-border w-full text-base font-normal leading-7 tracking-normal text-[rgba(54,54,54,1)]">
                            <strong className="float-left box-border pr-3.5 font-semibold text-[rgba(37,37,37,1)]">
                                หมู่ :{" "}
                            </strong>
                            <div className="float-left mt-0.5 box-border rounded-2xl text-center text-xs font-medium leading-4 tracking-wide min-w-[55px] bg-[rgba(244,149,34,1)] text-white border-[rgba(244,149,34,1)]">
                                กฏหมาย
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="box-border flex flex-wrap ">
                        <div className="box-border w-full max-w-full flex-shrink-0 pr-[calc(var(--bs-gutter-x)_/_2)] pl-[calc(var(--bs-gutter-x)_/_2)] mt-[var(--bs-gutter-y)]"></div>
                    </div>
                    <div className="box-border flex flex-wrap ">
                        <div className="box-border w-full max-w-full flex-shrink-0 ">
                        <h6 className="mt-0 mb-5 box-border text-lg font-semibold tracking-normal leading-[normal] font-[Sarabun,_sans-serif] text-[rgba(17,17,17,1)]">
                            ลงทะเบียนเรียน
                        </h6>
                        </div>
                    </div>
                    <div className="box-border flex flex-wrap  ">
                        <div className="box-border w-full max-w-full flex-shrink-0 ">
                        <ul className="my-0 box-border pl-0 ">
                            <li className="float-left mr-3.5 box-border last:mr-0 ">
                            <a
                                className="float-left box-border text-center text-base font-normal text-white hover:block min-w-[200px] bg-yellow-400 rounded-[25px]"
                                target="_blank"
                                href="https://www.mycourseville.com/?q=onlinecourse/course/34730"
                            >
                                บุคคลทั่วไป
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 pl-5 md:w-5/6 lg:w-1/2 ">
                    {/* IMAGE */}
                    {/*<div class="img-width"><img src="images/course/courseIT-01.jpg"></div>*/}
                    {/* VDO */}
                    <div className="relative box-border w-full overflow-hidden">
                        <iframe width="546" height="307" src="https://www.youtube.com/embed/ukZNOXnKvs8" title="CHULA MOOC | การดูแลตนเองเพื่อการเป็นผู้สูงวัยสุขภาพดีมีความสุข" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </div> 
      <div className="box-border w-full max-w-full flex-shrink-0 flex flex-col items-center pt-10">
            <h2 className="relative float-none mt-0 mb-11 box-border table text-center text-3xl font-medium tracking-wide xl:text-3xl leading-[normal]  text-[rgba(17,17,17,1)] underline decoration-sky-500 underline-offset-8 ">
            ช่วงเวลาเรียนสำหรับบุคคลทั่วไป
            </h2>
        </div>
      </>   
    );
}

export default Detail