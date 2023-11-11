import styles from '@/styles/Home.module.css'

export function HeadLine(props: any) {
  return (
    <div>
      {/* <h1 className={styles.title}>
            {props.page} Page{" "}
        </h1>
        <br /> */}
      <p>
        <code className={styles.code}>{props.page}</code>
      </p>
    </div>
  )
}
