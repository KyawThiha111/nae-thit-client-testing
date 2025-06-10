import { apiClient } from "@/libs/api-client";

type BlogType = {
  success: boolean;
  blog: {
    title: string;
    description: string;
    postdate: string;
    timelength: string;
    category: string;
    image: string;
  };
};

export const OurBlogs = {
  getAll: (params: { page?: number; per_page?: number; lang: string }) =>
    apiClient.getPaginated<TypeOfBlogData>("/api/pages/blog", params),
  getById: (id: string, params: { lang: string }) =>
    apiClient.get<BlogType>(`/api/pages/blog/${id}`, params),
};
