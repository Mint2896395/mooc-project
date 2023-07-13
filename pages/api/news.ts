import News from "~/types/News";

interface Response {
  total: number;
  skip: number;
  limit: number;
  newses: News[];
}

import { NextApiRequest, NextApiResponse } from "next";

export default function getAllCourse(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  // All News
  const newses: News[] = [
    {
      source: {
        id: 1,
        name: "MarketWatch",
      },
      author: "Nicole Lyn Pesce",
      title:
        "SportsWatch: How hot dog champ Joey Chestnut made millions as ‘the world’s greatest eater’",
      description:
        "The favorite to win the July 4 Nathan's Famous Hot Dog Eating Contest has said he earned over $500,000 last year alone",
      url: "https://www.marketwatch.com/story/how-hot-dog-champ-joey-chestnut-made-millions-as-the-worlds-greatest-eater-1d2a6897",
      urlToImage: "https://images.mktw.net/im-811252/social",
      publishedAt: "2023-07-03T21:09:29Z",
      content:
        "Competitive eating champ Joey Chestnut hasnt only been putting away hot dogs for almost two decades hes also put a few million dollars under his belt, including more than $500,000 last year alone. In… [+2791 chars]",
    },
    {
      source: {
        id: 2,
        name: "Crikey",
      },
      author: "Emma Elsworthy",
      title: "A price on their heads",
      description:
        "Hong Kong police have issued warrants for the arrest of eight pro-democracy activists, including Australian Kevin Yam, and One Nation Leader Pauline Hanson says she'll mail her 2000-word No vote essay to voters herself if it's not included in the official ref…",
      url: "https://www.crikey.com.au/2023/07/04/hong-kong-police-bounty-australian-pro-democracy-figure/",
      urlToImage:
        "https://www.crikey.com.au/wp-content/uploads/2023/07/Penny-Wong-.jpg",
      publishedAt: "2023-07-03T21:00:04Z",
      content:
        "HOME AND AWAY\r\nHong Kong police have offered a A$191,800 bounty for Australian-born, Melbourne lawyer KevinYam over alleged foreign collusion under national security laws, the ABC reports, an accusat… [+13491 chars]",
    },
    {
      source: {
        id: 3,
        name: "Biztoc.com",
      },
      author: "bostonherald.com",
      title: "Stocks tack on gains before holiday break",
      description:
        "NEW YORK — Stocks edged higher in a shortened trading day Monday as momentum slowed on Wall Street following its powerful rally through the first half of the year. The S&P 500 rose 5.21 points, or 0.1%, to 4,455.59 and reached its highest level since April 20…",
      url: "https://biztoc.com/x/aad93c8398270ed2",
      urlToImage: "https://c.biztoc.com/p/aad93c8398270ed2/s.webp",
      publishedAt: "2023-07-03T20:54:08Z",
      content:
        "NEW YORK Stocks edged higher in a shortened trading day Monday as momentum slowed on Wall Street following its powerful rally through the first half of the year.The S&amp;P 500 rose 5.21 points, or 0… [+283 chars]",
    },
    {
      source: {
        id: 4,
        name: "Biztoc.com",
      },
      author: "bostonherald.com",
      title: "Tesla sales jump 83% from a year ago",
      description:
        "DETROIT — Tesla’s second-quarter deliveries rose 83% from a year ago after the company cut prices several times on its four electric vehicle models and buyers took advantage of U.S. government tax credits. The Austin, Texas, producer of EV, solar panels and b…",
      url: "https://biztoc.com/x/f815bf250cf8a37e",
      urlToImage: "https://c.biztoc.com/p/f815bf250cf8a37e/s.webp",
      publishedAt: "2023-07-03T20:54:08Z",
      content:
        "DETROIT Teslas second-quarter deliveries rose 83% from a year ago after the company cut prices several times on its four electric vehicle models and buyers took advantage of U.S. government tax credi… [+279 chars]",
    },
    {
      source: {
        id: 5,
        name: "Tech Xplore",
      },
      author: "Ryan Vlastelica",
      title: "Apple hits historic $3 trillion milestone",
      description:
        "Apple Inc. made Wall Street history as the first company with a market value over $3 trillion, the latest sign of big tech's seemingly unstoppable dominance in equity markets.",
      url: "https://techxplore.com/news/2023-07-apple-historic-trillion-milestone.html",
      urlToImage: "https://scx2.b-cdn.net/gfx/news/hires/2020/1-apple.jpg",
      publishedAt: "2023-07-03T20:54:04Z",
      content:
        "Apple Inc. made Wall Street history as the first company with a market value over $3 trillion, the latest sign of big tech's seemingly unstoppable dominance in equity markets.\r\nThe iPhone maker gaine… [+4158 chars]",
    },
    {
      source: {
        id: 6,
        name: "Boston Herald",
      },
      author: "Associated Press",
      title: "Stocks tack on gains before holiday break",
      description:
        "Stocks edged higher in a shortened trading day Monday as momentum slowed on Wall Street following its powerful rally through the first half of the year.",
      url: "https://www.bostonherald.com/2023/07/03/stocks-tack-on-gains-before-holiday-break/",
      urlToImage:
        "https://www.bostonherald.com/wp-content/uploads/2023/06/Financial_Markets_Bull_Markets_00145.jpg?w=1024&h=682",
      publishedAt: "2023-07-03T20:50:42Z",
      content:
        "NEW YORK Stocks edged higher in a shortened trading day Monday as momentum slowed on Wall Street following its powerful rally through the first half of the year.\r\nThe S&amp;P 500 rose 5.21 points, or… [+2019 chars]",
    },
    {
      source: {
        id: 7,
        name: "Boston Herald",
      },
      author: "Associated Press",
      title: "Tesla sales jump 83% from a year ago",
      description:
        "Tesla's second-quarter deliveries rose 83% from a year ago after the company cut prices several times on its four electric vehicle models and buyers took advantage of U.S. government tax credits.",
      url: "https://www.bostonherald.com/2023/07/03/tesla-sales-jump-83-from-a-year-ago/",
      urlToImage:
        "https://www.bostonherald.com/wp-content/uploads/2023/07/AP23178400289190.jpg?w=1024&h=683",
      publishedAt: "2023-07-03T20:40:35Z",
      content:
        "DETROIT Tesla’s second-quarter deliveries rose 83% from a year ago after the company cut prices several times on its four electric vehicle models and buyers took advantage of U.S. government tax cred… [+2345 chars]",
    },
    {
      source: {
        id: 8,
        name: "SFGate",
      },
      author: "Joshua Bote",
      title:
        "Elon Musk has gained $530 million a day so far in 2023 as Twitter falls apart",
      description:
        "In a span of three days — say, in the three days since Musk introduced rate limits on Twitter, the site he bought for $44 billion last year — he amassed approximately $1.6 billion.",
      url: "https://www.sfgate.com/tech/article/elon-musk-net-worth-july-2023-18183179.php",
      urlToImage:
        "https://s.hdnux.com/photos/01/31/51/46/23501208/6/rawImage.jpg",
      publishedAt: "2023-07-03T20:38:44Z",
      content:
        "Surprise: Elon Musk is still the richest man in the world  and his wealth has reached unprecedented levels, even as the last vestiges of Twitter crumble under his watch.Since the start of 2023, accor… [+1991 chars]",
    },
    {
      source: {
        id: 10,
        name: "Autoblog",
      },
      author: "Reuters",
      title:
        "Kentucky mandates NACS charging plug for state-backed charging stations",
      description:
        "Filed under:\n Government/Legal,Green,Electric,Infrastructure\n Continue reading Kentucky mandates NACS charging plug for state-backed charging stations\nKentucky mandates NACS charging plug for state-backed charging stations originally appeared on Autoblog on M…",
      url: "https://www.autoblog.com/2023/07/03/kentucky-mandates-nacs-charging-plug-for-state-backed-charging-stations/",
      urlToImage:
        "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.yimg.com/os/creatr-uploaded-images/2023-06/c7f69d40-1527-11ee-bffd-a4e8eb19a948",
      publishedAt: "2023-07-03T20:30:00Z",
      content:
        "San Francisco, July 3 - Kentucky is requiring that electric vehicle charging companies include Tesla's plug if they want to be part of a state program to electrify highways using federal dollars, acc… [+1838 chars]",
    },
    {
      source: {
        id: 11,
        name: "Biztoc.com",
      },
      author: "finance.yahoo.com",
      title: "Morgan Stanley Says Bill Dudley Is Wrong About the Bond Market",
      description:
        "When it comes to the bond market, it’s Morgan Stanley vs Bill Dudley now. • None Tesla and BYD Post Record Sales on Surge in Electric-Car Demand • None China Restricts Export of Chipmaking Metals in Clash with US • None It’s Getting a Lot Harder to Chase the …",
      url: "https://biztoc.com/x/c15bbf33e5286be8",
      urlToImage: "https://c.biztoc.com/p/c15bbf33e5286be8/s.webp",
      publishedAt: "2023-07-03T20:26:04Z",
      content:
        "When it comes to the bond market, its Morgan Stanley vs Bill Dudley now.None Tesla and BYD Post Record Sales on Surge in Electric-Car DemandNone China Restricts Export of Chipmaking Metals in Clash w… [+302 chars]",
    },
    {
      source: {
        id: 12,
        name: "Gadgets360.com",
      },
      author: "Reuters",
      title:
        "Tesla's Plug Made Compulsory in Kentucky for EV Charging Companies",
      description:
        "Kentucky is requiring that electric vehicle charging companies include Tesla's plug if they want to be part of a state program to electrify highways using federal dollars, according to documents reviewed by Reuters. Kentucky's plan went into effect on Friday,…",
      url: "https://www.gadgets360.com/auto/news/tesla-nacs-plug-compulsory-kentucky-us-state-ev-charging-companies-4175133",
      urlToImage:
        "https://i.gadgets360cdn.com/large/tesla_y_model_twitter_1663848766003.jpg",
      publishedAt: "2023-07-03T20:25:55Z",
      content:
        "Kentucky is requiring that electric vehicle charging companies include Tesla's plug if they want to be part of a state program to electrify highways using federal dollars, according to documents revi… [+1875 chars]",
    },
    {
      source: {
        id: 13,
        name: "Biztoc.com",
      },
      author: "financialjuice.com",
      title: "US Market Wrap",
      description:
        "US stocks rose in subdued trading ahead of the Independence Day holiday, despite warnings about slowing growth and data showing a slowdown in manufacturing. - Tesla gained 6.9% in a short session that ended at 1 p.m. Monday in New York after reporting record …",
      url: "https://biztoc.com/x/abcd6653e3ab715d",
      urlToImage: "https://c.biztoc.com/210/og.png",
      publishedAt: "2023-07-03T20:20:09Z",
      content:
        "US stocks rose in subdued trading ahead of the Independence Day holiday, despite warnings about slowing growth and data showing a slowdown in manufacturing.- Tesla gained 6.9% in a short session that… [+246 chars]",
    },
    {
      source: {
        id: 14,
        name: "Biztoc.com",
      },
      author: "benzinga.com",
      title: "Why Albemarle And Other Lithium Stocks Traded Higher Today",
      description:
        "Albemarle Corporation ALB shares rose Monday in conjunction with other lithium stocks following strong delivery numbers from several EV makers. What To Know: Tesla was one of the EV makers which produced better-than-expected second-quarter delivery numbers. O…",
      url: "https://biztoc.com/x/1d28904c9004b2a7",
      urlToImage: "https://c.biztoc.com/p/1d28904c9004b2a7/s.webp",
      publishedAt: "2023-07-03T20:20:06Z",
      content:
        "Albemarle Corporation ALB shares rose Monday in conjunction with other lithium stocks following strong delivery numbers from several EV makers.What To Know: Tesla was one of the EV makers which produ… [+238 chars]",
    },
    {
      source: {
        id: 15,
        name: "Biztoc.com",
      },
      author: "benzinga.com",
      title: "Twitter Followers Picked This Stock To Outperform In 2023",
      description:
        "The market has shown signs of a recovery for 2023 with major indexes trading higher through the first six months of the year. The positive returns come after 2022 saw the S&P 500 post its worst annual loss since 2008. What Happened: The SPDR S&P 500 Global ET…",
      url: "https://biztoc.com/x/bfa7b6b854c57ebf",
      urlToImage: "https://c.biztoc.com/p/bfa7b6b854c57ebf/s.webp",
      publishedAt: "2023-07-03T20:20:05Z",
      content:
        "The market has shown signs of a recovery for 2023 with major indexes trading higher through the first six months of the year. The positive returns come after 2022 saw the S&amp;P 500 post its worst a… [+242 chars]",
    },
    {
      source: {
        id: 16,
        name: "Biztoc.com",
      },
      author: "finance.yahoo.com",
      title: "US Manufacturing Activity Shrinks by Most in Three Years",
      description:
        "US factory activity contracted for an eighth month in June, slipping to the weakest level in more than three years as production, employment and input prices retreated. • None Tesla and BYD Post Record Sales on Surge in Electric-Car Demand • None China Restri…",
      url: "https://biztoc.com/x/6c8a514a00358c63",
      urlToImage: "https://c.biztoc.com/p/6c8a514a00358c63/og.webp",
      publishedAt: "2023-07-03T20:16:04Z",
      content:
        "US factory activity contracted for an eighth month in June, slipping to the weakest level in more than three years as production, employment and input prices retreated.None Tesla and BYD Post Record … [+313 chars]",
    },
  ];

  const { id, skip, limit } = req.query;
  let filteredNews: News[];

  if (id) {
    filteredNews = newses.filter((newses) => newses.source.id === Number(id));
  } else {
    filteredNews = newses;
  }

  // Apply the limit if provided
  const limitedCourses = limit
    ? filteredNews.slice(Number(skip), Number(skip) + Number(limit))
    : filteredNews;

  const response: Response = {
    newses: limitedCourses,
    total: filteredNews.length,
    skip: skip ? Number(skip) : 0,
    limit: limit ? Number(limit) : filteredNews.length,
  };

  res.status(200).json(response);
}
