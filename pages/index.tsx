/** @format */
import { useState } from "react"
import type { NextPage } from "next"
import { Badge } from "../components/Badge/Badge"
import { Button } from "../components/Button/Button"
import { Paragraph } from "../components/Paragraph/Paragraph"
import { Rating } from "../components/Rating/Rating"
import { Title } from "../components/Title/Title"
import { LayoutHoc } from "../layout/Layout"

const Home: NextPage = (): JSX.Element => {
  const [rating, setRating] = useState<number>(4)
  return (
    <>
      <Title tag="h1">Заголовок</Title>
      <Badge color="accent">Бейдж</Badge>
      <Badge color="gray" href="google.com">
        Бейдж
      </Badge>
      <Paragraph size="m">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab id at quis, necessitatibus quia magni eaque!
        Adipisci reiciendis culpa deserunt, ea accusamus eligendi dolore blanditiis dolor impedit repellendus quisquam?
        Alias nemo reprehenderit voluptates veritatis labore nam explicabo fugit impedit nostrum nisi, recusandae
        repudiandae et doloremque illum sed veniam odio similique natus facilis. A aspernatur nemo quos sit
        reprehenderit unde?
      </Paragraph>
      <Button appearance="accent">Кнопка</Button>
      <Button appearance="zero" arrow="right">
        Кнопка
      </Button>
      <Rating value={rating} setValue={setRating} isEditable />
    </>
  )
}

export default LayoutHoc(Home)