import { OurBlogs } from "@/services/our-blog";
import { useQuery } from "@tanstack/react-query";

type BlogType = {
  success: boolean;
  blog: {
    title: string;
    description: string;
    postdate: string;
    timelength: string;
    category: string;
  };
};

export const useBlogs = (params: {
  // page: number;
  // per_page: number;
  lang: string;
}) => {
  return useQuery({
    queryKey: ["blog"],
    queryFn: () => OurBlogs.getAll(params),
  });
};

export const useBlogDetail = (id: string, params: { lang: string }) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => OurBlogs.getById(id, params),
  });
};
