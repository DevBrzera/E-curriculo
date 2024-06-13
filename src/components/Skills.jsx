import styles from './skills.module.css'
import { Progress } from '@chakra-ui/react'

export function Skills() {
    return (
        <div>

        <div className={styles.skills}>
            <img src="https://cdn-icons-png.flaticon.com/512/10262/10262344.png" alt="skills icon" />
                <div className={styles.skillsBox}>
                    <div className={styles.skillsContent}>
                        <header>
                            <div>
                                <strong>Flexibilidade</strong>
                            </div>
                        </header>
                    <Progress value={75} size='xs' colorScheme='green' />
                </div>
            </div>
        </div>

        <div className={styles.skills}>
            <img src="https://cdn-icons-png.flaticon.com/512/10262/10262344.png" alt="skills icon" />
                <div className={styles.skillsBox}>
                    <div className={styles.skillsContent}>
                        <header>
                            <div>
                                <strong>Proatividade</strong>
                            </div>
                        </header>
                    <Progress value={75} size='xs' colorScheme='green' />
                </div>
            </div>
        </div>

        </div>
    )
}