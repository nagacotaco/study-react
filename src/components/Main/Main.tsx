import { Inter } from 'next/font/google';
import Image from 'next/image';
import { HeadLine } from 'src/components/Headline/Headline';

import { Links } from 'src/components/Links/Links';

import { Logo } from 'src/components/Logo/Logo';
import styles from './Main.module.css';

const inter = Inter({ subsets: ['latin'] });

export function Main(props: any) {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <HeadLine page={props.page}>
            <code className={styles.code}>pages/{props.page}.js</code>
          </HeadLine>
          <Logo />
        </div>

        <div className={styles.center}>
          <Image
            src="/ngt.png"
            alt="Next.js Logo"
            width={180}
            height={50}
            priority
          />
        </div>

        <Links />
      </main>
    </>
  );
}
