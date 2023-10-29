import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export function Logo() {
  return (    
        <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thanks By{' '}
              <Image
                src="/Tetrabox_logomark_basic_fullcolor_positive.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={35}
                priority
              />
            </a>
        </div>
  )
}
