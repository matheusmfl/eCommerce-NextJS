'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  const { data: session } = useSession()
  if (!session) return
  return (
    <div className="text-blue-900 flex justify-between">
      <h2>Olá, {session?.user?.name}</h2>
      <div className="flex gap-2 cursor-pointer items-center justify-center">
        <Image
          src={session?.user?.image as string}
          width={24}
          height={24}
          alt="Img alternativa"
          className="rounded-full"
        />
        <span>{session?.user?.name}</span>
      </div>
    </div>
  )
}
