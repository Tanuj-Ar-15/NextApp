import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'


export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23lijoOYbxiXcOG8T3',
            clientSecret: '039862f40598b7ec918bc0af7c527bc2f749189d'
        })
    ]
}

export default NextAuth(authOptions)
