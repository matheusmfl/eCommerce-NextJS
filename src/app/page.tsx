'use client'
import { signIn, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className=" bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            className="bg-white px-4 p-2 rounded-lg text-black"
            onClick={() => signIn('google')}
          >
            Login With Google
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-blue-900 min-h-screen">
      <div>logged In {session.user?.email}</div>
    </div>
  )
}
