import Head from 'next/head';
import { useCallback, useEffect } from 'react';
import { Header } from 'src/components/Header/Header';
import { Main } from 'src/components/Main/Main';
import styles from 'src/styles/Home.module.css';

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
  const handleClick = useCallback((e: any) => {
    e.preventDefault();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index"></Main>
    </div>
  );
}
