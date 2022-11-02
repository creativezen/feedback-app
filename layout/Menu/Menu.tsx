/** @format */
import React from 'react'
import cn from 'classnames'
import { AppContext } from '../../context/app.context'
import { FirstLevelMenuItem } from '../../interfaces/menu.interface'

import MenuIconCourses from './Menu.icon-courses.svg'
import MenuIconServices from './Menu.icon-services.svg'
import MenuIconBooks from './Menu.icon-books.svg'
import MenuIconProducts from './Menu.icon-products.svg'

import menuApp from './Menu.module.scss'
import { TopLevelCategory } from '../../interfaces/page.interface'

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <MenuIconCourses />, _id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <MenuIconServices />, _id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <MenuIconBooks />, _id: TopLevelCategory.Books },
  { route: 'products', name: 'Товары', icon: <MenuIconProducts />, _id: TopLevelCategory.Products },
]

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = React.useContext(AppContext)

  const buildFirstLevel = () => {
    return (
      <div className={menuApp.block}>
        {firstLevelMenu.map(({ _id, route, icon, name }) => (
          <div key={route}>
            <a href={`/${route}`}>
              <div
                className={cn(menuApp.first, {
                  [menuApp.firstActive]: _id == firstCategory,
                })}
              >
                {icon}
                <span>{name}</span>
              </div>
            </a>
            {_id == firstCategory && buildSecondLevel()}
          </div>
        ))}
      </div>
    )
  }

  const buildSecondLevel = () => {
    return <div></div>
  }

  const buildThirdLevel = () => {
    return <div></div>
  }

  return (
    <div className={menuApp.block}>
      <ul>{buildFirstLevel()}</ul>
    </div>
  )
}
