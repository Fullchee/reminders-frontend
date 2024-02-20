import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export const useKeywordQuery = () => {
  return useQuery({
    queryKey: ["keywords"],
    queryFn: async (): Promise<AxiosResponse<string[]>> => {
      return axios.get(`${import.meta.env.VITE_BACKEND_URL}keywords`);
    },
  });
};
