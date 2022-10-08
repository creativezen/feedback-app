/** @format */

import React from "react"
import { MainProps } from "./Main.props"

export const Main = ({ children, ...props }: MainProps): JSX.Element => {
  return <main {...props}>{children}</main>
}
