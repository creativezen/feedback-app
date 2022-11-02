/** @format */

import React from 'react'
import { AsideProps } from './Aside.props'
import { Menu } from '../Menu/Menu'
import aside from './Aside.module.scss'

export const Aside = ({ ...props }: AsideProps): JSX.Element => {
  return (
    <aside {...props}>
      <Menu />
    </aside>
  )
}
