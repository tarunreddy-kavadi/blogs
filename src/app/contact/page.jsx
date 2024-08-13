import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.image}>
          <Image src='/contact.png' alt='contact' fill></Image>
        </div>
      </div>
      <div className={styles.rightSide}>
        <form className={styles.form}>
          <input className={styles.input} type='name' placeholder='name or Surname' />
          <input className={styles.input} type='email' placeholder='Email' />
          <input className={styles.input} type='phone' placeholder='Phone Number' />
          <textarea className={styles.textarea}
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='message' ></textarea>
          <button className={styles.button} type='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
