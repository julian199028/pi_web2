import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/ui/card";
import Link from "next/link";
import { CarouselDemo } from "./components/layouts/carousel";
import React from "react";



const productos = [
  { id: 1, nombre: "Cuadro artesanal", categoria: "arte", precio: 100, imagen: "/banner2.jpg" },
  { id: 2, nombre: "Ambientador", categoria: "perfume", precio: 50, imagen: "/budaazul.jpg" },
  { id: 3, nombre: "Cuadro artesanal", categoria: "arte", precio: 100, imagen: "/banner2.jpg" },
  { id: 4, nombre: "Ambientador", categoria: "perfume", precio: 50, imagen: "/budaazul.jpg" },
  { id: 5, nombre: "Cuadro artesanal", categoria: "arte", precio: 100, imagen: "/banner2.jpg" },
  { id: 6, nombre: "Ambientador", categoria: "perfume", precio: 50, imagen: "/budaazul.jpg" },
];

export default function Home() {
  return (
    <>
      <CarouselDemo />

      <section className="p-8">
        <h1 className="text-3xl font-bold mb-10 text-center">Nuevos productos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
          {productos.map((producto) => (
            <Card key={producto.id}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold">{producto.nombre}</h2>
                <p>${producto.precio}</p>
                <Link href={`/producto/${producto.id}`}>
                  <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
                    Ver más
                  </button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}