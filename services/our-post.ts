import { apiClient } from "@/libs/api-client";

export const OurPosts = {
  getAll: (params: { page: number; per_page: number }) =>
    apiClient.getPaginated<TypeOfService[]>("/posts", params),
  getById: (id: string) => apiClient.get<TypeOfService>(`/posts/${id}`),
};
