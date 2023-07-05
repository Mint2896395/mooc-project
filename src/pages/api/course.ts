import Course from "types/Course";

interface Response {
  total: number;
  skip: number;
  limit: number;
  courses: Course[];
};

import { NextApiRequest, NextApiResponse } from 'next';

export default function getAllCourse(req: NextApiRequest, res: NextApiResponse<Response>) {
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
    {
      id: 7,
      name: "การระงับและการไกล่เกลี่ยข้อพิพาท",
      src: "/images/_LW014112_การระงับและการไกล่เกลี่ยข้อพิพาท.jpeg",
      code: "LW014112",
      url: "detail",
      category: "กฎหมาย",
      seat: "56 ที่ว่าง",
      status: "feature",
    },
    {
      id: 8,
      name: "พระธรรมนูญศาลยุติธรรม",
      src: "/images/_LW013215_พระธรรมนูญศาลยุติธรรม.jpeg",
      code: "LW013215",
      url: "detail",
      category: "กฎหมาย",
      seat: "199 ที่ว่าง",
      status: "feature",
    },
    {
      id: 9,
      name: "กฎหมายระหว่างประเทศแผนกคดีบุคคล",
      src: "/images/_LW013401_กฎหมายระหว่างประเทศแผนกคดีบุคคล.jpeg",
      code: "LW013401",
      url: "detail",
      category: "กฎหมาย",
      seat: "99 ที่ว่าง",
      status: "feature",
    },
    {
      id: 10,
      name: "การระงับและการไกล่เกลี่ยข้อพิพาท",
      src: "/images/_LW014112_การระงับและการไกล่เกลี่ยข้อพิพาท.jpeg",
      code: "LW014112",
      url: "detail",
      category: "กฎหมาย",
      seat: "56 ที่ว่าง",
      status: "feature",
    },
    {
      id: 11,
      name: "พระธรรมนูญศาลยุติธรรม",
      src: "/images/_LW013215_พระธรรมนูญศาลยุติธรรม.jpeg",
      code: "LW013215",
      url: "detail",
      category: "กฎหมาย",
      seat: "199 ที่ว่าง",
      status: "",
    },
    {
      id: 12,
      name: "กฎหมายระหว่างประเทศแผนกคดีบุคคล",
      src: "/images/_LW013401_กฎหมายระหว่างประเทศแผนกคดีบุคคล.jpeg",
      code: "LW013401",
      url: "detail",
      category: "กฎหมาย",
      seat: "99 ที่ว่าง",
      status: "",
    },
    {
      id: 13,
      name: "การระงับและการไกล่เกลี่ยข้อพิพาท",
      src: "/images/_LW014112_การระงับและการไกล่เกลี่ยข้อพิพาท.jpeg",
      code: "LW014112",
      url: "detail",
      category: "กฎหมาย",
      seat: "56 ที่ว่าง",
      status: "feature",
    },
    {
      id: 14,
      name: "การระงับและการไกล่เกลี่ยข้อพิพาท",
      src: "/images/_LW014112_การระงับและการไกล่เกลี่ยข้อพิพาท.jpeg",
      code: "LW014112",
      url: "detail",
      category: "กฎหมาย",
      seat: "56 ที่ว่าง",
      status: "feature",
    },
    {
      id: 15,
      name: "พระธรรมนูญศาลยุติธรรม",
      src: "/images/_LW013215_พระธรรมนูญศาลยุติธรรม.jpeg",
      code: "LW013215",
      url: "detail",
      category: "กฎหมาย",
      seat: "199 ที่ว่าง",
      status: "",
    },
    {
      id: 16,
      name: "กฎหมายระหว่างประเทศแผนกคดีบุคคล",
      src: "/images/_LW013401_กฎหมายระหว่างประเทศแผนกคดีบุคคล.jpeg",
      code: "LW013401",
      url: "detail",
      category: "กฎหมาย",
      seat: "99 ที่ว่าง",
      status: "",
    },
    {
      id: 17,
      name: "การระงับและการไกล่เกลี่ยข้อพิพาท",
      src: "/images/_LW014112_การระงับและการไกล่เกลี่ยข้อพิพาท.jpeg",
      code: "LW014112",
      url: "detail",
      category: "กฎหมาย",
      seat: "56 ที่ว่าง",
      status: "feature",
    },
    {
      id: 18,
      name: "พระธรรมนูญศาลยุติธรรม",
      src: "/images/_LW013215_พระธรรมนูญศาลยุติธรรม.jpeg",
      code: "LW013215",
      url: "detail",
      category: "กฎหมาย",
      seat: "199 ที่ว่าง",
      status: "feature",
    },
    {
      id: 19,
      name: "กฎหมายระหว่างประเทศแผนกคดีบุคคล",
      src: "/images/_LW013401_กฎหมายระหว่างประเทศแผนกคดีบุคคล.jpeg",
      code: "LW013401",
      url: "detail",
      category: "กฎหมาย",
      seat: "99 ที่ว่าง",
      status: "feature",
    },
    {
      id: 20,
      name: "การระงับและการไกล่เกลี่ยข้อพิพาท",
      src: "/images/_LW014112_การระงับและการไกล่เกลี่ยข้อพิพาท.jpeg",
      code: "LW014112",
      url: "detail",
      category: "กฎหมาย",
      seat: "56 ที่ว่าง",
      status: "feature",
    },
    {
      id: 21,
      name: "พระธรรมนูญศาลยุติธรรม",
      src: "/images/_LW013215_พระธรรมนูญศาลยุติธรรม.jpeg",
      code: "LW013215",
      url: "detail",
      category: "กฎหมาย",
      seat: "199 ที่ว่าง",
      status: "",
    },
    {
      id: 22,
      name: "กฎหมายระหว่างประเทศแผนกคดีบุคคล",
      src: "/images/_LW013401_กฎหมายระหว่างประเทศแผนกคดีบุคคล.jpeg",
      code: "LW013401",
      url: "detail",
      category: "กฎหมาย",
      seat: "99 ที่ว่าง",
      status: "",
    },
    {
      id: 23,
      name: "พระธรรมนูญศาลยุติธรรม",
      src: "/images/_LW013215_พระธรรมนูญศาลยุติธรรม.jpeg",
      code: "LW013215",
      url: "detail",
      category: "กฎหมาย",
      seat: "199 ที่ว่าง",
      status: "",
    },
    {
      id: 24,
      name: "กฎหมายระหว่างประเทศแผนกคดีบุคคล",
      src: "/images/_LW013401_กฎหมายระหว่างประเทศแผนกคดีบุคคล.jpeg",
      code: "LW013401",
      url: "detail",
      category: "กฎหมาย",
      seat: "99 ที่ว่าง",
      status: "",
    },
    {
      id: 25,
      name: "พระธรรมนูญศาลยุติธรรม",
      src: "/images/_LW013215_พระธรรมนูญศาลยุติธรรม.jpeg",
      code: "LW013215",
      url: "detail",
      category: "กฎหมาย",
      seat: "199 ที่ว่าง",
      status: "",
    },
    {
      id: 26,
      name: "กฎหมายระหว่างประเทศแผนกคดีบุคคล",
      src: "/images/_LW013401_กฎหมายระหว่างประเทศแผนกคดีบุคคล.jpeg",
      code: "LW013401",
      url: "detail",
      category: "กฎหมาย",
      seat: "99 ที่ว่าง",
      status: "",
    },
  ];

  const { id, skip, limit } = req.query;
  let filteredCourses: Course[];

  if (id) {
    filteredCourses = courses.filter(course => course.id === Number(id));
  } else {
    filteredCourses = courses;
  }

  // Apply the limit if provided
  const limitedCourses = limit ? filteredCourses.slice(Number(skip), Number(skip) + Number(limit)) : filteredCourses;

  const response: Response = {
    courses: limitedCourses,
    total: filteredCourses.length,
    skip: skip ? Number(skip) : 0,
    limit: limit ? Number(limit) : filteredCourses.length,
  };

  res.status(200).json(response);
}
