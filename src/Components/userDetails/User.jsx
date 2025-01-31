import React from 'react'
import styles from './user.module.css'
import { getUser } from '../../../lib/data'
import Image from 'next/image'

// const getUser = async (userId) => {
//     // const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     // return res.json()

// }
const User = async ({ userId }) => {

    const user = await getUser(userId)
    return (
        <div className={styles.container}>
            <div className={styles.author}>
                <Image
                    src={user.img ? user.img : './author.jpg'}
                    alt='author'
                    width={50}
                    height={50}
                    className={styles.avatar}
                ></Image>
                <span className={styles.detailTitle}>Author</span>
                <span className={styles.detailValue}>{user.username}</span>
            </div>

        </div>
    )
}

export default User
