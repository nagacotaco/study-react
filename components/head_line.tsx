import styles from '@/styles/Home.module.css'

export default function HeadLine(props: any) {    
  return (
    <div>
        <h1 className={styles.title}>
            {props.page} Page{" "}
        </h1>
        <br />
        <p>
            <code className={styles.code}>pages/{props.page}.tsx</code>
        </p>
    </div>
  )
}
