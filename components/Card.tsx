import Link from "next/link";
import Image from "next/image";

interface Course {
  id: any;
  name: string;
  src: string;
  code: string;
  url: string;
  category: string;
  seat: string;
  status: string;
}

interface CourseProps {
  course: Course;
}

const CardCourse: React.FC<CourseProps> = ({ course }) => {
  return (
    <Link href={`/courses/${course.id}`} key={course.id}>
      <div className="group w-full scale-95 transform cursor-pointer overflow-hidden border-0 border-b-2 border-solid border-[var(--global-color-primary)] transition duration-500 hover:scale-100 md:h-full md:max-w-lg">
          <Image
            className="w-full rounded-xl"
            src={course.src}
            width={640}
            height={360}
            alt={course.name}
          />
          <div className="md:py-4">
          <div className="mt-1 mb-5 h-10 min-h-0 md:text-xl text-base font-semibold md:font-bold md:mb-0 group-hover:text-gray-500 leading-5">
              {course.name}
          </div>
          <p className="md:mb-5 mb-2 md:text-base text-sm text-gray-700">
              {course.code}
          </p>
          <div className="mb-2 box-border grid grid-cols-1 md:grid-cols-2">
              <div className="pb-2 text-center text-xs md:text-left">
              <span className="md:mr-2 inline-block rounded-full border border-[#b39573] px-2 py-0.5 text-[#b39573] ">
                  {course.category}
              </span>
              </div>
              <div className="box-border text-center md:text-right ">
              <span className="rounded-sm bg-[#4d40f7] px-2 py-0.5 md:text-xs text-[10px] font-medium text-[#ffee00]">
                  {course.seat}
              </span>
              </div>
          </div>
          </div>
      </div>
    </Link>
  );
};

export default CardCourse;
