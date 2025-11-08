"use client";

import * as React from "react";
import ErrorFallBack from "@/components/molecules/error-fallback";
import { ReactQueryProvider } from "@/libs/react-query/provider";
import { ThemeProvider } from "next-themes";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "sonner";

type AppProviderProps = {
  children: React.ReactNode;
};

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
