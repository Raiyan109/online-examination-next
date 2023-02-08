"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [color, setColor] = useState('white')

  const handleNextClick = () => {
    setColor('green')
    console.log('clicked');
  }

  const handleReviewClick = () => {
    setColor('yellow')
  }

  const handleDumpClick = () => {
    setColor('white')
  }
  return (
    <main className={styles.main}>
      <nav style={{ backgroundColor: 'purple', width: '100%', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <h1 style={{ textTransform: 'uppercase', color: 'white', }}>Demo online test</h1>
        </div>
      </nav>

      <section style={{ display: 'flex' }}>
        {/* Left section */}
        <section style={{ padding: '10px', flex: '3' }}>
          {/* Buttons */}
          <button style={{ backgroundColor: 'blue', padding: '10px', outline: 'none' }}>All Sections</button>
          <button style={{ backgroundColor: 'skyblue', padding: '10px' }}>Physics</button>
          <button style={{ backgroundColor: 'skyblue', padding: '10px' }}>Chemistry</button>
          <button style={{ backgroundColor: 'skyblue', padding: '10px' }}>Maths</button>

          {/* Content div */}
          <div className={styles.contentDiv}>
            {/* Content div nav */}
            <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'skyblue', width: '100%', height: '30px' }}>
              <h4>Q No:1</h4>
              <div>
                <label for="lang">View in:</label>
                <select name="lang" id="lang">
                  <option value="volvo">English</option>
                  <option value="saab">Bangla</option>
                  <option value="opel">Arabic</option>
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', padding: '10px' }}>
              {/* Question instruction */}
              <div>
                <h1 style={{ textTransform: 'uppercase', color: 'blue' }}>Question Instruction</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero, rem porro est totam fugiat impedit molestias praesentium consequatur provident reprehenderit ad temporibus non! Officiis quam exercitationem explicabo illum mollitia!</p>
              </div>
              {/* Question */}
              <div>
                <h1 style={{ textTransform: 'uppercase', color: 'blue' }}>Question</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere error, illo non tempora, nulla suscipit officia ab consequatur dicta cor</p>
              </div>
            </div>
          </div>

          {/* Buttons down */}
          <button style={{ backgroundColor: 'skyblue', padding: '10px', textTransform: 'uppercase' }}>Clear Response</button>
          <button style={{ backgroundColor: 'skyblue', padding: '10px', textTransform: 'uppercase' }}>Review</button>
          <button style={{ backgroundColor: 'skyblue', padding: '10px', textTransform: 'uppercase' }}>Dump</button>
          <button style={{ backgroundColor: 'skyblue', padding: '10px', textTransform: 'uppercase' }}>Previous</button>
          <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px', outline: 'none', textTransform: 'uppercase' }} onClick={handleNextClick} >Next</button>
        </section>

        {/* Right section */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}>
          {/* Image div */}
          <div style={{ backgroundColor: 'skyblue', width: '100%' }}>
            <img width={'50px'} src="https://fastly.picsum.photos/id/537/200/300.jpg?hmac=LG3kZs5AdrMmsgeVOdrfP0C5KT3WmP-q5TauEZdR4vk" alt="" />
            <div>
              <h5>Time Left</h5>
              <h5>Raiyan Kabir</h5>
            </div>
          </div>
          {/* Question Pallete div */}
          <div style={{ height: '260px', backgroundColor: 'lightblue' }}>
            <div style={{ backgroundColor: '#7286D3', color: 'white', width: '100%', height: '20px' }}>
              <h3>Question Pallete</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr' }}>
                <div style={{ width: '33px', height: '20px', backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>1</div>
                <div style={{ width: '33px', height: '20px', backgroundColor: 'orange', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
                <div style={{ width: '33px', height: '20px', backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>3</div>
                <div style={{ width: '33px', height: '20px', backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>4</div>
                <div style={{ width: '33px', height: '20px', backgroundColor: 'orange', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>5</div>
                <div style={{ width: '33px', height: '20px', backgroundColor: 'yellow', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>6</div>
                <div style={{ width: '33px', height: '20px', backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>7</div>
                <div style={{ width: '33px', height: '20px', backgroundColor: 'wheat', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>8</div>
                <div style={{ width: '33px', height: '20px', backgroundColor: 'coral', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>9</div>
                <div style={{ width: '33px', height: '20px', backgroundColor: 'gray', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>10</div>
              </div>
            </div>

          </div>
          {/* Legend div */}
          <div style={{ height: '260px', backgroundColor: 'lightblue' }}>
            <div style={{ backgroundColor: '#7286D3', color: 'white', width: '100%', height: '20px' }}>
              <h4>Legend (Click to View)</h4>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', margin: '3px 0 3px 0' }}>
              <div style={{ backgroundColor: 'green', width: '84px', height: '27px', fontSize: '13px' }}><p>4 Answer</p></div>
              <div style={{ backgroundColor: 'red', width: '84px', height: '27px', fontSize: '13px' }}><p>2 No Answer</p></div>
              <div style={{ backgroundColor: '#A7727D', width: '84px', height: '27px', fontSize: '13px' }}><p>1 Review+Ans</p></div>
              <div style={{ backgroundColor: 'yellow', width: '84px', height: '27px', fontSize: '13px' }}><p>1 Review+Ans</p></div>
              <div style={{ backgroundColor: 'gray', width: '84px', height: '27px', fontSize: '13px' }}><p>1 Dump</p></div>
              <div style={{ backgroundColor: 'whiteSmoke', width: '84px', height: '27px', fontSize: '13px' }}><p>1 No Visit</p></div>
            </div>
            <div style={{ backgroundColor: '#7286D3', color: 'white', width: '100%', height: '20px' }}>
              <h4>10 All Questions</h4>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', margin: '3px 0 3px 0', outline: 'none' }}>
              <button style={{ backgroundColor: 'skyblue', color: 'white', borderRadius: '5px', padding: '10px', textTransform: 'uppercase' }}>Profile</button>
              <button style={{ backgroundColor: 'skyblue', color: 'white', borderRadius: '5px', padding: '10px', textTransform: 'uppercase' }}>Instr</button>
              <button style={{ backgroundColor: 'skyblue', color: 'white', borderRadius: '5px', padding: '10px', textTransform: 'uppercase' }}>Questions</button>
              <button style={{ backgroundColor: 'skyblue', color: 'white', borderRadius: '5px', padding: '10px', textTransform: 'uppercase' }}>Submit</button>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
