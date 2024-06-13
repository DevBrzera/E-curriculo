import styles from './sidebar.module.css';
import github from '../assets/github-white.svg'; 
import linkedin from '../assets/linkedin-white.svg';
import profile from '../assets/Bruno-profile.jpeg';
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.profile}>
                <img src={profile} alt="profile" />
                <p>Bruno Gregório</p>
                <span>Dev Fullstack</span>
            </div>

            <div className={styles.sociais}>
                <ul>
                    <li><a href="https://github.com/DevBrzera"><img src={github} alt="github" />DevBrzera</a></li>
                    <li><a href="https://www.linkedin.com/in/bruno-gregório-5b78aa2bb/"><img src={linkedin} alt='linkedin' />DevBrzera</a></li>
                </ul>
            </div>
        </aside>
    )
}