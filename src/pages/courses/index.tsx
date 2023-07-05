import Head from "next/head";
import CardCourse from "components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../../../components/Pagination";
import { useRouter } from "next/router";
import { useFetch } from "usehooks-ts";
import Course from "types/Course";


interface Response {
  courses: Course[];
  total: number;
  skip: number;
  limit: number;
};

const CoursesPage = () => {
  //parse the page and perPage  from router.query
  const router = useRouter();
  const query = router.query;
  const page = (query.page as string) ?? "1";
  const perPage = (query.perPage as string) ?? "4";

  //Define limit and skip which is used by DummyJSON API for pagination
  const limit = perPage;
  const skip = (parseInt(page) - 1) * parseInt(limit);
  const url = `/api/course?limit=${limit}&skip=${skip}&select=name,src,code,category`;

  //use the useFetch hook to get the products
  const { data } = useFetch<Response>(url);

    return (
        <>
        <Head>
          <title>All Course</title>
          <meta name="description" content="Generated by create-mooc-app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="">
          <center className="box-border  ">
            <div className="relative box-border md:h-64 h-56 ">
              <div className="relative top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 ">
                  <p className="my-0 box-border whitespace-nowrap md:text-4xl text-2xl text-[#b39573] tracking-[3.2px]">
                      รายวิชาในหลักสูตร
                  </p>
                  <p className="my-5 mx-auto box-border md:text-2xl text-base text-[rgba(112,112,112,1)] md:tracking-[2px] px-1">
                      หลักสูตรนิติศาสตร์บัณทิตเป็นหลักสูตรในระบบทวิภาคี โดยมีระยะเวลาการศึกษาตลอดหลักสูตร 4 ปีการศึกษา
                  </p>
              </div>
            </div>
            
            <hr className="mt-6 box-content h-0 overflow-visible border-solid" />
          </center>
          <div className="bg-[#f5f5f5]">
            <div className="md:mx-auto md:px-[15px] m-0 p-0 flex flex-col justify-center items-center md:w-[88%] w-full ">
                <div className="max-w-3xl mb-20 box-border rounded-lg md:mt-[-80px] mt-[-50px] z-[1] bg-gradient-to-r from-[#ecd5b4] to-[#b39569] md:pt-10 md:pb-[32px] md:px-[45px] p-5">
                    <div className="box-border gap-1 md:flex md:columns-3 columns-1">
                    <div className="box-border w-full max-w-full flex-shrink-0 md:w-1/3 lg:w-1/3 pr-[calc(var(--bs-gutter-x)_/_2)] pl-[calc(var(--bs-gutter-x)_/_2)] mt-[var(--bs-gutter-y)] ">

                        <select
                        className=" mb-5 box-border block w-full rounded-lg bg-white bg-no-repeat text-center align-middle text-base font-normal normal-case font-[inherit] leading-[normal] text-[rgba(99,99,99,1)] bg-[16px_12px]"
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
                    <div className="box-border w-full max-w-full flex-shrink-0 md:w-1/3 lg:w-1/3 pr-[calc(var(--bs-gutter-x)_/_2)] pl-[calc(var(--bs-gutter-x)_/_2)] mt-[var(--bs-gutter-y)]">
                        <select
                        className="mb-5 box-border block w-full rounded-lg bg-white bg-no-repeat text-center align-middle text-base font-normal normal-case font-[inherit] leading-[normal] text-[rgba(99,99,99,1)] bg-[16px_12px]"
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
                    <div className="box-border w-full max-w-full flex-shrink-0 md:w-1/3 lg:w-1/3 pr-[calc(var(--bs-gutter-x)_/_2)] pl-[calc(var(--bs-gutter-x)_/_2)] mt-[var(--bs-gutter-y)]">
                        <select
                        className="mb-5 box-border block w-full rounded-lg bg-white bg-no-repeat text-center align-middle text-base font-normal normal-case font-[inherit] leading-[normal] text-[rgba(99,99,99,1)] bg-[16px_12px]"
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
                        <div className="-mt-0 box-border w-full max-w-full flex flex-col items-center flex-shrink-0">
                            <div className="float-none box-border table">
                            <button
                                className="box-border rounded-3xl text-center text-base font-medium normal-case tracking-normal open:cursor-pointer font-[inherit] leading-[inherit] min-w-[140px] bg-[var(--global-color-primary)] text-white p-2 text-[18px] border-2 border-white"
                                type="submit"
                            >
                                <FontAwesomeIcon
                                  icon={faMagnifyingGlass}
                                  style={{ color: "#fff", width: "24px" }}
                                  className="box-border pr-2 text-sm inline-block"
                                />
                                ค้นหา
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-border w-full max-w-full flex-shrink-0 flex flex-col items-center">
                    <h2 className="relative float-none mt-0 mb-11 box-border table text-center text-3xl font-medium tracking-wide xl:text-3xl leading-[normal]  text-[rgba(17,17,17,1)] underline decoration-sky-500 underline-offset-8 ">
                    กฎหมาย
                    </h2>
                </div>
                {!data && <div>Loading...</div>}
                <div className="box-border grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 md:gap-1 px-1 ">
                  {data?.courses?.map((course) => {
                      return (
                        <>
                          <CardCourse key={course.id} course={course} />
                        </>
                      );
                    })
                  }
                </div>

                {/* // we use tailwindCSS classes to create a decent product grid */}
                <div className="mx-auto container my-10 flex flex-col items-center">
                  <Pagination
                    page={parseInt(page)}
                    perPage={parseInt(perPage)}
                    itemCount={data?.total ?? 0}
                  />
                  {!data && <div>Loading...</div>}
                </div>

              {/* <div className="box-border hidden overflow-y-scroll h-[600px] ">
                <div className="box-border justify-center lg:columns-3 columns-1 md:columns-2 space-y-3 ">
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW011101_กฎหมายกับสังคม"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW011201_หลักกฎหมายเอกชน"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW012102_นิติปรัชญา"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW012204 กฎหมายว่าด้วยหนี้"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW012205_กฎหมายว่าด้วยละเมิดฯ"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW012206_เอกเทศสัญญา_1"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW012401_หลักกฎหมายมหาชน"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW012501 กฎหมายอาญา : บทบัญญัติทั่วไป"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW013108 ภาษาอังกฤษสำหรับนักศึกษากฎหมาย 1"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW013208_การเจรจาต่อรองและสัญญาทางธุรกิจ"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW013209_กฎหมายว่าด้วยองค์กรทางธุรกิจ"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW013210_กฎหมายว่าด้วยครอบครัวและมรดก"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW013211_กฎหมายวิธีพิจารณาความแพ่ง_1"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW013213 กฎหมายวิธีพิจารณาความอาญา"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW013304 กฎหมายบริหารรัฐกิจและกิจการสาธารณะ"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW013401 กฎหมายระหว่างประเทศแผนกคดีบุคคล"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW013402 กฎหมายระหว่างประเทศแผนกคดีเมือง"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW013404 กฎหมายการค้าระหว่างประเทศและอนุญาโตตุลาการ"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW013505 กฎหมายที่ดินและการพัฒนาเมือง"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW014217 กฎหมายกับการสร้างธุรกิจดิจิทัล"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW014220_กฎหมายล้มละลายและฟื้นฟูกิจการ"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW014303_กฎหมายปกครอง"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW014409 กฎหมายมนุษยธรรมระหว่างประเทศ"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW014508_กฎหมายป้องกันและปราบปรามการทุจริต"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW014511_กฎหมายคุ้มครองข้อมูลส่วนบุคคล"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW014605_กฎหมายแรงงานและสวัสดิการสังคม"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW014606_กฎหมายภาษีอากร"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW014607 กฎหมายว่าด้วยการกระทำความผิดของเด็กและเยาวชน"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW_428312 กฎหมายระหว่างประเทศในเอเชียตะวันออกเฉียงใต้"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW_777100 ความรู้เบื้องต้นเกี่ยวกับกฎหมายทั่วไป"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW_777301 กฎหมายวิธีพิจารณาความอาญา สำหรับนักศึกษารัฐประศาสนศาสตร์"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW_777401 ทฤษฎีกฎหมายมหาชนและหลักการปกครองท้องถิ่น"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW_777440 กฎหมายภาษีอากร"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/LW_CL403559 การภาษีอากร"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/M_โครงการเสริมทักษะวิชาการ การเขียน-ตอบ ข้อสอบกฎหมาย สำหรับนักศึกษาชั้นปีที่ 1"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW011202_กฎหมายว่าด้วยนิติกรรมและสัญญา"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW011203_กฎหมายว่าด้วยทรัพย์สิน"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW012207_เอกเทศสัญญา 2"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW012208_กฎหมายว่าด้วยตั๋วเงินและประกันภัย"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW012302_กฎหมายรัฐธรรมนูญและสถาบันการเมือง"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW012502 กฎหมายอาญา : ภาคความผิด"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW012601_กฎหมายสิทธิมนุษยชน"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW012602_นโยบายและการบริหารงานยุติธรรม"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW013210_กฎหมายการแข่งขันการค้า"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW013211_กฎหมายธุรกิจ (ภาษาอังกฤษ)"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW013212_กฎหมายวิธีพิจารณาความแพ่ง_2"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW013214 กฎหมายว่าด้วยพยานหลักฐาน"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW013215_พระธรรมนูญศาลยุติธรรม"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW013217_กฎหมายทรัพย์สินทางปัญญา"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW013303 กฎหมายมหาชนทางเศรษฐกิจ"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW013404_กฎหมายว่าด้วยการส่งเสริมการลงทุนในประชาคมอาเซียน"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW013503_นิติวิทยาศาสตร์"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW013603_กฎหมายเศรษฐกิจระหว่างประเทศ"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW013604_กฎหมายสิ่งแวดล้อมและทรัพยากรธรรมชาติ"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW013605 อาชญวิทยา"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW013608_กฎหมายธุรกิจสถาบันการเงิน"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW014103_นิติทัศนะและจริยธรรมของนักกฎหมาย"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW014112_การระงับและการไกล่เกลี่ยข้อพิพาท"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW014149_ระเบียบวิธีวิจัยทางกฎหมาย"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW014506_การว่าความและศาลจำลอง"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW014507_กฎหมายว่าด้วยการกระทำความผิดของเด็กและเยาวชน"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW_ 777 100 ความรู้เบื้องต้นเกี่ยวกับกฎหมายทั่วไป"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW_ 777 302 กฎหมายว่าด้วยพยานหลักฐาน วปท."
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW_777 201 ทฤษฎีและความรับผิดชอบทางกฎหมายอาญา"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW_777 440 กฎหมายภาษีอากร 1 KKBS"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW_BS951111กฎหมายธรุกิจ(คณะบริหารธรุกิจฯ)"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/_LW_CL403742_กฎหมายธุรกิจ วปท."
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/__LW014761_สัมมนาวิชาชีพนักกฎหมาย"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/__LW014762_สัมมนากฎหมายธุรกิจ"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/___LW012204 กฎหมายว่าด้วยหนี้"
                    />
                  </div>
                  <div className="box-border ">
                    <img
                      className="box-border rounded border-none align-middle "
                      
                      height="180px"
                      src="https://lawlibrarykku.online/getclassimg/___LW012501 กฎหมายอาญา : บทบัญญัติทั่วไป"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
    </>
    );
}

export default CoursesPage