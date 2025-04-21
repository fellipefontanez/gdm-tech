import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async jwt({ token, account, trigger, session }) {
            if (account) {
                token.accessToken = account.access_token;
                token.favorites = [];
            }
            if (trigger === "update" && session?.user?.favorites) {
                token.favorites = session.user.favorites;
            }

            return token;
        },

        async session({ session, token }) {
            session.accessToken = token.accessToken as string;
            if (session.user) {
                (session.user as any).favorites = token.favorites || [];
            }
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
