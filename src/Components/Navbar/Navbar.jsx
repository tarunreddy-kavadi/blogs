import React from 'react'
import Links from './Links'
import styles from './navBar.module.css'
import { auth } from '@/auth'
const Navbar = async () => {
    const session = await auth()
    console.log(session)
    return <div className={styles.container}>
        <h1>Logo</h1>
        <Links session={session} />
    </div>
}

export default Navbar
