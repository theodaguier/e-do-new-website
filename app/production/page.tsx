"use client";

import { Gallery } from "./gallery";

const ProductionPage = () => {
  return (
    <div className="container h-full flex flex-col gap-16">
      <section className=" flex flex-col justify-between py-4">
        <div className="flex flex-col gap-8 items-baseline pt-16">
          <h1 className="text-6xl text-orange font-abc-favorit-regular">
            Production /
          </h1>
          <p className="text-4xl text-center font-favorit antialiased leading-snug">
            Confiez-nous votre production, on se charge du reste ! Casting,
            catering, talents, transport, equipements...
          </p>
        </div>
      </section>
      <section className="w=full bg-white flex-1 flex flex-col gap-8">
        <Gallery />
      </section>
    </div>
  );
};

export default ProductionPage;
