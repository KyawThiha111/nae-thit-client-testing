import { OurFacilities } from "@/services/our-facilities";
import { useQuery } from "@tanstack/react-query";

export const useFacilities = (params: {
  // page: number;
  // per_page: number;
  lang?: string;
}) => {
  return useQuery({
    queryKey: ["blog"],
    queryFn: () => OurFacilities.getAll(params),
  });
};

export const useFacilitiesDetail = (id: string, params: { lang: string }) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => OurFacilities.getById(id, params),
  });
};
