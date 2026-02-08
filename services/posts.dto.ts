export type TPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type TCreatePostDto = Pick<TPost, "title" | "body" | "userId">;
