interface News {
  id: number;
  source_id: null | number;
  source_name: string | null;
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  url_to_image: string | undefined;
  publishedAt: Date | null;
  content: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export default News;
