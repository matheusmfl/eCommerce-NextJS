import Link from 'next/link'

export default function Products() {
  return (
    <div>
      <Link
        href={`/products/new`}
        className="bg-green-500 rounded-md text-slate-50 py-1 px-2"
      >
        Cadastrar novo produto
      </Link>
    </div>
  )
}
