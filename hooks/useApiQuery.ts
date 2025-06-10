import { apiClient } from "@/libs/api-client";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export const useApiQuery = <T>(
  endpoint: string,
  options?: Omit<UseQueryOptions<T>, "queryKey" | "queryFn">
) => {
  return useQuery<T>({
    queryKey: [endpoint],
    queryFn: () => apiClient.get<T>(endpoint),
    ...options,
  });
};
