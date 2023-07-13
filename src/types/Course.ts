interface Course {
  id: number;
  category: string | null;
  name: string | null;
  src: string | null;
  code: string | null;
  vdo_url: string | null;
  seat: string | null;
  status: string | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export default Course;
