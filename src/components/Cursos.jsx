import styles from './cursos.module.css'

export function Cursos() {
    return (
        <div>

        <div className={styles.cursos}>
            <img src="https://cdn-icons-png.flaticon.com/512/3200/3200651.png" alt="curso icon" />
                <div className={styles.cursosBox}>
                    <div className={styles.cursosContent}>
                        <header>
                            <div>
                                <strong>Curso Pacote Office Básico</strong>
                            </div> 
                        </header>
                    <p>Curso de Pacote Office Básico feito no Grupo Podium (Excel, Word, PowerPoint, Windows 10 e 11 e Internet) (ano) 2022 - 2023</p>
                </div>
            </div>
        </div>

            <div className={styles.cursos}>
            <img src="https://cdn-icons-png.flaticon.com/512/3200/3200651.png" alt="curso icon" />
                <div className={styles.cursosBox}>
                    <div className={styles.cursosContent}>
                        <header>
                            <div>
                                <strong>Curso de Programação Fullstack (RPV)</strong>
                            </div> 
                        </header>
                    <p>Curso de Programação nas áreas de atuação (Back-end, Front-end, DB, Git) disponibilizado pela Energisa com o Senai-FIEMG (ano) 2023 - 2024</p>
                </div>
            </div>
        </div>
        
        </div>
    )
}