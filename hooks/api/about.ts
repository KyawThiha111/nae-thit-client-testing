import { AboutUsApi } from "@/services/about-us";
import { useQuery } from "@tanstack/react-query";

export const useAboutUsBanner = (params: {
  // page: number;
  // per_page: number;
  lang: string;
}) => {
  return useQuery({
    queryKey: ["about_banner"],
    queryFn: () => AboutUsApi.getAboutUsBanner(params),
  });
};

//   export const useBlogDetail = (id: string, params: { lang: string }) => {
//     return useQuery({
//       queryKey: ["blog", id],
//       queryFn: () => OurBlogs.getById(id, params),
//     });
//   };
