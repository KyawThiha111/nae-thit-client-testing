import { OurPosts } from "@/services/our-post";
import { useQuery } from "@tanstack/react-query";

export const usePosts = (params: { page: number; per_page: number }) => {
  return useQuery({
    queryKey: ["blog"],
    queryFn: () => OurPosts.getAll(params),
  });
};

export const usePostDetail = (id: string) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => OurPosts.getById(id),
  });
};
