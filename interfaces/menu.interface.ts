/** @format */

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
  isOpened?: boolean
}

export interface FirstLevelMenuItem {
  _id: TopLevelCategory
  route: string
  name: string
  icon: JSX.Element
}
