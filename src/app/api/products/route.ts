import { prisma } from '@/lib/prisma'
import { randomUUID } from 'node:crypto'
import { NextResponse } from 'next/server'

interface Producs {
  title: string
  description: string
  price: string
}

export async function GET(request: Request) {
  const products = await prisma.products.findMany()

  return NextResponse.json(products)
}

export async function POST(request: Request) {
  const { description, title, price }: Producs = await request.json()
  console.log(description, title, price)

  const products = await prisma.products.create({
    data: {
      id: randomUUID(),
      description,
      price,
      title,
    },
  })
  console.log(products)
  return NextResponse.json({ products })
}
