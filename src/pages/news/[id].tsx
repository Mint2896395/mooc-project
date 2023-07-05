import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import {
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import NewsCardSlider from "components/NewsCardSlider";
import BackButton from "components/BackButton";

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
          <div className="box-border md:pb-36 pb-[65px] md:py-20 py-[50px]">
            <div className="box-border ">
              <div className="box-border md:w-[88%] w-full px-[15px] mx-auto">
                <div className="box-border ">
                  <div className="box-border flex flex-wrap justify-center ">
                    <div className="box-border w-full max-w-full flex-shrink-0 md:pr-5 pr-0 md:w-11/12 lg:w-3/4 ">
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
                      <div className="md:mb-14 mb-[30px] box-border bg-[#fef8f4] py-[25px] px-5">
                        <div className="box-border flex flex-wrap ">
                          <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 font-[Noto_Sans_Thai] md:px-0 px-2">
                            <h5 className="relative mt-0 mb:mb-10 mb-[28px] mx-auto box-border md:pb-2 pb-0 text-center md:text-2xl text-lg font-medium tracking-wide leading-[normal] text-[rgba(17,17,17,1)] md:border-b-[3px] border-b-[2px] border-[var(--global-color-primary)] md:block table">ข่าวสารและบทความล่าสุด</h5>
                          </div>
                        </div>
                        {/* <!-- LASTEST NEWS :: PC & IPAD PRO --> */}
                        <div className="box-border hidden md:hidden lg:block ">
                          <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 md:w-1/3 lg:w-full mb-[30px] ">
                            {news?.slice(0, 5).map((news) => {
                                return (
                                  <>                                    
                                    <Link href={`/news/${news.source.id}`} key={news.source.id}>
                                      <div className="group w-full transform cursor-pointer overflow-hidden md:h-full md:max-w-lg mb-[35px]">
                                        <div className="box-border flex flex-wrap ">
                                          <div className="box-border w-full max-w-full flex-shrink-0 ">
                                            <div className="mb-3.5 box-border overflow-hidden ">
                                              <div className="relative box-border overflow-hidden pt-[65%] rounded-xl transition-all duration-500 group-hover:bg-[rgba(255,148,27,0.3)]  ">
                                                <img className="mx-auto absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[100%] align-middle  group-hover:opacity-60 group-hover:mix-blend-luminosity overflow-clip margin-content-box" src={news.urlToImage} />
                                                {/* <Image
                                                  className="w-full rounded-xl"
                                                  src={news.urlToImage}
                                                  width={640}
                                                  height={360}
                                                  alt={news.source.name}
                                                /> */}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="box-border flex flex-wrap ">
                                          <div className="box-border w-full max-w-full flex-shrink-0 ">
                                            <div className="float-left mb-1.5 box-border text-xs font-medium tracking-normal text-[var(--global-color-primary)]">20 มิถุนายน 2566</div>
                                          </div>
                                        </div>
                                        <div className="box-border flex flex-wrap ">
                                          <div className="box-border w-full max-w-full flex-shrink-0 ">
                                            <div className="mb-1.5 box-border ">
                                              <p className="my-0 box-border overflow-hidden text-base font-semibold tracking-normal text-[rgba(37,37,37,1)] group-hover:text-[var(--global-color-primary)]"> {news.title}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  </>
                                );
                              })
                            }
                          </div>
                        </div>
                        {/* <!-- LASTEST NEWS :: IPAD & MOBILE --> */}
                        <NewsCardSlider />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BackButton href='/news' />
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

  // Sort the news items by the newest creation date
  const sortedNews = data.newses.sort((a: News, b: News) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

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

