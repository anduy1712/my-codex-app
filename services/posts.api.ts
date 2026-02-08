import apiClient from "@/libs/axios";

import { TCreatePostDto, TPost } from "./posts.dto";

export const postsService = {
  getList: () => apiClient.get("/posts").then((res) => res.data),
  getById: (id: number) => apiClient.get(`/posts/${id}`).then((res) => res.data),
  create: (data: TCreatePostDto) => apiClient.post("/posts", data).then((res) => res.data),
};
