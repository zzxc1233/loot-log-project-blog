import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-galactic-teal text-space-900 hover:bg-galactic-teal/90 hover:shadow-[0_0_20px_rgba(78,204,163,0.4)]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-galactic-teal bg-transparent text-galactic-teal shadow-xs hover:bg-galactic-teal/10 hover:shadow-[0_0_15px_rgba(78,204,163,0.3)]",
        secondary:
          "bg-space-600 text-silver-100 hover:bg-space-500 border border-white/10",
        ghost: "text-silver-300 hover:bg-space-500 hover:text-galactic-teal",
        link: "text-galactic-teal underline-offset-4 hover:underline hover:text-galactic-blue",
        article:
          "text-body text-silver-200 rounded-lg px-5 py-3 hover:bg-space-500 hover:text-galactic-teal transition-colors",
        login:
          "text-body text-galactic-teal bg-transparent py-xs px-4xl border border-galactic-teal rounded-[999px] hover:bg-galactic-teal/10 hover:shadow-[0_0_15px_rgba(78,204,163,0.3)] transition-all",
        signup:
          "text-body text-space-900 bg-linear-to-r from-galactic-teal to-galactic-blue py-xs px-4xl border border-galactic-teal rounded-[999px] hover:shadow-[0_0_20px_rgba(78,204,163,0.5)] transition-all",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-lg px-8 text-base has-[>svg]:px-6",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
