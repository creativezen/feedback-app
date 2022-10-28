/** @format */
import { useState } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import axios from 'axios'
import { Badge } from '../components/Badge/Badge'
import { Button } from '../components/Button/Button'
import { Paragraph } from '../components/Paragraph/Paragraph'
import { Rating } from '../components/Rating/Rating'
import { Title } from '../components/Title/Title'
import { LayoutHoc } from '../layout/Layout'
import { MenuItem } from '../interfaces/menu.interface'

const Home: NextPage<HomeProps> = ({ menu }): JSX.Element => {
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
      <ul>
        {menu.map((item) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </>
  )
}

export default LayoutHoc(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  })
  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
