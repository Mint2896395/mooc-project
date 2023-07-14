import News from "@/types/News";
import { getNewses } from "@/lib/supabase/queries";

interface Response {
  newses: News[];
  total: number;
  skip: number;
  limit: number;
}

import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllCourse(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  // All News
  const newses: News[] = (await getNewses()) as News[];

  const { id, skip, limit } = req.query;
  let filteredNews: News[];

  if (id) {
    filteredNews = newses.filter((newses) => newses.id === Number(id));
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
