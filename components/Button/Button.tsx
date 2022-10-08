import { ButtonProps } from "./Button.props"
import ArrowIcon from "./Button.arrow.svg"
import button from "./Button.module.scss"
import cn from "classnames"

export const Button = ({ appearance, arrow, children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(button.element, {
        [button.accent]: appearance == "accent",
        [button.zero]: appearance == "zero",
      })}
      {...props}
    >
      {children}
      {arrow && (
        <span
          className={cn(button.arrow, {
            [button.down]: arrow == "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  )
}
