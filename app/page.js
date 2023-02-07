import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <nav style={{ backgroundColor: 'blue', width: '100%', height: '60px' }}>
        <h1 style={{ textTransform: 'uppercase', }}>Demo online test</h1>
      </nav>
    </main>
  )
}
