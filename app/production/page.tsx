"use client";
import React, { VFC } from "react";

const ProductionPage = () => {
  return (
    <div>
      <section className="h-screen flex flex-col justify-between py-4">
        <div className="flex flex-col gap-8 items-baseline pt-16">
          <h1 className="text-6xl text-orange font-abc-favorit-regular">
            Production /
          </h1>
          <p className="text-2xl font-favorit antialiased leading-snug">
            Confiez-nous votre production, on se charge du reste ! Casting,
            catering, talents, transport, equipements...
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductionPage;
