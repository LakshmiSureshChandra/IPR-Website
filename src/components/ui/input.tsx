import * as React from "react";
import { cn } from "@/lib/utils";

/* Underline fields. A box around every input is the one thing that makes a
   form look like a form; a single rule that darkens on focus reads as a page. */
const fieldClass =
  "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/50 transition-colors outline-none focus-visible:border-foreground disabled:opacity-50";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return <input type={type} data-slot="input" className={cn(fieldClass, "h-12", className)} {...props} />;
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea data-slot="textarea" className={cn(fieldClass, "resize-none", className)} {...props} />;
}

function Select({ className, ...props }: React.ComponentProps<"select">) {
  return <select data-slot="select" className={cn(fieldClass, "h-12 appearance-none bg-[position:right_0_center] bg-no-repeat pr-8", className)} style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' fill='none' stroke='%236b675f' stroke-width='1.5'/></svg>\")" }} {...props} />;
}

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return <label data-slot="label" className={cn("mb-1 block text-[11px] font-medium tracking-[0.06em] text-muted-foreground", className)} {...props} />;
}

export { Input, Textarea, Select, Label, fieldClass };
