import type { NextPage } from 'next';
import {Button} from "../components/Button/Button";
import {Paragraph} from "../components/Paragraph/Paragraph";
import {Tag} from "../components/Tag/Tag";

const Home: NextPage = () => {
  return (
    <>
        <Button appearance="primary" arrow='right'>Кнопка</Button>
        <Button appearance="ghost" arrow='right'>Кнопка 2</Button>
        <Paragraph size={"l"} >Большой</Paragraph>
        <Paragraph>Средний</Paragraph>
        <Paragraph size={"s"}>Маленький</Paragraph>
        <Tag color={'red'} size={'m'}>Большой</Tag>
    </>
  )
}

export default Home
