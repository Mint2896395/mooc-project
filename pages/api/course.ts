import Course from "~/types/Course";
import { getCourses } from "@/lib/supabase/queries";

interface Response {
  total: number;
  skip: number;
  limit: number;
  courses: Course[];
}

import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllCourse(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  // All Courses
  const courses: Course[] = await getCourses();

  const { id, skip, limit, category } = req.query;
  let filteredCourses: Course[];

  if (id) {
    filteredCourses = courses.filter((course) => course.id === Number(id));
  } else if (category) {
    filteredCourses = courses.filter(
      (course) => course.category === String(category)
    );
  } else {
    filteredCourses = courses;
  }

  // Apply the limit if provided
  const limitedCourses = limit
    ? filteredCourses.slice(Number(skip), Number(skip) + Number(limit))
    : filteredCourses;

  const response: Response = {
    courses: limitedCourses,
    total: filteredCourses.length,
    skip: skip ? Number(skip) : 0,
    limit: limit ? Number(limit) : filteredCourses.length,
  };

  res.status(200).json(response);
}
