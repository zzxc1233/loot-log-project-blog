import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-offwhite-200 placeholder:text-offwhite-400/60 selection:bg-gold-400 selection:text-midnight-900 bg-midnight-700 border-gold-400/30 text-offwhite-200 h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-gold-400 focus-visible:ring-gold-400/30 focus-visible:ring-[3px] focus-visible:shadow-[0_0_15px_rgba(212,175,55,0.2)]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
