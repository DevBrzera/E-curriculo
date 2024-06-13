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

            <hr />

            <div className={styles.idioma}>
                <p>Idiomas</p>
                <div className={styles.idiomaInfo}>
                    <img src="https://t4.ftcdn.net/jpg/00/65/12/49/360_F_65124908_UpNHzTdQn2HNAIT8yYqybMQeGfsRmVc7.jpg" alt="usa flag" />
                    <span>Inglês Básico</span>
                </div>
            </div> 
        </aside>
    )
}