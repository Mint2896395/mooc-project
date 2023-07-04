import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import {
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

interface News {
  source: {
    id: number;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface NewsProps {
  news: News[];
}

const baseUrl = process.env.API_BASE_URL || "http://localhost:3000";

export default function News({ news }: NewsProps) {
  const router = useRouter();
  const { id } = router.query;

  const selectedNews = news.find((newsItem) => newsItem.source.id === Number(id));

  return (
    <>
      <center className="box-border  ">
        <div className="relative box-border md:h-[250px] h-[130px] ">
          <div className="relative top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 ">
              <p className="my-0 box-border whitespace-nowrap md:text-4xl text-2xl text-[#b39573] tracking-[3.2px]">
                  ข่าวสาร และบทความ
              </p>
          </div>
        </div>
        
        <hr className="md:mt-6 box-content h-0 overflow-visible border-solid" />
      </center>
      <article>
        {selectedNews ? (
          <div className="box-border pb-36 py-20">
            <div className="box-border ">
              <div className="box-border w-[88%] px-[15px] mx-auto">
                <div className="box-border ">
                  <div className="box-border flex flex-wrap justify-center ">
                    <div className="box-border w-full max-w-full flex-shrink-0 pr-5 md:w-11/12 lg:w-3/4 ">
                      <div className="box-border flex flex-wrap ">
                        <div className="box-border w-full max-w-full flex-shrink-0 ">
                          <div className="float-left mb-2 box-border text-sm font-medium tracking-normal text-[var(--global-color-primary)]">20 มิถุนายน 2566</div>
                        </div>
                      </div>
                      <div className="box-border flex flex-wrap ">
                        <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 font-[Noto_Sans_Thai]">
                          <h4 className="mt-0 mb-6 box-border text-2xl font-medium tracking-wide xl:text-2xl leading-[normal] text-[rgba(17,17,17,1)]">{selectedNews.title}</h4>
                        </div>
                      </div>
                      <div className="box-border flex flex-wrap ">
                        <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 ">
                          <div className="mb-10 box-border overflow-hidden rounded-xl ">
                            <img className="box-border h-auto w-full align-middle " src={selectedNews.urlToImage} />
                          </div>
                        </div>
                      </div>
                      <div className="box-border flex flex-wrap ">
                        <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 ">
                          <div className="mb-14 box-border ">
                            {selectedNews.content}
                          </div>
                        </div>
                      </div>
                      <div className="box-border flex flex-wrap ">
                        <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 ">
                          <ul className="float-left mt-0 mb-14 box-border w-full pl-0 ">
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 md:w-full lg:w-1/4 ">
                      <div className="mb-14 box-border bg-[rgba(254,244,245,1)] py-[25px] px-5">
                        <div className="box-border flex flex-wrap ">
                          <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 font-[Noto_Sans_Thai]">
                            <h5 className="relative mt-0 mb-10 box-border pb-2 text-center text-2xl font-medium tracking-wide leading-[normal] text-[rgba(17,17,17,1)]">ข่าวสารและบทความล่าสุด</h5>
                          </div>
                        </div>
                        {/* <!-- LASTEST NEWS :: PC & IPAD PRO --> */}
                        <div className="box-border hidden md:hidden lg:block ">
                          <div className="box-border flex flex-wrap ">
                            <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 md:w-1/3 lg:w-full ">
                              <a className="mb-9 box-border hover:block text-[rgba(13,110,253,1)]" href="https://mooc.chula.ac.th/news-detail/11">
                                <div className="box-border flex flex-wrap ">
                                  <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 ">
                                    <div className="mb-3 box-border overflow-hidden rounded-xl ">
                                      <div className="relative box-border overflow-hidden rounded-xl pt-[78%]">
                                        <img className="absolute top-1/2 left-1/2 box-border h-full w-auto align-middle " src="https://mooc.chula.ac.th/img/upload/ปกหน้า_ChatGPT ถอยไป.png" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="box-border flex flex-wrap ">
                                  <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 ">
                                    <div className="float-left mb-1 box-border text-xs font-medium tracking-normal text-[rgba(219,95,142,1)]">20 มิถุนายน 2566</div>
                                  </div>
                                </div>
                                <div className="box-border flex flex-wrap ">
                                  <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 ">
                                    <div className="mb-0 box-border ">
                                      <p className="my-0 box-border overflow-hidden text-base font-medium tracking-normal text-[rgba(37,37,37,1)]">ขอเชิญชาวจุฬาฯ และบุคคลทั่วไป เข้าฟังบรรยายในหัวข้อ: ChatGPT ถอยไป!! มาปล่อยพลัง AI ด้วย Microsoft Bing x GPT4</p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <!-- LASTEST NEWS :: IPAD & MOBILE --> */}
                        <div className="box-border block md:block lg:hidden ">
                          <div className="relative box-border ">
                            <div className="relative mb-20 box-border block w-full z-[1]">
                              <div className="relative box-border overflow-hidden ">
                                <div className="relative box-border touch-manipulation ">
                                  <div className="relative float-left box-border min-h-[1px]">
                                    <div className="box-border ">
                                      <a className="mb-9 box-border hover:block text-[rgba(13,110,253,1)]" href="https://mooc.chula.ac.th/news-detail/11">
                                        <div className="box-border flex flex-wrap ">
                                          <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 ">
                                            <div className="mb-3 box-border overflow-hidden rounded-xl ">
                                              <div className="relative box-border overflow-hidden rounded-xl pt-[78%]">
                                                <img className="absolute top-1/2 left-1/2 box-border block h-full w-full align-middle " src="https://mooc.chula.ac.th/img/upload/ปกหน้า_ChatGPT ถอยไป.png" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="box-border flex flex-wrap ">
                                          <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 ">
                                            <div className="float-left mb-1 box-border text-xs font-medium tracking-normal text-[rgba(219,95,142,1)]">20 มิถุนายน 2566</div>
                                          </div>
                                        </div>
                                        <div className="box-border flex flex-wrap ">
                                          <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 ">
                                            <div className="mb-0 box-border ">
                                              <p className="my-0 box-border overflow-hidden text-base font-medium tracking-normal text-[rgba(37,37,37,1)]">ขอเชิญชาวจุฬาฯ และบุคคลทั่วไป เข้าฟังบรรยายในหัวข้อ: ChatGPT ถอยไป!! มาปล่อยพลัง AI ด้วย Microsoft Bing x GPT4</p>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-2.5 box-border text-center z-[99]">
                                <button className="absolute top-1/2 box-border inline-block h-10 w-10 cursor-default rounded-sm text-sm normal-case text-white opacity-50 open:cursor-pointer font-[inherit] leading-[inherit] shadow-[none] z-[99]" role="presentation" type="button">
                                  <i className="absolute top-1/2 left-1/2 box-border text-sm text-white "></i>
                                </button>
                                <button className="absolute top-1/2 box-border inline-block h-10 w-10 cursor-pointer rounded-sm text-sm normal-case text-white open:cursor-pointer font-[inherit] leading-[inherit] shadow-[none] z-[99]" role="presentation" type="button">
                                  <i className="absolute top-1/2 left-1/2 box-border text-sm text-white "></i>
                                </button>
                              </div>
                              <div className="absolute bottom-0 left-1/2 mt-0 box-border hidden text-center "></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative box-border flex w-full max-w-full flex-col items-center">
                  <div className="box-border ">
                    <Link
                      className="group box-border min-w-[140px] rounded-3xl border border-[var(--global-color-primary)] px-6 py-2 text-center font-[inherit] text-sm font-medium normal-case leading-[inherit] tracking-normal text-[var(--global-color-primary)] cursor-pointer hover:bg-[var(--global-color-primary)]"
                      href="/news"
                    >
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ width: "10px" }}
                        className="box-border inline-block not-italic leading-none text-[var(--global-color-primary)] group-hover:text-white"
                      />
                      <span className="group-hover:text-white ">
                        &nbsp;&nbsp;ย้อนกลับ
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps<NewsProps> = async () => {
  const response = await fetch(`${baseUrl}/api/news`);
  const data = await response.json();

  return {
    props: {
      news: data.newses || [],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${baseUrl}/api/news`);
  const data = await response.json();
  const paths = data.newses.map((newsItem: News) => ({
    params: { id: String(newsItem.source.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

