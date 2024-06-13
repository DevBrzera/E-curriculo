import styles from './info.module.css'
import profile from '../assets/Bruno-profile.jpeg'
import { Comments } from './Comments.jsx'
import { Cursos } from './Cursos.jsx'
import { Skills } from './Skills.jsx' 

export function Info() {
    return (
        <article>
            <header className={styles.autor}>
                <div className={styles.profile}>
                    <img src={profile} alt="profile" />
                    <div>
                        <p>Bruno Gregório</p>
                        <span>Dev Fullstack</span>
                    </div>
                </div>
            </header>

            <div>
                <p className={styles.bio}>Sobre Mim</p>
                <p>Estudante de programação, recém-formado no ensino médio, graduando em Analise e Desenvolvimento de Sistemas, buscando experiência profissional e crescimento na carreira tecnológica.</p>

            <div className={styles.profileInfo}>
                <p><a href="https://github.com/DevBrzera?tab=repositories" target='_blank'>Repositórios</a></p>
                <p><a href="https://github.com/DevBrzera/react-chakra" target='_blank'>Último Projeto</a></p>
                </div>
            </div>

            <hr />

            <form className={styles.commentsForm}>
                <p className={styles.title}>Formação Academica</p>
            </form>
            <div>
                <Comments />
            </div>

            <hr />

            <form className={styles.commentsForm}>
                <p className={styles.title}>Cursos</p>
            </form>
            <div>
                <Cursos />
            </div>

            <hr />

            <form className={styles.commentsForm}>
                <p className={styles.title}>Habilidades</p>
            </form>
            <div>
                <Skills />
            </div>

        </article>
    )
}