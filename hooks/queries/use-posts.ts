import { postsService } from "@/services/posts.api";
import { TCreatePostDto } from "@/services/posts.dto";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const keys = {
  all: ["posts"] as const,
  list: () => [...keys.all] as const,
  detail: (id: number) => [...keys.all, id] as const,
};

export function usePosts() {
  return useQuery({
    queryKey: keys.list(),
    queryFn: postsService.getList,
  });
}

export function usePost(id: number) {
  return useQuery({
    queryKey: keys.detail(id),
    queryFn: () => postsService.getById(id),
    enabled: id > 0,
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TCreatePostDto) => postsService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: keys.list() });
    },
  });
}
