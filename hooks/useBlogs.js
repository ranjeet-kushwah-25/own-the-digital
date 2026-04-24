import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/services/blog.service";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
};

export const useCreateBlog = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data) => apiClient.post("/blogs", data),
    onSuccess: () => qc.invalidateQueries(["blogs"]),
  });
};