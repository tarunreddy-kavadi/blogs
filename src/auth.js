import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            // authorization: {
            //     params: {
            //         prompt: "consent",
            //         access_type: "offline",
            //         response_type: "code",
            //     },
            // },
        }),
    ],
});

export const Login = async () => {
    "use server"
    await signIn("github");
}































// import NextAuth from "next-auth"
// // import GithubProvider from "next-auth/providers/github"
// import GitHub from "next-auth/providers/github"
// export const { handlers, signIn, signOut, auth } = NextAuth({
//     providers: [GitHub({
//         clientId: process.env.github_id,
//         clientSecret: process.env.github_secret,
//     })],
// })




// *********** METHOD 2 *********

// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";

// // Configure NextAuth
// const authOptions = {
//     providers: [
//         GithubProvider({
//             clientId: process.env.github_id,
//             clientSecret: process.env.github_secret,
//         }),
//     ],
// };

// // Export the auth handler
// export const authHandler = NextAuth(authOptions);
// export { authHandler as GET, authHandler as POST }

// // Login function using NextAuth's client-side utilities
// import { signIn, signOut, auth } from "next-auth/react";

// export const Login = async () => {
//     "use server"

//     await signIn("github"); // This triggers the GitHub login flow
//     console.log(signIn("github"))
// };
