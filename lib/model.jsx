'use server'
import mongoose from "mongoose";


export const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        img: {
            type: String
        },
        isAdmin: {
            type: Boolean,
            required: true,
        },
        isActive: {
            type: Boolean,
            required: true,
        }


    }, { timestamps: true })

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },


    }, { timestamps: true })


export const Post = mongoose.models?.Post || mongoose.model('Post', postSchema);
export const User = mongoose.models?.User || mongoose.model('User', userSchema);