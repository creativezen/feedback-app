/** @format */

import { useEffect, useState, KeyboardEvent } from "react"
import { RatingProps } from "./Rating.props"
import StarIcon from "./Rating.star.svg"
import rating from "./Rating.module.scss"
import cn from "classnames"

export const Rating = ({ isEditable = false, value, setValue, ...props }: RatingProps): JSX.Element => {
  /*
  задаём модель рейтинга с пустыми ячейками */
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

  useEffect(() => {
    /*
    вызываем генерацию рейтинга */
    generateRating(value)
  }, [value])

  /*
  генерируем звёздочки и управляем поведением заливки
  функция на вход принимает текущее значение рейтинга */
  const generateRating = (currentRating: number) => {
    /*
    рисуем звёздочки в созданной ранее модели */
    const updatedArray = ratingArray.map((item: JSX.Element, index: number) => {
      return (
        <StarIcon
          /*
          закрашиваем звездочки пока значение рейтинга равно индексe текущей итерации */
          className={cn({
            [rating.filled]: index < currentRating,
            [rating.editable]: isEditable,
          })}
          /*
          при наведении вызываем метод управления заливкой, на вход отдаём значение текущего индекса + 1 */
          onMouseEnter={() => changeDisplay(index + 1)}
          /*
          возвращаем состояние заливки звездочек в иходное после того, как курсуор вышел из границ компонента */
          onMouseLeave={() => changeDisplay(value)}
          /*
          слушаем событие клик на предмет изменения значения рейтинга */
          onClick={() => handleRatingClick(index + 1)}
          /*
          делаем доступным изменение рейтинга через клавишу tab */
          tabIndex={isEditable ? 0 : -1}
          /*
          слушаем событие нажатия клавиши space */
          onKeyDown={(e: KeyboardEvent<SVGElement>) => handleKeySpace(index + 1, e)}
        />
      )
    })
    /*
    заполняем модель локального стейта */
    setRatingArray(updatedArray)
  }

  /*
  метод управления заливкой при наведении на звездочки
  на вход принимает значение индекса текущей итерации + 1 */
  const changeDisplay = (newValue: number) => {
    /*
    если рейтинг не редактируемый, ничего не делаем */
    if (!isEditable) return
    /*
    иначе генерируем новое состояние рейтинга */
    generateRating(newValue)
  }

  /*
  меняем значение рейтинга */
  const handleRatingClick = (newValue: number) => {
    /*
    если рейтинг не редактруемый или не передан каллбэк setValue, ничего не делаем */
    if (!isEditable || !setValue) return
    /*
    иначе вызывае калбэк и меняем значение рейтинга */
    setValue(newValue)
  }

  /*
  меняем значение рейтинга через клавиатуру */
  const handleKeySpace = (newValue: number, e: KeyboardEvent<SVGElement>) => {
    /*
    если нажатая клавиша не space или не передан каллбэк setValue, ничего не делаем */
    if (e.code != "Space" || !setValue) return
    /*
    иначе вызываем калбэк и меняем значение рейтинга */
    setValue(newValue)
  }

  return (
    <div {...props}>
      {ratingArray.map((item, index) => (
        <span className={rating.star} key={index}>
          {item}
        </span>
      ))}
    </div>
  )
}
