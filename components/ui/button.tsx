import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:scale-[0.99]",
        outline:
          "border-slate-300 bg-white text-slate-800 hover:bg-emerald-50 hover:text-emerald-900 hover:border-emerald-400 active:scale-[0.99] dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-emerald-950/40",
        secondary:
          "bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-200 dark:border-emerald-800",
        ghost:
          "text-slate-700 hover:bg-emerald-50 hover:text-emerald-900 dark:text-slate-200 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-200",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 border-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 text-sm gap-2",
        xs: "h-6 px-2 text-xs gap-1 rounded-md",
        sm: "h-8 px-3 text-xs gap-1.5 rounded-md",
        lg: "h-11 px-6 text-base gap-2.5 rounded-lg",
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
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "button"
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
