import styles from './comments.module.css'

export function Comments() {
    return (
        <div>

        <div className={styles.comments}>
            <img src="https://cdn3.iconfinder.com/data/icons/office-186/64/16_hard_skills_skill_portfolio_book_business_office-512.png" alt="hardskills" />
                <div className={styles.commentsBox}>
                    <div className={styles.commentsContent}>
                        <header>
                            <div>
                                <strong>Ensino Médio Técnico Informática</strong>
                            </div>
                        </header>
                    <p>Ensino Médio Técnico de Informática completo (ano) 2021 - 2023</p>
                </div>
            </div>
        </div>

        <div className={styles.comments}>
            <img src="https://cdn3.iconfinder.com/data/icons/office-186/64/16_hard_skills_skill_portfolio_book_business_office-512.png" alt="hardskills" />
                <div className={styles.commentsBox}>
                    <div className={styles.commentsContent}>
                        <header>
                            <div>
                                <strong>Analista e Desenvolvedor de Sistemas</strong>
                            </div>
                    </header>
                <p>Tecnólogo graduado em Análise e Desenvolvimento de Sistemas na Doctum (ano) 2024 - atual</p>
            </div>
        </div>
    </div>

</div>
    )
}