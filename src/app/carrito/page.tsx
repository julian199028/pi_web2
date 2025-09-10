"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: "Perfume Artesanal", price: 120000, quantity: 1 },
    { id: 2, name: "Pintura en óleo", price: 350000, quantity: 2 },
    { id: 3, name: "Artesanía en barro", price: 80000, quantity: 1 },
  ])

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto p-6">
      <Card className="shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">🛒 Tu Carrito</CardTitle>
        </CardHeader>

        <CardContent>
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Tu carrito está vacío.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Producto</TableHead>
                  <TableHead>Cantidad</TableHead>
                  <TableHead>Precio</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{item.quantity}</Badge>
                    </TableCell>
                    <TableCell>${item.price.toLocaleString()}</TableCell>
                    <TableCell>${(item.price * item.quantity).toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>

        <CardFooter className="flex justify-between items-center">
          <span className="text-xl font-bold">Total: ${total.toLocaleString()}</span>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Proceder al pago</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
