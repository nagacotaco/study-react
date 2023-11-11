import { HeadLine } from '@/components/head_line'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { Links } from '../components/links'
import { Logo } from '../components/logo'

const inter = Inter({ subsets: ['latin'] })

export function Main(props: any) {
    return (
        <>
            <main className={`${styles.main} ${inter.className}`}>
                <div className={styles.description}>
                    <HeadLine
                        page={props.page}
                    >
                        <code className={styles.code}>pages/{props.page}.js</code>
                    </HeadLine>
                    <Logo />
                </div>

                <div className={styles.center}>
                    <Image
                        className={styles.logo}
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
    )
}
