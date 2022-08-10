import type { NextPage } from 'next';
import {Button} from "../components/Button/Button";

const Home: NextPage = () => {
  return (
    <>
        <Button appearance="primary" arrow='right'>Кнопка</Button>
        <Button appearance="ghost" arrow='right'>Кнопка 2</Button>
    </>
  )
}

export default Home
