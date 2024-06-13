import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import { Info } from './components/Info.jsx'
import styles from './app.module.css'

export default function App() {
  return (
    <div className={styles.body}>

    <Header />

    <div className={styles.wrapper}>

      <Sidebar />

      <main>

        <Info />

      </main>
      
    </div>

    </div>
  )

}

