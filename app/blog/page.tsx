"use client";

import PostsDemo from "@/components/organisms/posts-demo";

export default function Page() {
  return (
    <div className="container mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-2xl font-bold">Axios + React Query Demo</h1>
      <PostsDemo />
    </div>
  );
}
