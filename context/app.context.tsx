/** @format */

import React, { createContext, PropsWithChildren } from 'react'
import { MenuItem } from '../interfaces/menu.interface'
import { TopLevelCategory } from '../interfaces/page.interface'

export interface IAppContext {
  menu: MenuItem[]
  firstCategory: TopLevelCategory
  setMenu?: (newMenu: MenuItem[]) => void
}

// Cоздаём контекст и передаём в него начальные значения
export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Courses })

// Создаём обёртку-провайдер, через которую будем управлять состояниями и данными
export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = React.useState<MenuItem[]>(menu)
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu)
  }

  return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>{children}</AppContext.Provider>
}
