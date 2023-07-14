// import React from "react";
// import Detail from "@/components/Detail";
// import { getCourse } from "@/lib/supabase/queries";

// interface PageProps {
//   params: {
//     id: number
//   }
// }

// const CourseDetailPage = async ({ params }: PageProps) => {
//   const courses = await getCourse(params.id);
//   const course: any = courses[0];
  
//   return course ? <Detail course={course} /> : <p>Loading course...</p>;
// };

// export default CourseDetailPage;


// import React from "react";
// import Detail from "@/components/Detail";
// import Course from "@/types/Course";
// import { generateStaticParams, useAppRouter } from "next/router/app";
// import { fetchCourseIds, getCourse } from "@/lib/supabase/queries";

// interface CourseProps {
//   course: Course;
// }

// const CourseDetailPage: React.FC<CourseProps> = ({ course }) => {
//   if (!course) {
//     return <p>Loading course...</p>;
//   }

//   return <Detail course={course} />;
// };

// export const generateStaticParams = async () => {
//   const courseIds = await fetchCourseIds();
//   return courseIds.map((id: number) => ({
//     params: { id: id.toString() },
//   }));
// };

// export const getStaticProps = async ({
//   params,
// }: {
//   params: { id: string };
// }) => {
//   const courseId = parseInt(params.id);
//   const courses = await getCourse(courseId);
//   const course = courses[0] || null;

//   return {
//     props: {
//       course,
//     },
//   };
// };

// export default CourseDetailPage;


import React from "react";
import Detail from "@/components/Detail";
import { getCourse, getCourses } from "@/lib/supabase/queries";

interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const courses = await getCourses();
  
  return courses.map((course) => ({
    params: {
      id: course.id,
    },
  }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
const CourseDetailPage: React.FC<CourseDetailPageProps> = async ({ params }) => {
  const courses = await getCourse(Number(params.id));
  const course: any = courses[0];

  return course ? <Detail course={course} /> : <p>Loading course...</p>;
};

export default CourseDetailPage;

