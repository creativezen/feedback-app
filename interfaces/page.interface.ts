/** @format */

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface Andavantage {
  _id: string
  title: string
  description: string
}

export interface HhData {
  _id: string
  count: number
  juniorSalary: number
  middleSalary: number
  seniorSalary: number
  updatedAt: Date
}

export interface PageModel {
  _id: string
  tags: string[]
  secondCategory: string
  alias: string
  title: string
  category: string
  seoText: string
  tagsTitle: string
  metaTitle: string
  metaDescription: string
  firstCategory: TopLevelCategory
  advantages: Andavantage[]
  createdAt: Date
  updatedAt: Date
  hh: HhData
}
