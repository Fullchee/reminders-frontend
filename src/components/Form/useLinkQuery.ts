import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { Link } from "../../types";
import { useEffect } from "react";
import { getTimeDiff } from "@src/helper/utilities";
import { useNavigate } from "react-router-dom";

/** TODO: move this logic to the backend so the backend and frontend Link types don't diverge */
export const formatLink = (link: Link) => {
  if (!link?.keywords?.length) {
    link.keywords = [];
  }
  let i = 0;
  link.keywords = link.keywords.map((word: string) => {
    return { id: i++, label: word, value: word };
  });
  link.lastAccessed = getTimeDiff(link.last_accessed as string);
  link.startTime = link.start_time;
  return link;
};

export const useRandomLink = () => {
  const link = useQuery({
    enabled: false, // only run on button click
    queryKey: ["random-link"],
    queryFn: async (): Promise<AxiosResponse<Link>> => {
      return axios.get(`${import.meta.env.VITE_BACKEND_URL}random-link`);
    },
  });

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  useEffect(() => {
    if (link.data?.data?.id) {
      queryClient.setQueryData(
        ["link", link.data.data.id],
        formatLink(link.data.data),
      );
      navigate(`/link/${link.data.data.id}`);
    }
  }, [navigate, link.data, queryClient]);
  return link;
};

export const useLinkQuery = (linkId: number) => {
  return useQuery<Link>({
    queryKey: ["link", linkId],
    queryFn: async () => {
      return axios.get(`${import.meta.env.VITE_BACKEND_URL}link/${linkId}}`);
    },
  });
};
