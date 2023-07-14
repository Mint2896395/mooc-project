"use client";
import Head from "next/head";
import CardCourse from "@/components/Card";
import { useSearchParams } from "next/navigation";
import Course from "@/types/Course";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Pagination from "@/layouts/Pagination";
import { useFetch } from "usehooks-ts";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

interface PageProps {
  courses: Course[];
  total: number;
  skip: number;
  limit: number;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = decodeURIComponent(params?.category);
  // Get the pathname using the usePathname hook
  const { pathname }: any = useSearchParams();
  // Parse the page and perPage from the query parameters
  const page = (pathname?.query.page as string) ?? "1";
  const perPage = (pathname?.query.perPage as string) ?? "4";

  //Define limit and skip which is used by DummyJSON API for pagination
  const limit = parseInt(perPage);
  const skip = (parseInt(page) - 1) * limit;
  const url = `/api/course?category=${encodeURIComponent(
    category
  )}&limit=${limit}&skip=${skip}&select=name,src,code,category`;

  //use the useFetch hook to get the products
  const { data } = useFetch<PageProps>(url);

  return (
    <>
      <div className="relative before:absolute before:left-0 before:top-0 before:z-[-2] before:h-[45%] before:w-full after:absolute after:left-1/2 after:top-1/2 after:-translate-x-2/4 after:-translate-y-2/4 after:mix-blend-luminosity">
        <center className="box-border  ">
          <div className="relative box-border h-56 md:h-64 ">
            <div className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center ">
              <p className="my-0 box-border whitespace-nowrap text-2xl tracking-[3.2px] text-[#b39573] md:text-4xl">
                รายวิชาในหลักสูตร
              </p>
              <p className="mx-auto my-5 box-border px-1 text-base text-[rgba(112,112,112,1)] md:text-2xl md:tracking-[2px]">
                หลักสูตรนิติศาสตร์บัณทิตเป็นหลักสูตรในระบบทวิภาคี
                โดยมีระยะเวลาการศึกษาตลอดหลักสูตร 4 ปีการศึกษา
              </p>
            </div>
          </div>

          <hr className="mt-6 box-content h-0 overflow-visible border-solid" />
        </center>
        <div className="bg-[#f5f5f5]">
          <div className="m-0 flex w-full flex-col items-center justify-center p-0 pb-[65px] md:mx-auto md:w-[88%] md:px-[15px] md:pb-[140px] ">
            <div className="z-[1] mb-11 mt-[-50px] box-border max-w-3xl rounded-lg bg-gradient-to-r from-[#ecd5b4] to-[#b39569] p-5 md:mb-[75px] md:mt-[-50px] md:px-[45px] md:pb-[32px] md:pt-10">
              <div className="box-border columns-1 gap-1 md:flex md:columns-3">
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)] md:w-1/3 lg:w-1/3 ">
                  <select
                    className=" mb-5 box-border block w-full rounded-lg bg-white bg-[16px_12px] bg-no-repeat text-center align-middle font-[inherit] text-base font-normal normal-case leading-[normal] text-[rgba(99,99,99,1)]"
                    name="learner_type"
                  >
                    <option
                      className="box-border text-base font-light text-[rgba(112,112,112,1)]"
                      value=""
                    >
                      ประเภทผู้เรียน
                    </option>
                    <option
                      className="box-border text-base font-light text-[rgba(112,112,112,1)]"
                      value="นิสิตและบุคลากร มข."
                    >
                      นิสิตและบุคลากรจ มข.
                    </option>
                    <option
                      className="box-border text-base font-light text-[rgba(112,112,112,1)]"
                      value="บุคคลทั่วไป"
                    >
                      บุคคลทั่วไป
                    </option>
                    <option
                      className="box-border text-base font-light text-[rgba(112,112,112,1)]"
                      value="นิสิตและบุคลากรจุฬาและบุคคลทั่วไป"
                    >
                      นิสิต/บุคลากรจุฬาฯ และ บุคคลทั่วไป
                    </option>
                    <option
                      className="box-border text-base font-light text-[rgba(112,112,112,1)]"
                      value="Partner"
                    >
                      Partner
                    </option>
                  </select>
                </div>
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)] md:w-1/3 lg:w-1/3">
                  <select
                    className="mb-5 box-border block w-full rounded-lg bg-white bg-[16px_12px] bg-no-repeat text-center align-middle font-[inherit] text-base font-normal normal-case leading-[normal] text-[rgba(99,99,99,1)]"
                    name="course_type"
                  >
                    <option
                      className="box-border text-base font-light text-[rgba(112,112,112,1)]"
                      value=""
                    >
                      คอร์สทั้งหมด
                    </option>
                    <option
                      className="box-border text-base font-light text-[rgba(112,112,112,1)]"
                      value="คอร์สใหม่"
                    >
                      คอร์สใหม่
                    </option>
                    <option
                      className="box-border text-base font-light text-[rgba(112,112,112,1)]"
                      value="คอร์สที่กำลังเปิดอยู่"
                    >
                      คอร์สที่กำลังเปิดอยู่
                    </option>
                    <option
                      className="box-border text-base font-light text-[rgba(112,112,112,1)]"
                      value="เรียนได้ทั้งปี"
                    >
                      เรียนได้ทั้งปี
                    </option>
                  </select>
                </div>
                <div className="mt-[var(--bs-gutter-y)] box-border w-full max-w-full flex-shrink-0 pl-[calc(var(--bs-gutter-x)_/_2)] pr-[calc(var(--bs-gutter-x)_/_2)] md:w-1/3 lg:w-1/3">
                  <select
                    className="mb-6 box-border block w-full rounded-lg bg-white bg-[16px_12px] bg-no-repeat text-center align-middle font-[inherit] text-base font-normal normal-case leading-[normal] text-[rgba(99,99,99,1)]"
                    name="id_category"
                  >
                    <option
                      className="box-border text-base font-light text-[rgba(112,112,112,1)]"
                      value=""
                    >
                      หมวดหมู่
                    </option>
                    <option
                      className="box-border text-base font-light text-[rgba(112,112,112,1)]"
                      value={1}
                    >
                      ภาษา
                    </option>
                    <option
                      className="box-border text-base font-light text-[rgba(112,112,112,1)]"
                      value={2}
                    >
                      เทคโนโลยี
                    </option>
                    <option
                      className="box-border text-base font-light text-[rgba(112,112,112,1)]"
                      value={3}
                    >
                      การจัดการ
                    </option>
                    <option
                      className="box-border text-base font-light text-[rgba(112,112,112,1)]"
                      value={4}
                    >
                      ศิลปะและการพัฒนาตนเอง
                    </option>
                    <option
                      className="box-border text-base font-light text-[rgba(112,112,112,1)]"
                      value={5}
                    >
                      สุขภาพ
                    </option>
                  </select>
                </div>
              </div>
              <div className="box-border flex flex-col items-center ">
                <div className="-mt-0 box-border flex w-full max-w-full flex-shrink-0 flex-col items-center">
                  <div className="float-none box-border table">
                    <button
                      className="box-border min-w-[110px] rounded-3xl border-2 border-white bg-[var(--global-color-primary)] px-[12px] py-[7px] text-center font-[inherit] text-sm font-medium normal-case leading-[inherit] tracking-normal text-white open:cursor-pointer md:min-w-[140px] md:p-2 md:text-[18px] md:text-base"
                      type="submit"
                    >
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{ color: "#fff", width: "24px" }}
                        className="box-border inline-block pr-2 text-sm"
                      />
                      ค้นหา
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border flex w-full max-w-full flex-shrink-0 flex-col items-center">
              <h2 className="relative float-none mb-8 mt-0 box-border table text-center text-2xl font-medium leading-[normal] tracking-wide text-[rgba(17,17,17,1)] underline decoration-sky-500 underline-offset-8 md:mb-11 xl:text-3xl ">
                {category}
              </h2>
            </div>
            {!data && <div>Loading...</div>}
            <div className="box-border grid grid-cols-2 px-1 md:grid-cols-4 md:gap-1 lg:grid-cols-4 ">
              {data?.courses?.map((course) => {
                return (
                  <>
                    <CardCourse key={course.id} course={course} />
                  </>
                );
              })}
            </div>

            {/* // we use tailwindCSS classes to create a decent product grid */}
            <div className="container mx-auto mt-12 flex flex-col items-center md:mt-24">
              <Pagination
                page={parseInt(page)}
                perPage={parseInt(perPage)}
                itemCount={data?.total ?? 0}
              />
              {!data && <div>Loading...</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
