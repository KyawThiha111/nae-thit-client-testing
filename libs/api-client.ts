// lib/api-client.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// export type PaginatedResponse<T> = {
//   data: T[];
//   page: number;
//   per_page: number;
//   totalItems: number;
//   totalPages: number;
// };

export const apiClient = {
  get: async <T>(
    endpoint: string,
    params?: Record<string, any>
  ): Promise<T> => {
    const queryString = params
      ? `?${new URLSearchParams(params).toString()}`
      : "";
    const response = await fetch(`${API_BASE_URL}${endpoint}${queryString}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  },
  post: async <T>(endpoint: string, body: unknown): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  },
  getPaginated: async <T>(
    endpoint: string,
    params?: Record<string, any>
  ): Promise<any> => {
    const queryString = params
      ? `?${new URLSearchParams(params).toString()}`
      : "";
    const response = await fetch(`${API_BASE_URL}${endpoint}${queryString}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  },
  // Add put, delete, etc. as needed
};
