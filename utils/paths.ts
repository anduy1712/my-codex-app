/**
 * @PATHS contains all the routes of the application.
 * That way you can easily change the routes in one place and have a single source of truth.
 *
 * @example
 * `useRouter().push(PATHS.home.getHref());`
 */

export const PATHS = {
  home: {
    getHref: () => "/",
  },

  auth: {
    register: {
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""}`,
    },
    login: {
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""}`,
    },
  },

  app: {
    root: {
      getHref: () => "/app",
    },
    dashboard: {
      getHref: () => "/app",
    },
    discussions: {
      getHref: () => "/app/discussions",
    },
    discussion: {
      getHref: (id: string) => `/app/discussions/${id}`,
    },
    users: {
      getHref: () => "/app/users",
    },
    profile: {
      getHref: () => "/app/profile",
    },
  },
  public: {
    discussion: {
      getHref: (id: string) => `/public/discussions/${id}`,
    },
  },
} as const;
