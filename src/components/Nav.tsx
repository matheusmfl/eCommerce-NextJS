/* eslint-disable prettier/prettier */

import { Home, Store, Package, Settings, ShoppingCart } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


export function Nav() {
  const pathName = usePathname()


  const inactiveLink = 'flex gap-1 p-1'
  const activeLink = inactiveLink + ' bg-slate-50 text-blue-900 rounded-l-lg'




  return (
    <aside className="text-white p-4 pr-0">
      <Link href={'/'} className="flex gap-1 mb-4 mr-4">
        <Store />
        <span>Lemon E-Commerce</span>
      </Link>
      <nav className="flex flex-col gap-2">
        <Link
          href={'/'}
          className={pathName === '/' ? activeLink : inactiveLink}
        >
          <Home /> Dashboard{' '}
        </Link>

        <Link
          href={'/orders'}
          className={pathName.includes('/orders') ? activeLink : inactiveLink}
        >
          <ShoppingCart /> Pedidos{' '}
        </Link>

        <Link href={'/products'} className={pathName.includes('/products') ? activeLink : inactiveLink}>
          <Package /> Produtos{' '}
        </Link>

        <Link href={'/settings'} className={pathName.includes('/settings') ? activeLink : inactiveLink}>
          <Settings /> Configurações{' '}
        </Link>
      </nav>
    </aside>
  )
}
