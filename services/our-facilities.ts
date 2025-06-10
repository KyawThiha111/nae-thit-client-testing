import { apiClient } from "@/libs/api-client";

export const OurFacilities = {
  getAll: (params: { page?: number; per_page?: number; lang?: string }) =>
    apiClient.getPaginated<TypeOfFacilitiesData>(
      "/api/pages/facilities",
      params
    ),
  getById: (id: string, params: { lang: string }) =>
    apiClient.get<TypeOfFacilities>(`/api/pages/facilities/${id}`, params),
};
