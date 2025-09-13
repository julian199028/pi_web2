# 🌐 E-Commerce El Arte de Vivir – Frontend en React con Next.js

Frontend de una tienda de artesanías desarrollado con **React** y **Next.js 14**.  
Este proyecto consume la **API REST en Spring Boot** del backend y ofrece una experiencia moderna, optimizada para SEO y de carga rápida.

---

## 🚀 Tecnologías principales
- **Next.js 14** con **App Router**  
- **React 18**  
- **TypeScript**  
- **TailwindCSS** para estilos  
- **next/font** para optimización automática de fuentes (usa la familia **Geist** de Vercel)  
- **Axios** o **fetch** para consumir la API de Spring Boot  
- **Context API** o **Redux Toolkit** (según tu elección) para el estado global del carrito de compras  

---

## 🛠️ Requisitos previos
- Node.js **18+**  
- npm, yarn, pnpm o bun (cualquiera de estos gestores de paquetes)  
- Acceso a la **API Spring Boot** (por defecto: `http://localhost:8080`)  

---

## ⚙️ Configuración del proyecto

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/josesincreed/pi_web2.git
cd <pi_web2>
```

### 2️⃣ Variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto con las variables necesarias:
```bash
NEXT_PUBLIC_API_URL=http://localhost:8080
```
> Ajusta `NEXT_PUBLIC_API_URL` si tu backend está desplegado en otro dominio o puerto.

---

### ▶️ Modo desarrollo
Ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```
Luego abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.  
La página se actualiza automáticamente al editar cualquier archivo.

---

## 📦 Construcción y despliegue
Compila la aplicación para producción:
```bash
npm run build
npm run start
```
La app quedará disponible en [http://localhost:3000](http://localhost:3000).

---

## 🗂️ Estructura básica del proyecto
```bash
src/
 ├─ app/
 │   ├─ page.tsx        # Página principal
 │   ├─ layout.tsx      # Layout global
 │   ├─ products/       # Páginas dinámicas de productos
 │   └─ api/            # (Opcional) Rutas de API internas
 ├─ components/         # Componentes reutilizables (Navbar, Footer, etc.)
 ├─ context/            # Estado global (carrito, usuario, etc.)
 ├─ styles/             # Archivos CSS / Tailwind
 └─ utils/              # Funciones auxiliares
```

---

## 🛒 Funcionalidades clave
- **Catálogo de productos**: listado, búsqueda y filtrado.  
- **Carrito de compras**: añadir, eliminar y actualizar cantidades.  
- **Gestión de categorías**: filtrado por categoría.  
- **Optimización SEO** con metadatos y generación de páginas estáticas o híbridas (ISR/SSG).  
- **Responsive Design** para escritorio y móviles.

---

## 🧩 Integración con el Backend
- Consumo de endpoints REST expuestos por el backend de **Spring Boot**.  
- Validaciones de stock y precios en tiempo real antes de confirmar la compra.  
- Manejo de errores y mensajes de estado para una experiencia fluida.

---

## ☁️ Despliegue en Vercel
La forma más sencilla de desplegar este proyecto es usar **Vercel**, la plataforma creada por los desarrolladores de Next.js.

1. Crea una cuenta en [https://vercel.com](https://vercel.com).
2. Conecta tu repositorio de GitHub.
3. Vercel detectará automáticamente que es un proyecto Next.js y configurará el despliegue.  
4. En las variables de entorno del proyecto en Vercel, agrega `NEXT_PUBLIC_API_URL` con la URL de tu backend.

Consulta la [documentación oficial de despliegue en Vercel](https://nextjs.org/docs/deployment) para más detalles.

---

## 📚 Recursos para aprender más
- [Documentación de Next.js](https://nextjs.org/docs) – Aprende todas las características y la API.  
- [Tutorial interactivo de Next.js](https://nextjs.org/learn) – Ideal para principiantes.  
- [Repositorio de GitHub de Next.js](https://github.com/vercel/next.js) – Aporta ideas, revisa ejemplos y contribuye.

---

## ✅ Buenas prácticas recomendadas
- Usa **ISR** (Incremental Static Regeneration) para mejorar el rendimiento.  
- Aprovecha el tipado de **TypeScript** en componentes y hooks.  
- Implementa **Lazy Loading** para imágenes y componentes pesados.  
- Configura **ESLint** y **Prettier** para mantener un código limpio y consistente.  
- Realiza pruebas con **Jest** o **React Testing Library** para asegurar la calidad del frontend.
