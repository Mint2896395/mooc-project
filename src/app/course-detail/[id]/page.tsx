import React from "react";
import Detail from "@/components/Detail";
import { getCourse } from "@/lib/supabase/queries";

interface PageProps {
  params: {
    id: number
  }
}

const CourseDetailPage = async ({ params }: PageProps) => {
  const courses = await getCourse(params.id);
  const course: any = courses[0];
  
  return course ? <Detail course={course} /> : <p>Loading course...</p>;
};

export default CourseDetailPage;

