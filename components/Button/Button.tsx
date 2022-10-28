/** @format */

import React from 'react'
import { ButtonProps } from './Button.props'
import cn from 'classnames'
import ArrowIcon from './Button.arrow.svg'
import button from './Button.module.scss'

export const Button = ({ appearance, arrow, children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(button.element, {
        [button.accent]: appearance == 'accent',
        [button.zero]: appearance == 'zero',
      })}
      {...props}
    >
      {children}
      {arrow ? (
        <span
          className={cn(button.arrow, {
            [button.down]: arrow == 'down',
          })}
        >
          {React.createElement(ArrowIcon)}
        </span>
      ) : null}
    </button>
  )
}
