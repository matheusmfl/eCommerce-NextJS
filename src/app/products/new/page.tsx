'use client'

// import { axios } from '@/lib/axios'
import { useState } from 'react'

export default function NewProduct() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  async function handlerSubmitForm(e: any) {
    event?.preventDefault()
    await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, price }),
    })
  }
  return (
    <div className="flex flex-col font-bold">
      <h1>Novo produto</h1>
      <form
        className="flex flex-col font-bold"
        action=""
        onSubmit={(e) => handlerSubmitForm(e)}
      >
        <label>Nome do produto</label>
        <input
          type="text"
          placeholder="Nome do produto"
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
        />
        <label>Descrição do produto</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição do produto"
          className="w-full h-32 resize-none"
        />
        <label>Preço do produto</label>
        <input
          value={price}
          type="text"
          placeholder="Preço"
          onChange={(e: any) => setPrice(e.target.value)}
        />

        <div className="flex items-center justify-center w-32">
          <button className="btn-primary w-full ">Salvar</button>
        </div>
      </form>
    </div>
  )
}
