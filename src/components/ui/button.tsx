import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* Pills, sentence case, ink-first. The old brass fill is gone — `accent` is
   kept as a variant name so call sites don't change, but it renders as ink. */
const buttonVariants = cva(
  [
    "group/btn relative inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full",
    "text-[13px] font-medium tracking-[0.01em]",
    "transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out",
    "outline-none focus-visible:ring-[3px] focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300",
    "[&_svg:last-child]:group-hover/btn:translate-x-0.5",
  ],
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/85 hover:shadow-[0_16px_40px_-18px_rgba(17,17,16,0.6)]",
        accent: "bg-foreground text-background hover:bg-foreground/85 hover:shadow-[0_16px_40px_-18px_rgba(17,17,16,0.6)]",
        outline:
          "border border-foreground/15 bg-background/50 text-foreground backdrop-blur-md hover:border-foreground hover:bg-foreground hover:text-background",
        subtle: "bg-paper text-foreground hover:bg-paper-2",
        light: "border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-foreground",
        ghost: "text-foreground hover:bg-foreground/[0.06]",
        // Underline that grows from the left.
        link: [
          "rounded-none px-0 text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px",
          "after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300",
          "hover:after:scale-x-100",
        ],
      },
      size: {
        sm: "h-10 px-5",
        default: "h-12 px-6",
        lg: "h-14 px-8 text-[14px]",
        icon: "size-11 px-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
