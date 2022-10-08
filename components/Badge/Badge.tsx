import { BadgeProps } from "./Badge.props"
import cn from "classnames"
import badge from "./Badge.module.scss"

export const Badge = ({ color, children, className, href, ...props }: BadgeProps): JSX.Element => {
  return (
    <div
      className={cn(badge.element, className, {
        [badge.zero]: color == "zero",
        [badge.accent]: color == "accent",
        [badge.red]: color == "red",
        [badge.gree]: color == "green",
        [badge.gray]: color == "gray",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  )
}
