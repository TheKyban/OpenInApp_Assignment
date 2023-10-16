import NextAuth from "next-auth";
import googleProvider from "next-auth/providers/google";
const handler = NextAuth({
    providers: [
        googleProvider({
            clientId: process.env.ClientId,
            clientSecret: process.env.clientSecret,
        }),
    ],
});

export { handler as GET, handler as POST };
