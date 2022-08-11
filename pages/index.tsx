import type { NextPage } from 'next';
import {Button} from "../components/Button/Button";
import {Paragraph} from "../components/Paragraph/Paragraph";
import {Tag} from "../components/Tag/Tag";
import {MouseEventHandler, useState} from "react";
import {Htag} from "../components/Htag/Htag";
import {Rating} from "../components/Rating/Rating";

const Home: NextPage = () => {
  return (
    <>
        <Htag tag={'h1'}>Текст</Htag>
        <Button appearance="primary" arrow='right'>Кнопка</Button>
        <Button appearance="ghost" arrow='right' >Кнопка 2</Button>
        <Paragraph size={"l"} >Большой</Paragraph>
        <Paragraph>Средний</Paragraph>
        <Paragraph size={"s"}>Маленький</Paragraph>
        <Tag color={'red'} size={'m'}>Большой</Tag>
        <Rating rating={4}/>
    </>
  )
}

export default Home
