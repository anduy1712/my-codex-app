"use client";

import * as React from "react";
import ErrorFallBack from "@/components/molecules/error-fallback";
import ReactQueryProvider from "@/libs/react-query";
import { ThemeProvider } from "next-themes";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "sonner";

type AppProviderProps = {
  children: React.ReactNode;
};

/**
 * AppProvider is the root provider of the app.
 * It wraps the app with the following providers:
 * - ErrorBoundary: To handle errors in the app
 * - ReactQueryProvider: To handle data fetching and caching
 * - ThemeProvider: To handle the theme of the app
 * - Toaster: To handle the notifications of the app
 * - Children: The app's content
 */
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <ReactQueryProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          <Toaster />
          {children}
        </ThemeProvider>
      </ReactQueryProvider>
    </ErrorBoundary>
  );
};
