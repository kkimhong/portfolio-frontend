"use client";
import { Spinner } from "@/components/ui/spinner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import React, { ProviderProps, useEffect, useState } from "react";

export default function Providers({ children }: ProviderProps<unknown>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        storageKey="theme">
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
