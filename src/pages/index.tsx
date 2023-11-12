import Head from 'next/head';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Header } from 'src/components/Header/Header';
import { Main } from 'src/components/Main/Main';
import styles from 'src/styles/Home.module.css';

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState('');
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const handleTextChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      alert('asf');
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleIsShow = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleIsShow}>非表示</button>

      <input type="text" value={text} onChange={handleTextChange} />

      <Main page="index"></Main>
    </div>
  );
}
