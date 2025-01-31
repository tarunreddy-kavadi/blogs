import React, { Suspense } from 'react'
import styles from './SlinglePost.module.css'
import Image from 'next/image'
import User from '@/Components/userDetails/User'
import { getPost } from '../../../../lib/data'

// FETCHING DATA WITH API
// const getData = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//     if (!res.ok) {
//         console.log('something went wrong')
//     }
//     return res.json()
// }


// for dynamic SEO if you want to get the data from API you need to use the function generateMetadata
export const generateMetadata = async ({ params }) => {
    const { slug } = params;

    const post = await getPost(slug);

    return {
        title: post.title,
        description: post.desc,
    };
};



const SinglePagePost = async ({ params }) => {
    const { slug } = params;

    // const post = await getData(slug)
    const post = await getPost(slug)
    return (
        <div className={styles.container}>
            <div className={styles.imgContianer}>
                <Image src='/post.jpg' alt='post' className={styles.img} height={500} width={400}></Image>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.title}>
                    <h1>{post.title}</h1>
                </div>
                <div className={styles.detail}>

                    {post && <Suspense fallback={<div>Loading...</div>}>
                        <User userId={post.userId} />
                    </Suspense>}
                    <div className={styles.published}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
                    </div>

                </div>
                <div className={styles.Desc}>
                    {post.desc}
                </div>
            </div>

        </div>
    )
}

export default SinglePagePost
