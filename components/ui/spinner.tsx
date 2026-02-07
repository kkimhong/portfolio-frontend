import { RiLoaderLine } from "@remixicon/react";
import { cn } from "@/lib/utils";
import React from "react";

// Omit 'children' from the interface so TypeScript knows it's not allowed
type SpinnerProps = Omit<React.ComponentProps<"svg">, "children">;

export function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <RiLoaderLine
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}
