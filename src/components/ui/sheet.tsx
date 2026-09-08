"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetTitle = SheetPrimitive.Title;
const SheetDescription = SheetPrimitive.Description;

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & { side?: "right" | "left" | "top" }) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay
        className={cn(
          "fixed inset-0 z-50 bg-foreground/25 backdrop-blur-[2px]",
          "data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in-fast"
        )}
      />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "fixed z-50 flex flex-col gap-0 bg-background shadow-[0_0_80px_-20px_rgba(22,21,15,0.35)]",
          side === "right" && "inset-y-0 right-0 h-full w-[86%] max-w-sm border-l border-border data-[state=closed]:animate-slide-out-right data-[state=open]:animate-slide-in-right",
          side === "left" && "inset-y-0 left-0 h-full w-[86%] max-w-sm border-r border-border data-[state=closed]:animate-slide-out-left data-[state=open]:animate-slide-in-left",
          side === "top" && "inset-x-0 top-0 border-b border-border data-[state=closed]:animate-slide-out-top data-[state=open]:animate-slide-in-top",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close
          className="absolute right-5 top-6 rounded-full p-2 text-foreground/60 hover:bg-foreground/5 outline-none transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-accent/35"
          aria-label="Close menu"
        >
          <X className="size-5" />
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
}

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetTitle, SheetDescription };
