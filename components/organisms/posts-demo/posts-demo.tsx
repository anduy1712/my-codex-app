"use client";

import { usePosts, useCreatePost } from "@/hooks/queries/use-posts";

function PostsDemo() {
  const { data, isLoading, error } = usePosts();
  const createPost = useCreatePost();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Posts (useQuery demo)</h2>
        <button
          type="button"
          onClick={() =>
            createPost.mutate({
              title: "New post",
              body: "Created via useMutation",
              userId: 1,
            })
          }
          disabled={createPost.isPending}
          className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600 disabled:opacity-50"
        >
          {createPost.isPending ? "Creating..." : "Create post"}
        </button>
      </div>
      <ul className="space-y-2">
        {data?.slice(0, 5).map((post) => (
          <li key={post.id} className="rounded border p-3">
            <p className="font-medium">{post.title}</p>
            <p className="text-sm text-gray-600">{post.body.slice(0, 80)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsDemo;
