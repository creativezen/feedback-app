/** @format */
import React from 'react'
import cn from 'classnames'
import { AppContext } from '../../context/app.context'
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface'
import { TopLevelCategory } from '../../interfaces/page.interface'

// SVG иконки интерфейса для ссылок в меню
import MenuIconCourses from './Menu.icon-courses.svg'
import MenuIconServices from './Menu.icon-services.svg'
import MenuIconBooks from './Menu.icon-books.svg'
import MenuIconProducts from './Menu.icon-products.svg'

// Стили меню
import menuApp from './Menu.module.scss'

// Массив ссылок для отрисовки категорий в меню
const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <MenuIconCourses />, _id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <MenuIconServices />, _id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <MenuIconBooks />, _id: TopLevelCategory.Books },
  { route: 'products', name: 'Товары', icon: <MenuIconProducts />, _id: TopLevelCategory.Products },
]

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = React.useContext(AppContext)

  const buildMenu = () => {
    return (
      <div className={menuApp.block}>
        {firstLevelMenu.map(({ _id, route, icon, name }) => (
          <div key={route} className={menuApp.first}>
            <a href={`/${route}`}>
              <div
                className={cn(menuApp.first_title, {
                  [menuApp.first_active]: _id == firstCategory,
                })}
              >
                {icon}
                <span>{name}</span>
              </div>
            </a>
            {_id == firstCategory && buildSecondLevel(route)}
          </div>
        ))}
      </div>
    )
  }

  const buildSecondLevel = (route: string) => {
    return (
      <div>
        {menu.map(({ _id, isOpened, pages }) => (
          <div key={_id.secondCategory} className={menuApp.second}>
            <div className={menuApp.second_title}>{_id.secondCategory}</div>
            <div
              className={cn(menuApp.secondBlock, {
                [menuApp.secondActive]: isOpened,
              })}
            >
              {buildThirdLevel(pages, route)}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      <div className={menuApp.third}>
        {pages.map(({ alias }) => (
          <a
            href={`/${route}/${alias}`}
            className={cn(menuApp.third_link, {
              [menuApp.third_active]: true,
            })}
          ></a>
        ))}
      </div>
    )
  }

  return (
    <div className={menuApp.block}>
      <ul>{buildMenu()}</ul>
    </div>
  )
}
