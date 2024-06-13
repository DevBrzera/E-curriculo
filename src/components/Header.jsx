import styles from './header.module.css';
import headerLogo from '../assets/android-chrome-512x512.png';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={headerLogo} alt="user solid" />
            <p>E-Curriculo Profissional</p>
        </header>
    )
}