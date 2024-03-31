import * as React from "react"

import { cn } from "../../lib/utils"

import { type VariantProps, cva } from "class-variance-authority"

export const BadgeStyle = {
  base: "inline-flex items-center rounded-md border space-x-1 px-2 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
    default: "border-transparent bg-primary/90 text-primary-foreground shadow",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
    outline: "text-foreground",
  },
}

const badgeVariants = cva(BadgeStyle.base, {
  variants: {
    variant: BadgeStyle.variants,
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }