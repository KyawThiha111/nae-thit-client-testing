import { apiClient } from "@/libs/api-client";

export const AboutUsApi = {
  getAboutUsBanner: (params: { lang: string }) =>
    apiClient.get<TypeOfAboutUsBanner>("/api/pages/aboutbanner", params),
  //   getById: (id: string, params: { lang: string }) =>
  //     apiClient.get<BlogType>(`/api/pages/blog/${id}`, params),
};
