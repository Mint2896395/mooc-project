import Detail from "components/Detail";
import { getAllCourse } from "../lib/helper";
import { GetStaticProps, GetStaticPaths } from "next";

interface Course {
  id: number;
  name: string;
  src: string;
  code: string;
  url: string;
  category: string;
  seat: string;
  status: string;
}

interface CourseProps {
  course: Course[];
}

export default function Course({course} : CourseProps) {
  return (
    <article>
      {
        course.map((c: any) => (
          <>
            <Detail key={c.id} course={c} />
          </>
        ))
      }
    </article>
  )
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}) => {
  const {id} = params;
  const course = getAllCourse(id);

  return {
    props: { course },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const courses = getAllCourse();
  const paths = courses.map((course) => ({
    params: { id: course.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
