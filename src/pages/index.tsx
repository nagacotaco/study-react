import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { Header } from 'src/components/Header/Header';
import { Main } from 'src/components/Main/Main';
import styles from 'src/styles/Home.module.css';

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleTextChange = useCallback((e: any) => {
    if (e.target.value.length > 5) {
      alert('asf');
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleIsShow = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleAddText = useCallback(() => {
    setArray((prevArray: any) => {
      if (prevArray.includes(text)) {
        setText('');
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

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
      <button onClick={handleAddText}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="index"></Main>
    </div>
  );
}
