import { apiClient } from "@/libs/api-client";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export const useApiMutation = <T, V = unknown>(
  endpoint: string,
  method: "post" | "put" | "delete" = "post",
  options?: Omit<UseMutationOptions<T, Error, V>, "mutationFn">
) => {
  return useMutation<T, Error, V>({
    mutationFn: (data: V) => {
      switch (method) {
        case "post":
          return apiClient.post<T>(endpoint, data);
        // case "put":
        //   return apiClient.put<T>(endpoint, data);
        // case "delete":
        //   return apiClient.delete<T>(endpoint, data);
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
    },
    ...options,
  });
};
