import { MachineCard } from "../ui/card";

export default function StudioPage() {
  return (
    <div className="container gap-8 w-full h-full">
      <h1 className=" font-abc-favorit-regular text-6xl text-blue pt-16">
        Studio /
      </h1>

      <p className="font-abc-favorit-regular antialiased text-2xl py-8 indent-24">
        Optimisez et rentabilisez la gestion de votre e-commerce. Notre studio
        photo est équipé de plusieurs machines de prises de vues pour répondre à
        tous vos besoins.
      </p>

      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <MachineCard
            title="Vertical / Mannequin Invisible"
            description="Packshot vertical"
            image="https://images.unsplash.com/photo-1682687981715-fa2ff72bd87d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D"
            imageAlt="test"
          />

          <MachineCard
            title="Horizontal / Packshot à plat"
            description="Idéal pour les photos de produits, le packshot à plat"
            image="https://images.unsplash.com/photo-1682687981715-fa2ff72bd87d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D"
            imageAlt="test"
          />
        </div>

        <div className="flex gap-8">
          <MachineCard
            title="Eclipse / Accessoires"
            description="Idéal pour les photos et accessoires"
            image="https://images.unsplash.com/photo-1682687981715-fa2ff72bd87d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D"
            imageAlt="test"
          />
          <MachineCard
            title="Live / Porté"
            description="Photos / vidéos de produits portés"
            image="https://images.unsplash.com/photo-1682687981715-fa2ff72bd87d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D"
            imageAlt="test"
          />
        </div>

        <div className="flex- 1 md:col-span-1 flex flex-col justify-between gap-4 h-full">
          <MachineCard
            title="Cyclorama"
            description="Production libre"
            image="https://images.unsplash.com/photo-1682687981715-fa2ff72bd87d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D"
            imageAlt="test"
          />
        </div>
      </div>
    </div>
  );
}
