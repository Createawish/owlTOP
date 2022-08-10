import type { NextPage } from 'next';
import {Button} from "../components/Button/Button";

const Home: NextPage = () => {
  return (
    <>
        <Button appearance="primary">Кнопка</Button>
        <Button appearance="ghost">Кнопка 2</Button>
    </>
  )
}

export default Home
