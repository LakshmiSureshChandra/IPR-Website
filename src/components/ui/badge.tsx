import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] backdrop-blur-md",
  {
    variants: {
      variant: {
        default: "border border-border bg-background/70 text-muted-foreground",
        accent: "border border-accent/30 bg-background/70 text-accent-ink",
        solid: "bg-foreground text-background",
        light: "border border-white/30 bg-white/15 text-white",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

function Badge({ className, variant, ...props }: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
