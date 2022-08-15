import type {GetStaticProps} from 'next';
import {Button} from "../components/Button/Button";
import {Paragraph} from "../components/Paragraph/Paragraph";
import {Tag} from "../components/Tag/Tag";
import {useState} from "react";
import {Htag} from "../components/Htag/Htag";
import {Rating} from "../components/Rating/Rating";
import { withLayout} from "../Layout/Layout";
import axios from "axios";
import {MenuItem} from "../Interfaces/menu.inteface";
import http from "../utils/api";

function Home({menu}:HomeProps): JSX.Element {
    const [rating, setRating] = useState(4);
    console.log("menu", menu);
  return (
    <>
        <Htag tag={'h1'}>Текст</Htag>
        <Button appearance="primary" arrow='right'>Кнопка</Button>
        <Button appearance="ghost" arrow='right' >Кнопка 2</Button>
        <Paragraph size={"l"} >Большой</Paragraph>
        <Paragraph>Средний</Paragraph>
        <Paragraph size={"s"}>Маленький</Paragraph>
        <Tag color={'red'} size={'m'}>Большой</Tag>
        <Rating rating={rating} isEditable={true} setRating={setRating}/>
        <div>
        <ul>
            {/*{menu.map((el) => (<li key={el.total}>{el.totalPages}</li>))}*/}

        </ul>
        </div>
    </>
  );
}

export default withLayout (Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
        const {data: menu} = await http.get<MenuItem[]>('/films');
    if(!menu){
        return {
            notFound:true,
        };
    }
        return {
            props: {
                menu,
            }
        };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
}
