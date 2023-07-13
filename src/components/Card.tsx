import Link from "next/link";
import Image from "next/image";
import Course from "~/types/Course";

interface CourseProps {
  course: Course;
}

const CardCourse: React.FC<CourseProps> = ({ course }) => {
  return (
    <Link href={`/course-detail/${course.id}`} key={course.id}>
      <div className="group w-full scale-95 transform cursor-pointer overflow-hidden border-0 border-b-2 border-solid border-[var(--global-color-primary)] transition duration-500 hover:scale-100 md:h-full md:max-w-lg">
        <Image
          className="w-full rounded-xl"
          src={course.src}
          width={640}
          height={360}
          alt={course.name}
        />
        <div className="md:py-4">
          <div className="mb-2 mt-1 h-10 min-h-0 text-base font-semibold leading-5 group-hover:text-gray-500 md:mb-0 md:text-xl md:font-bold">
            {course.name}
          </div>
          <p className="mb-2 text-sm text-gray-700 md:mb-5 md:text-base">
            {course.code}
          </p>
          <div className="mb-2 box-border grid grid-cols-1 md:grid-cols-2">
            <div className="pb-2 text-center text-xs md:text-left">
              <span className="inline-block rounded-full border border-[#b39573] px-2 py-0.5 text-[#b39573] md:mr-2 ">
                {course.category}
              </span>
            </div>
            <div className="box-border text-center md:text-right ">
              <span className="rounded-sm bg-[#4d40f7] px-2 py-0.5 text-[10px] font-medium text-[#ffee00] md:text-xs">
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
