import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

export interface BadgeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color: "zero" | "red" | "green" | "gray" | "accent"
  children: ReactNode
  href?: string
}
