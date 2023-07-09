import Link from "next/link";
import Image from "next/image";
import News from 'types/News';

interface NewsProps {
  news: News;
}

const CardNews: React.FC<NewsProps> = ({ news }) => {
  const publishedAt = news.publishedAt;
  const date = new Date(publishedAt);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const result = date.toLocaleDateString("th-TH", options);

  return (
    <Link href={`/news/${news.source.id}`} key={news.source.id}>
      <div className="group w-full transform cursor-pointer overflow-hidden md:h-full md:max-w-lg">
        <div className="box-border flex flex-wrap ">
          <div className="box-border w-full max-w-full flex-shrink-0 ">
            <div className="mb-3.5 box-border overflow-hidden ">
              <div className="relative box-border overflow-hidden rounded-xl pt-[78%] transition-all duration-500 group-hover:bg-[rgba(255,148,27,0.3)]  ">
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
            <div className="float-left mb-1.5 box-border text-xs font-medium tracking-normal text-[var(--global-color-primary)] md:text-sm">
              {result}
            </div>
          </div>
        </div>
        <div className="box-border flex flex-wrap ">
          <div className="box-border w-full max-w-full flex-shrink-0 ">
            <div className="mb-1.5 box-border ">
              <p className="my-0 box-border overflow-hidden text-sm font-semibold tracking-normal text-[rgba(37,37,37,1)] group-hover:text-[var(--global-color-primary)] md:text-lg">
                {" "}
                {news.title}
              </p>
            </div>
          </div>
        </div>
        <div className="box-border flex flex-wrap ">
          <div className="box-border w-full max-w-full flex-shrink-0 ">
            <div className="mb-0 box-border ">
              <p className="mb-5 mt-0 box-border overflow-hidden text-xs leading-5 text-[rgba(99,99,99,1)] md:text-sm md:leading-6"></p>
              <p className="mb-5 mt-0 box-border overflow-hidden text-xs leading-5 text-[rgba(99,99,99,1)] md:text-sm md:leading-6">
                {" "}
                {news.content}
              </p>
              <p className="mb-5 mt-0 box-border overflow-hidden text-xs leading-5 text-[rgba(99,99,99,1)] last:mb-0 md:text-sm md:leading-6"></p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardNews;
