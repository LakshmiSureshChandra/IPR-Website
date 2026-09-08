"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function NavigationMenu({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn("relative flex max-w-max flex-1 items-center justify-center", className)}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn("group flex flex-1 list-none items-center justify-center gap-8", className)}
      {...props}
    />
  );
}

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navTriggerClass =
  "group inline-flex items-center gap-1.5 text-[13px] font-medium tracking-[0.01em] text-foreground/70 outline-none transition-colors duration-200 hover:text-foreground focus-visible:text-foreground data-[state=open]:text-foreground";

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger data-slot="navigation-menu-trigger" className={cn(navTriggerClass, className)} {...props}>
      {children}
      <ChevronDown
        className="size-3 transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      // w-auto, not w-full: the viewport measures this node to size itself, and
      // w-full inside an unsized measuring container collapses to a thin strip.
      className={cn("absolute left-0 top-0 w-auto p-2", className)}
      {...props}
    />
  );
}

/* Deliberately unstyled. This wraps both the top-level bar links and the items
   inside the dropdown, and those want opposite treatments — baking the bar's
   uppercase inline-flex in here flattens every panel item into one row. Callers
   pass `navTriggerClass` when they want the bar look. */
function NavigationMenuLink({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn("outline-none transition-colors duration-200", className)}
      {...props}
    />
  );
}

function NavigationMenuViewport({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="absolute left-0 top-full isolate z-50 flex justify-center">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "relative mt-4 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top overflow-hidden",
          "rounded-[1.25rem] border border-border/80 bg-background/95 shadow-[0_28px_70px_-32px_rgba(17,17,16,0.45)] backdrop-blur-xl",
          "transition-[width,height] duration-300 ease-out md:w-[var(--radix-navigation-menu-viewport-width)]",
          "data-[state=closed]:animate-nav-out data-[state=open]:animate-nav-in",
          className
        )}
        {...props}
      />
    </div>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navTriggerClass,
};
