type TypeOfCategory = {
  id: string;
  name: string;
  blogCount: number;
  createdAt: string;
  updatedAt: string;
};

type TypeOfBlog = {
  id: string;
  title: string;
  description: string;
  image: string;
  timelength: string;
  category: string;
  postdate: string;
  createdAt: string;
  updatedAt: string;
};

type TypeOfBlogData = {
  success: boolean;
  count: number;
  blogs: TypeOfBlog[];
};
