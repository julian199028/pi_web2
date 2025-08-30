import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo-logo-logo.png"
            alt="Logo Artesanías"
            className="h-14 w-14 object-contain"
          />
          <span className="font-bold text-2xl text-gray-800">HOME</span>
        </div>

        {/* Navegación centrada */}
        <nav className="flex space-x-8 text-gray-700 font-medium">
          <Link href="/arte" className="hover:text-blue-600 transition-colors">
            Arte
          </Link>
          <Link href="/perfumes" className="hover:text-blue-600 transition-colors">
            Perfumes
          </Link>
          <Link href="/artesanias" className="hover:text-blue-600 transition-colors">
            Artesanías
          </Link>
        </nav>

        {/* Botones a la derecha */}
        <div className="flex space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
              Iniciar sesión
            </button>
          </Link>
          <Link href="/carrito">
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              Carrito
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
