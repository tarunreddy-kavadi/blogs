'use client'
import React, { useEffect, useState } from 'react'
import styles from './blog.module.css'
import PostCard from '@/Components/PostCard/PostCard'
import { getPosts } from '../../../lib/data'

const blogPage = () => {
    const [allPosts, setAllPosts] = useState([])

    const fetching = async () => {
        const res = await getPosts();
        setAllPosts(res)
        console.log(allPosts)
    };
    useEffect(() => {
        fetching()
    }, [])

    return (
        <div className={styles.container}>
            {
                allPosts.map((posts) => {
                    return <div className={styles.post} key={posts.id}>
                        <PostCard posts={posts} />
                    </div>
                })
            }


        </div>
    )
}

export default blogPage
