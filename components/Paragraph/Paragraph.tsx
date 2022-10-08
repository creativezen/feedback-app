import { ParagraphProps } from "./Paragraph.props"
import cn from "classnames"
import paragraph from "./Paragraph.module.scss"

export const Paragraph = ({ size, children, className, ...props }: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(className, paragraph.element, {
        [paragraph.small]: size == "s",
        [paragraph.medium]: size == "m",
        [paragraph.big]: size == "l",
      })}
      {...props}
    >
      {children}
    </p>
  )
}
