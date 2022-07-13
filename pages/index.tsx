import type { NextPage } from 'next';
import Head from 'next/head';
import { Title } from './head';
import { Option } from './option';
import { Carousel } from './carousel';
import styles from '../styles/Style.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>А вдруг СМА?</title>
      </Head>
      <Title />
      <Option />
      <Carousel />
    </div>
  );
};

export default Home;
