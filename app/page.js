import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <nav style={{ backgroundColor: 'purple', width: '100%', height: '60px' }}>
        <h1 style={{ textTransform: 'uppercase', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Demo online test</h1>
      </nav>

      {/* Buttons */}
      <button style={{ backgroundColor: 'blue', padding: '10px', outline: 'none' }}>All Sections</button>
      <button style={{ backgroundColor: 'skyblue', padding: '10px' }}>Physics</button>
      <button style={{ backgroundColor: 'skyblue', padding: '10px' }}>Chemistry</button>
      <button style={{ backgroundColor: 'skyblue', padding: '10px' }}>Maths</button>
    </main>
  )
}
