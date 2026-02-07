import { RiLoaderLine } from "@remixicon/react";
import { cn } from "@/lib/utils"; // Assuming you have this utility
import React from "react";

// Destructure 'children' to separate it from 'props'
function Spinner({
  className,
  children,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <RiLoaderLine
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner };
