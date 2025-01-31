// const posts = [
//     { id: 1, userId: 1, body: '.....', title: 'one' },
//     { id: 2, userId: 1, body: '.....', title: 'two' },
//     { id: 3, userId: 2, body: '.....', title: 'three' },
//     { id: 4, userId: 2, body: '.....', title: 'four' },
// ]
'use server'
import connectToDb from "./utils"
import { Post, User } from './model'

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        console.log(posts)
        return posts;

    } catch (error) {
        console.log(error)
        throw new Error('failed to fecth Posts')
    }
}

export const getPost = async (slug) => {
    try {
        connectToDb();
        console.log(slug)
        const singlepost = await Post.findOne({ slug });
        return singlepost;
    } catch (error) {
        console.log(error)
        throw new Error('cannot find the Post')

    }
};

export const getUser = async (userId) => {
    try {
        connectToDb();
        const getuser = await User.findById(userId)
        return getuser
    } catch (error) {
        console.log(error);
        throw new Error('cannot find the User')
    }
}
export const getUsers = async () => {
    try {
        connectToDb();
        const Users = await User.find();
        return Users;
    } catch (error) {
        console.log(error)
        throw new Error('Cannot fetch the users data')
    }
}