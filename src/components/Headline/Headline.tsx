import styles from './Headline.module.css';

export function HeadLine(props: any) {
  return (
    <div>
      <h1 className={styles.title}>
        {props.page} Page{" "}
      </h1>
      <br />
      <p>
        {props.children}
      </p>
    </div>
  )
}
