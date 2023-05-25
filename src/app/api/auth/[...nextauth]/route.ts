import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const prisma = new PrismaClient()

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // OAuth authentication providers...

    GoogleProvider({
      clientId:
        process.env.GOOGLE_ID ??
        '121277312854-qb053l3l69bdbm6i5fdfhep8qf98flqc.apps.googleusercontent.com',
      clientSecret:
        process.env.GOOGLE_SECRET ?? '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',
    }),
  ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
