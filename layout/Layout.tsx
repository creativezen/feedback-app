/** @format */

import { LayoutProps } from "./Layout.props"
import { Header } from "./Header/Header"
import { Main } from "./Main/Main"
import { FunctionComponent } from "react"
import { Aside } from "./Aside/Aside"
import { Footer } from "./Footer/Footer"
import layout from "./Layout.module.scss"

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={layout.wrapper}>
      <Header className={layout.header} />
      <Aside className={layout.aside} />
      <Main className={layout.main}>{children}</Main>
      <Footer className={layout.footer} />
    </div>
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
