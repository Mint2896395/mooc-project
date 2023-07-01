// Define the course type
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

export default function getAllCourse(id: any | undefined | null = null): Course[] {
  // All Courses
  const courses: Course[] = [
    {
      id: 1,
      name: "การระงับและการไกล่เกลี่ยข้อพิพาท",
      src: "/images/_LW014112_การระงับและการไกล่เกลี่ยข้อพิพาท.jpeg",
      code: "LW014112",
      url: "detail",
      category: "กฎหมาย",
      seat: "56 ที่ว่าง",
      status: "feature",
    },
    {
      id: 2,
      name: "พระธรรมนูญศาลยุติธรรม",
      src: "/images/_LW013215_พระธรรมนูญศาลยุติธรรม.jpeg",
      code: "LW013215",
      url: "detail",
      category: "กฎหมาย",
      seat: "199 ที่ว่าง",
      status: "feature",
    },
    {
      id: 3,
      name: "กฎหมายระหว่างประเทศแผนกคดีบุคคล",
      src: "/images/_LW013401_กฎหมายระหว่างประเทศแผนกคดีบุคคล.jpeg",
      code: "LW013401",
      url: "detail",
      category: "กฎหมาย",
      seat: "99 ที่ว่าง",
      status: "feature",
    },
    {
      id: 4,
      name: "การระงับและการไกล่เกลี่ยข้อพิพาท",
      src: "/images/_LW014112_การระงับและการไกล่เกลี่ยข้อพิพาท.jpeg",
      code: "LW014112",
      url: "detail",
      category: "กฎหมาย",
      seat: "56 ที่ว่าง",
      status: "feature",
    },
    {
      id: 5,
      name: "พระธรรมนูญศาลยุติธรรม",
      src: "/images/_LW013215_พระธรรมนูญศาลยุติธรรม.jpeg",
      code: "LW013215",
      url: "detail",
      category: "กฎหมาย",
      seat: "199 ที่ว่าง",
      status: "",
    },
    {
      id: 6,
      name: "กฎหมายระหว่างประเทศแผนกคดีบุคคล",
      src: "/images/_LW013401_กฎหมายระหว่างประเทศแผนกคดีบุคคล.jpeg",
      code: "LW013401",
      url: "detail",
      category: "กฎหมาย",
      seat: "99 ที่ว่าง",
      status: "",
    },
  ];

  if (id){
    return courses.filter(course => course.id == id)
  } else {
    return courses
  }
}


