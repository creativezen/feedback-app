/** @format */

import { FunctionComponent } from 'react'
import { TopLevelCategory } from './page.interface'

export interface PageItem {
  _id: string
  alias: string
  title: string
  category: string
}

export interface MenuItem {
  _id: {
    secondCategory: string
  }
  pages: PageItem[]
}

export interface FirstLevelMenuItem {
  _id: TopLevelCategory
  route: string
  name: string
  icon: JSX.Element
}
