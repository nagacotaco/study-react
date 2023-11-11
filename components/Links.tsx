import styles from './Links.module.css';

const ITEMS = [
  {
    href: 'https://www.scsk-kyushu.co.jp/recruit/interview/16.html',
    title: 'SCSK',
    description:
      'I joined this company as a new graduate. I did not enjoy my job. It was hard.'
  },
  {
    href: 'https://www.tetrabox.tech/',
    title: 'Tetrabox.inc',
    description:
      'Established on 3/31/2023. I enjoy working with my two colleagues!'
  },
  {
    href: 'https://billage.space/members/tetrabox',
    title: 'Billage',
    description:
      'Featured in an article about a shared office currently in use.'
  },
  {
    href: 'https://runrunrun.jp/wp/wp-content/uploads/2023/02/%E3%83%8F%E3%83%BC%E3%83%95%E3%81%BF%E3%81%A9%E3%82%8A%E4%BC%9A%E7%94%B7%E5%AD%90-1.pdf',
    title: 'Marathon Result',
    description:
      'I ran a marathon with three work colleagues. The results are at\n.....See the link.'
  }
];

export function Links() {
  return (
    <div className={styles.grid}>
      {ITEMS.map((item) => {
        return (
          <a
            key={item.href}
            href={item.href}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.title}>
              {item.title} <span>-&gt;</span>
            </h2>
            <p className={styles.description}>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
