/** @format */

import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: 'accent' | 'zero'
  children: ReactNode
  arrow?: 'right' | 'down'
}
