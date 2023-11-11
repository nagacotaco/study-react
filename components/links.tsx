import { Inter } from 'next/font/google'
import styles from './Links.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Links() {
  return (
    <div className={styles.grid}>
      <a
        href="https://www.scsk-kyushu.co.jp/recruit/interview/16.html"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={styles.title}>
          SCSK <span>-&gt;</span>
        </h2>
        <p className={styles.description}>
          I joined this company as a new graduate. I did not enjoy my job. It was hard.
        </p>
      </a>

      <a
        href="https://www.tetrabox.tech/"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={styles.title}>
          Tetrabox.inc <span>-&gt;</span>
        </h2>
        <p className={styles.description}>
          Established on 3/31/2023. I enjoy working with my two colleagues!
        </p>
      </a>

      <a
        href="https://billage.space/members/tetrabox"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={styles.title}>
          Billage Article <span>-&gt;</span>
        </h2>
        <p className={styles.description}>
          Featured in an article about a shared office currently in use.
        </p>
      </a>

      <a
        href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://runrunrun.jp/wp/wp-content/uploads/2023/02/%E3%83%8F%E3%83%BC%E3%83%95%E3%81%BF%E3%81%A9%E3%82%8A%E4%BC%9A%E7%94%B7%E5%AD%90-1.pdf"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={styles.title}>
          Marathon Result <span>-&gt;</span>
        </h2>
        <p className={styles.description}>
          I ran a marathon with three work colleagues. The results are at ..... See the link.
        </p>
      </a>
    </div>
  )
}
