import { Database } from "../supabase.types";
import { supabaseServer } from ".";
import { courses, profiles, newses } from "@/lib/db/schema";
import { db } from "@/lib/db";
import { and, desc, eq, exists, sql } from "drizzle-orm";

export type CourseType = Database["public"]["Tables"]["courses"]["Row"] & {
  profiles: Pick<
    Database["public"]["Tables"]["profiles"]["Row"],
    "full_name" | "username"
  >;
};

// export const getCourses = async (
//   currentUserID?: string,
//   getSingleCourseId?: string,
//   orderBy?: boolean,
//   limit?: number
// ): Promise<CourseType[] | undefined> => {
//   try {
//     let query = db
//       .select()
//       .from(courses)
//       .orderBy(desc(courses.createdAt));

//     if (orderBy) {
//       query = query.orderBy(desc(courses.createdAt));
//     }

//     if (getSingleCourseId) {
//       query = query.where(eq(courses.id, getSingleCourseId));
//     }

//     if (limit) {
//       query = query.limit(limit);
//     }

//     const rows = await query;

//     if (rows) {
//       const result: Record<string, CourseType> = rows.reduce((acc, row) => {
//         const course = row.courses;
//         const profile = row.profiles;

//         if (!acc[course.id]) {
//           acc[course.id] = { ...course, profiles: profile };
//         }

//         return acc;
//       }, {});

//       const data = Object.values(result);
//       return data;
//     }

//     return undefined;
//   } catch (error) {
//     console.log(error);
//     return undefined;
//   }
// };


export const getCourse = async (id: number) => {
  const res = await db
    .select()
    .from(courses)
    .where(eq(courses.id, id))
    .limit(1);

  return res;
};

export const getCourses = async () => {
  const res = await db.select().from(courses).orderBy(desc(courses.createdAt));

  return res;
};

export const getCoursex = async () => {
  const res = await db.select().from(courses);

  return res;
};

export const getNews = async (id: number) => {
  const res = await db
    .select()
    .from(newses)
    .where(eq(newses.id, id))
    .limit(1);

  return res;
};

export const getNewses = async () => {
  const res = await db.select().from(newses).orderBy(desc(newses.publishedAt));

  return res;
};