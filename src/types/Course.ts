interface Course {
  id: number;
  category: string | null;
  code: string | null;
  name: string | null;
  seat: string | null;
  src: string | null;
  status: string | null;
  vdo_url: string | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export default Course;
