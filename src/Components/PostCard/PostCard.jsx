import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
const PostCard = ({ posts }) => {
    console.log(posts.slug)
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src='/post.jpg' alt='post' fill></Image>
                </div>
                <div className={styles.date}> 19.10.2001</div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.title}> {posts.title}</div>
                <div className={styles.desc}>{posts.desc}</div>
                <Link href={`/blog/${posts.slug}`}> Read More</Link>
            </div>
        </div>
    )
}

export default PostCard

