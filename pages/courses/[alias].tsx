/** @format */

import React from 'react'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { LayoutHoc } from '../../layout/Layout'
import { MenuItem } from '../../interfaces/menu.interface'
import { PageModel } from '../../interfaces/page.interface'
import { ProductModel } from '../../interfaces/product.interface'

const firstCategory = 0

export const Course = ({ menu, page, products }: CourseProps): JSX.Element => {
  return <div>Course</div>
}

export default LayoutHoc(Course)

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  })

  return {
    paths: menu.flatMap((item) => item.pages.map((page) => '/courses/' + page.alias)),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) return { notFound: true }

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  })

  const { data: page } = await axios.get<PageModel>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
  )

  const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
    category: page.category,
    limit: 10,
  })

  return {
    props: {
      menu,
      firstCategory,
      page,
      products,
    },
  }
}

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
  page: PageModel
  products: ProductModel[]
}
