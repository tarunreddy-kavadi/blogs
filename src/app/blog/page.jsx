'use client'
import React, { useEffect, useState } from 'react'
import styles from './blog.module.css'
import PostCard from '@/Components/PostCard/PostCard'
import { getPosts, getPost, getUsers } from '../../../lib/data'
import connectToDb from '../../../lib/utils'

const blogPage = () => {
    const [allPosts, setAllPosts] = useState([])

    const fetching = async () => {
        const posts = await getPosts();
        return setAllPosts(posts)
    };
    const users = async () => {
        const userInfo = await getUsers();
        console.log(userInfo)
    }

    // useEffect(() => {
    // }, [])

    return (
        <div className={styles.container}>
            <button onClick={fetching}>fetch</button>
            <button onClick={users}>users</button>
            {
                allPosts.map((posts) => {
                    console.log(posts)
                    return <div className={styles.post} key={posts.id}>
                        <PostCard posts={posts} />
                    </div>
                })
            }


        </div>
    )
}

export default blogPage
