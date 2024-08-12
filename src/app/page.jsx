import React from 'react'
import styles from './page.module.css'
const page = () => {
    return <div className={styles.homeContainer}>
        <div className={styles.leftSide}>
            <div className={styles.title}>
                Creative Thoughts Agency.
            </div>
            <div className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className={styles.buttons}>
                <button className={styles.button} >Learn More</button>
                <button className={styles.button}>Contact</button>
            </div>
            <div className={styles.socialMedia}></div>
        </div>
    </div>

}

export default page
