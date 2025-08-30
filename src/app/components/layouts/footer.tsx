import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Sección de derechos y texto */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="font-bold text-lg">Artesanías</h2>
          <p className="text-sm text-gray-400">© 2025 Artesanías. Todos los derechos reservados.</p>
        </div>

        {/* Sección de redes sociales */}
        <div className="flex space-x-6">
          <Link href="https://facebook.com" target="_blank" className="hover:text-blue-600 transition">
            <FaFacebook size={24} />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition">
            <FaTwitter size={24} />
          </Link>
        </div>

      </div>
    </footer>
  )
}
