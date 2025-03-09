"use server"
import { signOut, signIn } from "@/auth"

export const LogOut = async () => {
    return (
        await signOut()
    )
}
export const SignIn = async () => {

    return (
        await signIn('github')
    )
}


