import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:  "11992939544-kucqit7auubm9h982pquje7qul4g7n4f.apps.googleusercontent.com",
      clientSecret: "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"
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
})
