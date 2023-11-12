import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Header } from 'src/components/Header/Header';
import { Main } from 'src/components/Main/Main';
import styles from 'src/styles/Home.module.css';

export default function Home() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const handleClick = (e: any) => {
    setCount((count) => count + 1);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>ボタン</button>
      </div>
      <Main page="index"></Main>
    </div>
  );
}
