/** @format */

import React from "react"
import { TitleProps } from "./Title.props"
import title from "./Title.module.scss"

export const Title = ({ tag, children }: TitleProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={title.h1}>{children}</h1>
    case "h2":
      return <h2 className={title.h2}>{children}</h2>
    case "h3":
      return <h3 className={title.h3}>{children}</h3>
    default:
      return <></>
  }
}
