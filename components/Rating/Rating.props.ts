import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean
  value: number
  setValue?: (value: number) => void
}
