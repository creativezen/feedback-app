/** @format */

import React from "react"
import { FooterProps } from "./Footer.props"
import cn from "classnames"
import footer from "./Footer.module.scss"

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, footer.element)} {...props}>
      <div className={footer.container}>
        <div className={footer.copyright}>OwlTop © 2020 - 2021 Все права защищены</div>
        <div className={footer.links}>
          <a href="">Пользовательское соглашение</a>
          <a href="">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  )
}
