import Detail from "components/Detail";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Course from "types/Course";

interface CourseProps {
  course: Course[];
}

const baseUrl = process.env.API_BASE_URL || "http://localhost:3000";

export default function Course({ course }: CourseProps) {
  const router = useRouter();
  const { id } = router.query;

  const selectedCourse = course.find(
    (courseItem) => courseItem.id === Number(id)
  );

  return selectedCourse ? (
    <Detail key={selectedCourse.id} course={selectedCourse} />
  ) : null;
}

export const getStaticProps: GetStaticProps<CourseProps> = async () => {
  const response = await fetch(`${baseUrl}/api/course`);
  const data = await response.json();

  return {
    props: {
      course: data.courses || [],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${baseUrl}/api/course`);
  const data = await response.json();
  const paths = data.courses.map((courseItem: Course) => ({
    params: { id: String(courseItem.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};
