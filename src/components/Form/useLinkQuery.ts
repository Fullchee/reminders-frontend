import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "../../types";

export const useLinkQuery = (linkId?: number) => {
  return useQuery<Link>({
    queryKey: ["link"],
    queryFn: async () => {
      return axios.get(`${import.meta.env.VITE_BACKEND_URL}link/${linkId}}`);
    },
  });
};
