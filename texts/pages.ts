// Page-specific texts
export const pages = {
  home: {
    title: "Welcome to My Codex App",
    subtitle: "Build something amazing",
    description: "Get started by editing the page",
  },
  blog: {
    title: "Blog",
    subtitle: "Read our latest articles",
    noPostsFound: "No blog posts found",
    readMore: "Read more",
    postedOn: (date: string) => `Posted on ${date}`,
  },
  notFound: {
    title: "404",
    message: "Page not found",
    backToHome: "Back to home",
  },
} as const;
