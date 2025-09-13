"use client";

import {Carousel} from "@/components/ui/carousel";
export  function CarouselDemo() {
  const slideData = [
    {
      title: "Buda",
      button: "Comprar",
      src: "budadelado.jpg",
    },
    {
      title: "Collar de cobre",
      button: "Comprar",
      src: "collarcobre.jpg",
    },
    {
      title: "Cuadro de Caballos",
      button: "Comprar",
      src: "caballos.jpg",
    },
    {
      title: "Buda Azul",
      button: "Comprar",
      src: "budaazul.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
