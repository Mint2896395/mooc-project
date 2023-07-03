import Link from "next/link";
import Image from "next/image";

interface News {
  source: {
    id: null | number;
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
  news: News;
}

const CardNews: React.FC<NewsProps> = ({ news }) => {
  return (
    <Link href={`/news/${news.source.id}`} key={news.source.id}>

      <div className="group w-full transform cursor-pointer overflow-hidden md:h-full md:max-w-lg">
        <div className="box-border flex flex-wrap ">
          <div className="box-border w-full max-w-full flex-shrink-0 ">
            <div className="mb-3.5 box-border overflow-hidden rounded-xl ">
              <div className="relative box-border overflow-hidden rounded-xl bg-[var(--global-color-primary)]">
                <img className="mx-auto h-96 object-cover w-full align-middle transition-all duration-5000 group-hover:opacity-50" src={news.urlToImage} />
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
            <div className="float-left mb-1.5 box-border text-sm font-medium tracking-normal text-[var(--global-color-primary)]">20 มิถุนายน 2566</div>
          </div>
        </div>
        <div className="box-border flex flex-wrap ">
          <div className="box-border w-full max-w-full flex-shrink-0 ">
            <div className="mb-1.5 box-border ">
              <p className="my-0 box-border overflow-hidden text-lg font-semibold tracking-normal text-[rgba(37,37,37,1)] group-hover:text-[var(--global-color-primary)]"> {news.title}</p>
            </div>
          </div>
        </div>
        <div className="box-border flex flex-wrap ">
          <div className="box-border w-full max-w-full flex-shrink-0 ">
            <div className="mb-0 box-border ">
              <p className="mt-0 mb-5 box-border overflow-hidden text-sm leading-6 text-[rgba(99,99,99,1)]"></p>
              <p className="mt-0 mb-5 box-border overflow-hidden text-sm leading-6 text-[rgba(99,99,99,1)]"> {news.content}</p>
              <p className="mt-0 mb-5 box-border overflow-hidden text-sm leading-6 last:mb-0 text-[rgba(99,99,99,1)]"></p>
            </div>
          </div>
        </div>
      </div>

    </Link>
  );
};

export default CardNews;
