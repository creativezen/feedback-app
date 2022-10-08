/** @format */

import { LayoutProps } from "./Layout.props"
import { Header } from "./Header/Header"
import { Main } from "./Main/Main"
import { FunctionComponent } from "react"
import { Aside } from "./Aside/Aside"
import { Footer } from "./Footer/Footer"
import layout from "./Layout.mobule.scss"

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <Main>
        <Aside />
        {children}
      </Main>
      <Footer />
    </>
  )
}

export const LayoutHoc = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
