import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const AboutPage = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.leftSide}>
        <h3 className={styles.about}>About Agency</h3>
        <h1 className={styles.title}>We Create Digital Ideas that are bigger,braver,bolder and better</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1 >10 K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1 >234 K+</h1>
            <p>People Reached</p>
          </div>
          <div className={styles.box}>
            <h1 >5 K+</h1>
            <p>Services and Plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.image}>
          <Image src='/about.png' alt='about' fill></Image>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
