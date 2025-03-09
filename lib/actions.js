"use server"
import { Post } from "./model"
import connectToDb from "./utils"



export const actions = async (formData) => {
    "use server"
    const { userId, title, desc, slug } = Object.fromEntries(formData)
    try {
        connectToDb();
        const newPost = new Post({
            userId,
            title,
            desc,
            slug
        })
        await newPost.save();
        console.log('saved to DB')

    } catch (err) {
        console.log(err)
    }
}

