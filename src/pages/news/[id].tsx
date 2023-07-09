import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NewsCardSlider from "components/NewsCardSlider";
import BackButton from "components/BackButton";
import News from "types/News";

interface NewsProps {
  news: News[];
}

const baseUrl = process.env.API_BASE_URL || "http://localhost:3000";

export default function News({ news}: NewsProps) {
  const router = useRouter();
  const { id } = router.query;

  const selectedNews = news.find(
    (newsItem) => newsItem.source.id === Number(id)
  );

  let result: any;

  if (selectedNews) {
    const publishedAt = selectedNews.publishedAt;
    const date = new Date(publishedAt);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    result = date.toLocaleDateString("th-TH", options);

    console.log(result); // Output: Formatted published date
  } else {
    console.log("News item not found");
  }

  return (
    <>
      <center className="box-border  ">
        <div className="relative box-border h-[130px] md:h-[250px] ">
          <div className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center ">
            <p className="my-0 box-border whitespace-nowrap text-2xl tracking-[3.2px] text-[#b39573] md:text-4xl">
              ข่าวสาร และบทความ
            </p>
          </div>
        </div>

        <hr className="box-content h-0 overflow-visible border-solid md:mt-6" />
      </center>
      <article>
        {selectedNews ? (
          <div className="box-border py-[50px] pb-[65px] md:py-20 md:pb-36">
            <div className="box-border ">
              <div className="mx-auto box-border w-full px-[15px] md:w-[88%]">
                <div className="box-border ">
                  <div className="box-border flex flex-wrap justify-center ">
                    <div className="box-border w-full max-w-full flex-shrink-0 pr-0 md:w-11/12 md:pr-5 lg:w-3/4 ">
                      <div className="box-border flex flex-wrap ">
                        <div className="box-border w-full max-w-full flex-shrink-0 ">
                          <div className="float-left mb-2 box-border text-sm font-medium tracking-normal text-[var(--global-color-primary)]">
                            {result}
                          </div>
                        </div>
                      </div>
                      <div className="box-border flex flex-wrap ">
                        <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 font-[Noto_Sans_Thai]">
                          <h4 className="mb-6 mt-0 box-border text-2xl font-medium leading-[normal] tracking-wide text-[rgba(17,17,17,1)] xl:text-2xl">
                            {selectedNews.title}
                          </h4>
                        </div>
                      </div>
                      <div className="box-border flex flex-wrap ">
                        <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 ">
                          <div className="mb-10 box-border overflow-hidden rounded-xl ">
                            <img
                              className="box-border h-auto w-full align-middle "
                              src={selectedNews.urlToImage}
                            />
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
                          <ul className="float-left mb-14 mt-0 box-border w-full pl-0 "></ul>
                        </div>
                      </div>
                    </div>
                    <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 md:w-full lg:w-1/4 ">
                      <div className="mb-[30px] box-border bg-[#fef8f4] px-5 py-[25px] md:mb-14">
                        <div className="box-border flex flex-wrap ">
                          <div className="-mt-0 box-border w-full max-w-full flex-shrink-0 px-2 font-[Noto_Sans_Thai] md:px-0">
                            <h5 className="mb:mb-10 relative mx-auto mb-[28px] mt-0 box-border table border-b-[2px] border-[var(--global-color-primary)] pb-0 text-center text-lg font-medium leading-[normal] tracking-wide text-[rgba(17,17,17,1)] md:block md:border-b-[3px] md:pb-2 md:text-2xl">
                              ข่าวสารและบทความล่าสุด
                            </h5>
                          </div>
                        </div>
                        {/* <!-- LASTEST NEWS :: PC & IPAD PRO --> */}
                        <div className="box-border hidden md:hidden lg:block ">
                          <div className="-mt-0 mb-[30px] box-border w-full max-w-full flex-shrink-0 md:w-1/3 lg:w-full ">
                            {news?.slice(0, 5).map((news) => {
                              return (
                                <>
                                  <Link
                                    href={`/news/${news.source.id}`}
                                    key={news.source.id}
                                  >
                                    <div className="group mb-[35px] w-full transform cursor-pointer overflow-hidden md:h-full md:max-w-lg">
                                      <div className="box-border flex flex-wrap ">
                                        <div className="box-border w-full max-w-full flex-shrink-0 ">
                                          <div className="mb-3.5 box-border overflow-hidden ">
                                            <div className="relative box-border overflow-hidden rounded-xl pt-[65%] transition-all duration-500 group-hover:bg-[rgba(255,148,27,0.3)]  ">
                                              <img
                                                className="margin-content-box absolute left-2/4 top-2/4 mx-auto w-[100%] -translate-x-2/4 -translate-y-2/4  overflow-clip align-middle group-hover:opacity-60 group-hover:mix-blend-luminosity"
                                                src={news.urlToImage}
                                              />
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
                                          <div className="float-left mb-1.5 box-border text-xs font-medium tracking-normal text-[var(--global-color-primary)]">
                                            {result}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="box-border flex flex-wrap ">
                                        <div className="box-border w-full max-w-full flex-shrink-0 ">
                                          <div className="mb-1.5 box-border ">
                                            <p className="my-0 box-border overflow-hidden text-base font-semibold tracking-normal text-[rgba(37,37,37,1)] group-hover:text-[var(--global-color-primary)]">
                                              {" "}
                                              {news.title}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </>
                              );
                            })}
                          </div>
                        </div>
                        {/* <!-- LASTEST NEWS :: IPAD & MOBILE --> */}
                        <NewsCardSlider />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BackButton
                href="/news"
                label="ย้อนกลับ"
                className=""
                icon={true}
              />
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
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
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
