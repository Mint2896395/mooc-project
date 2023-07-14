import React from "react";
import Detail from "@/components/Detail";
import { getCourse, getCourses } from "@/lib/supabase/queries";
import { GetStaticProps, GetStaticPaths } from "next";
import Course from "~/types/Course";

interface PageProps {
  course: Course;
}

const CourseDetailPage: React.FC<PageProps> = ({ course }) => {
  if (!course) {
    return <p>Loading course...</p>;
  }

  return <Detail course={course} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of course IDs from your data source
  const courseData: Course[] = await getCourses();

  // Extract the course IDs from the data
  const courseIds = courseData.map((value) => value.id.toString());

  // Generate the paths for each course ID
  const paths = courseIds.map((id: string) => ({
    params: { id },
  }));

  // Return the paths that Next.js should pre-render
  return {
    paths,
    fallback: false, // or 'blocking' if you want to use server-side rendering
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  // Retrieve the course data based on the ID from params
  const courseId = Number(params?.id);
  const courseData: Course[] = await getCourse(courseId);
  const course = courseData[0];

  // If course is not found, return a 404 page
  if (!course) {
    return {
      notFound: true,
      props: undefined,
    };
  }

  // Convert the createdAt and updatedAt properties to serializable format
  const serializedCourse = {
    ...course,
    createdAt: course.createdAt.toISOString(),
    updatedAt: course.updatedAt.toISOString(),
  };

  // Return the serialized course data as props
  return {
    props: {
      course: serializedCourse,
    },
  };
};



export default CourseDetailPage;
