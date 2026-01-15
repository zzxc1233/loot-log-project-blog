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
          "bg-gold-400 text-midnight-900 hover:bg-gold-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-gold-400 bg-transparent text-gold-400 shadow-xs hover:bg-gold-400/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]",
        secondary:
          "bg-midnight-600 text-offwhite-200 hover:bg-midnight-500 border border-gold-400/30",
        ghost: "text-offwhite-200 hover:bg-midnight-500 hover:text-gold-400",
        link: "text-gold-400 underline-offset-4 hover:underline hover:text-gold-300",
        article:
          "text-body text-offwhite-300 rounded-lg px-5 py-3 hover:bg-midnight-500 hover:text-gold-400 transition-colors",
        login:
          "text-body text-gold-400 bg-transparent py-xs px-4xl border border-gold-400 rounded-[999px] hover:bg-gold-400/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all",
        signup:
          "text-body text-midnight-900 bg-gradient-to-r from-gold-400 to-gold-500 py-xs px-4xl border border-gold-400 rounded-[999px] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all",
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
