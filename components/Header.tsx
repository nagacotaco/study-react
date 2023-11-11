import Link from "next/link";
import styles from "./Header.module.css";
export function Header() {
	return (
		<header className={styles.header}>
			<Link legacyBehavior href="/">
				<a className={styles.anchor}>Index</a>
			</Link>
			<Link legacyBehavior href="/about">
				<a className={styles.anchor}>About</a>
			</Link>
		</header>
	);
}
